import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface InquiryBody {
  name: string;
  email: string;
  dates?: string;
  message: string;
}

function validate(body: unknown): { valid: true; data: InquiryBody } | { valid: false; error: string } {
  if (!body || typeof body !== "object") return { valid: false, error: "Invalid request body" };
  const b = body as Record<string, unknown>;

  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const dates = typeof b.dates === "string" ? b.dates.trim() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";

  if (!name || name.length > 200) return { valid: false, error: "Name is required (max 200 chars)" };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
    return { valid: false, error: "Valid email is required" };
  if (dates.length > 200) return { valid: false, error: "Dates too long (max 200 chars)" };
  if (!message || message.length > 5000) return { valid: false, error: "Message is required (max 5000 chars)" };

  return { valid: true, data: { name, email, dates: dates || undefined, message } };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const result = validate(body);

    if (!result.valid) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { name, email, dates, message } = result.data;

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store the submission in the database
    const { error: insertError } = await supabase.from("contact_submissions").insert({
      name,
      email,
      dates: dates || null,
      message,
    });

    if (insertError) {
      console.error("Insert error:", insertError);
      return new Response(JSON.stringify({ error: "Failed to save inquiry" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Notify owner via Lovable AI (compose a formatted notification)
    const OWNER_EMAIL = "yordanov.veco@gmail.com";
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (LOVABLE_API_KEY) {
      try {
        const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash-lite",
            messages: [
              {
                role: "system",
                content: "Format a brief, professional inquiry notification summary. Output only the formatted text, no extra commentary.",
              },
              {
                role: "user",
                content: `New inquiry received:\nName: ${name}\nEmail: ${email}\nDates: ${dates || "Not specified"}\nMessage: ${message}`,
              },
            ],
          }),
        });

        if (aiResponse.ok) {
          const aiData = await aiResponse.json();
          const summary = aiData.choices?.[0]?.message?.content;
          console.log(`New inquiry from ${name} (${email}). AI summary generated. Owner to be notified at: ${OWNER_EMAIL}`);
          if (summary) {
            console.log("Inquiry summary:", summary);
          }
        }
      } catch (aiErr) {
        // Non-critical: log but don't fail the request
        console.error("AI formatting error:", aiErr);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Inquiry submitted successfully" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
