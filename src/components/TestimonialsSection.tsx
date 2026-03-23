import { Star } from "lucide-react";

const reviews = [
  {
    name: "Elena K.",
    text: "Absolutely stunning views! Waking up to the sea every morning was magical. The studio is modern, spotless, and has everything you need. Will definitely return.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    text: "Perfect spot for a remote work getaway. The Wi-Fi was excellent, the workspace comfortable, and the balcony view kept me inspired. Highly recommend.",
    rating: 5,
  },
  {
    name: "Sofia & Dimitar",
    text: "We loved the calm atmosphere of Byala and the studio exceeded our expectations. The self check-in was seamless and the host was incredibly responsive.",
    rating: 5,
  },
  {
    name: "James W.",
    text: "Great value for a sea-view property. The kitchenette was well equipped, the bed was comfortable, and the location is unbeatable. A hidden gem on the coast.",
    rating: 4,
  },
  {
    name: "Anna P.",
    text: "Such a peaceful and beautiful place. The sunset from the balcony is unforgettable. Everything was clean and well-maintained. Thank you for a lovely stay!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Guest Reviews
          </h2>
          <p className="text-foreground/60 font-body max-w-xl mx-auto">
            Don't just take our word for it — hear from guests who've stayed at Blue Mare.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-xl p-6 ${
                i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className={s < review.rating ? "text-secondary fill-secondary" : "text-muted-foreground/30"}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/70 font-body leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-semibold font-body">
                  {review.name.charAt(0)}
                </div>
                <span className="text-sm font-body font-medium text-foreground">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
