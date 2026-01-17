import { cn } from "@/lib/utils";

interface Review {
  author: string;
  text: string;
  date: string;
  role?: string;
}

const reviews: Review[] = [
  {
    author: "Tami Olson",
    role: "Realtor",
    text: "We've used Joe's Junk Removal for multiple projects- they always do a great job and leave the area looking better than expected! Highly recommend!",
    date: "2 weeks ago",
  },
  {
    author: "Jackson O'Neill",
    role: "Business Owner",
    text: "Great experience using Joe for my personal property as well as recommending to some of my clients! Communicated quickly and appropriately to help me get tasks accomplished. 10/10",
    date: "1 month ago",
  },
  {
    author: "Larry Frye",
    role: "Residential & Commercial Customer",
    text: "He and crew are great, hard working, on time, very reasonable. I use him exclusively and would recommend him to everyone",
    date: "3 weeks ago",
  },
  {
    author: "Stephen De La Gardel",
    role: "Residential Customer",
    text: "I have had Joe's Junk Removal come clear clutter out of my garage and debris out of my yard multiple times. They are both quick and courteous. They always leave the place looking better than it was. They even removed a fallen tree for me. They are fairly priced as well! Often beating the prices of other removal services. I can practically call them for anything I need removed (trees, furniture, old tvs, trash in general). They even cleaned up the dog poop in my backyard. These guys are absolute legends!!!",
    date: "1 month ago",
  },
  {
    author: "Michael Price",
    role: "Residential Customer",
    text: "Had them remove a Hot Tub for me and haul it off. Fantastic Service. They do excellent work and show up on time & get the job done.",
    date: "2 months ago",
  },
  {
    author: "Sarah M.",
    text: "Joe and Duke were amazing! They showed up on time, worked quickly, and left my garage looking spotless. Highly recommend for anyone in Tucson!",
    date: "2 weeks ago",
  },
  {
    author: "Michael T.",
    text: "Best junk removal service in town. Fair pricing, professional crew, and they were careful not to damage anything. Will definitely use again.",
    date: "1 month ago",
  },
  {
    author: "Jennifer R.",
    text: "Had a huge yard cleanup project and Joe's team knocked it out in just a few hours. They hauled away everything and even swept up after. 5 stars!",
    date: "3 weeks ago",
  },
  {
    author: "David L.",
    text: "Finally found a reliable junk removal company. They removed our old appliances safely and responsibly. Great communication throughout.",
    date: "1 month ago",
  },
  {
    author: "Amanda K.",
    text: "Joe helped us clean out my late father's house. They were compassionate, respectful, and did an incredible job. Can't thank them enough.",
    date: "2 months ago",
  },
];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={cn("w-5 h-5", filled ? "text-yellow-400" : "text-gray-300")}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function ReviewCard({
  review,
  className,
  ...props
}: React.ComponentProps<"div"> & { review: Review }) {
  return (
    <div
      data-slot="review-card"
      className={cn(
        "bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3 items-center">
          {/* Avatar */}
          <div className="flex justify-center items-center w-10 h-10 font-semibold rounded-full bg-primary/20 text-primary">
            {review.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-foreground">{review.author}</p>
            {review.role && (
              <p className="text-xs text-muted-foreground">{review.role}</p>
            )}
            <p className="text-xs text-muted-foreground">{review.date}</p>
          </div>
        </div>
        <GoogleIcon />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            filled
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="flex-1 leading-relaxed text-muted-foreground">
        &ldquo;{review.text}&rdquo;
      </p>
    </div>
  );
}

function Reviews({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="reviews"
      className={cn("py-20 sm:py-28 bg-secondary/5", className)}
      {...props}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl tracking-wide sm:text-5xl md:text-6xl font-display text-foreground">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="mx-auto mb-6 w-24 h-1 bg-primary" />

          {/* Rating Summary */}
          <div className="flex gap-4 justify-center items-center mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  filled
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">5.0</span>
          </div>
          <p className="flex gap-2 justify-center items-center text-muted-foreground">
            <GoogleIcon />
            Based on Google Reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard
              key={review.author}
              review={review}
            />
          ))}
        </div>

        {/* Additional Reviews Row */}
        <div className="grid grid-cols-1 gap-6 mx-auto mt-6 max-w-4xl md:grid-cols-2">
          {reviews.slice(3, 5).map((review) => (
            <ReviewCard
              key={review.author}
              review={review}
            />
          ))}
        </div>

        {/* CTA to Google */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex gap-2 items-center font-semibold hover:underline text-primary"
          >
            See all reviews on Google
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export { Reviews };
