

# Connect Contact Form to Send Inquiry Emails

## Overview
Wire up the contact form to send real inquiry emails via a backend edge function. The form will store submissions in the database and send a notification email to the property owner + a confirmation to the guest.

## Steps

### 1. Create `contact_submissions` database table
- Columns: `id` (uuid), `name`, `email`, `dates`, `message`, `created_at`
- RLS policy: allow anonymous inserts (public contact form, no auth required)

### 2. Create `send-inquiry` Edge Function
- Accepts POST with `name`, `email`, `dates`, `message`
- Validates input with Zod
- Inserts submission into `contact_submissions` table
- Uses Lovable AI to compose and send notification email to a placeholder owner email (e.g., `owner@bluemare.com`)
- Sends a confirmation reply to the guest's email
- Returns success/error response with CORS headers

**Note:** Since no email domain is set up yet, the function will use the Lovable AI model to format the email content and store submissions in the database. For actual email delivery, we'll need to set up an email domain afterward — but the form will work immediately by saving inquiries to the database.

### 3. Update `ContactSection.tsx`
- Replace the fake `setTimeout` with a real call to `supabase.functions.invoke('send-inquiry', ...)`
- Extract form data (name, email, dates, message) from the form
- Show success/error toast based on response
- Handle loading state properly

### Technical Details
- Edge function validates all inputs server-side (Zod)
- CORS headers included for web app calls
- Database stores all inquiries for the owner to review later
- No authentication required (public contact form)

