import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Court hire, leagues, and training pricing in Ballarat. Simple, clear pricing for knockout tournaments, casual play, and competitive leagues.",
  alternates: { canonical: "/pricing" },
  openGraph: { url: "/pricing" },
};

export default function Page() {
  return (
    <main className="py-10">
      <h1 className="font-dm-sans pt-10 text-center text-4xl font-bold sm:text-5xl">
        Simple, Clear Pricing
      </h1>
      <h3 className="font-inter mx-auto mt-5 max-w-lg text-center font-medium tracking-wider text-pretty sm:text-lg">
        More than just a court. Our prices include everything you need for a
        professional-level sporting experience.
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-5 pt-16">
        <PricingCard
          title="Knockout Tournaments"
          description="For teams seeking a thrilling one-day event, feel the excitement of a final in just one day."
          tag="Winner-takes-all cash prize"
          price="$15"
          per="person"
          href="/knockout-tournaments"
          features={knockoutTourneyFeatures}
          premium={false}
        />
        <PricingCard
          title="Casual Play"
          description="For individuals and groups looking for fun, flexible game without commitment"
          tag="Discounted rates for regular groups"
          price="$15"
          per="person"
          href="/casual-play"
          features={casualPlayFeatures}
          premium={true}
        />
        <PricingCard
          title="Competitive Leagues"
          description="For teams ready to compete for glory in our official 8-week seasons. The ultimate test of skill."
          tag="+$10/match for every player"
          price="$180"
          per="team of 6"
          href="/competitive-leagues"
          features={competitiveLeaguesFeatures}
          premium={false}
        />
      </div>
    </main>
  );
}

type PricingCardProps = {
  title: string;
  description: string;
  tag: string;
  price: string;
  per: string;
  href: string;
  features: string[];
  premium: boolean;
};

function PricingCard({
  title,
  description,
  price,
  features,
  tag,
  per,
  href,
  premium = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl p-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] sm:w-96",
        premium ? "bg-foreground text-background" : "bg-white",
      )}
    >
      <div className="flex flex-col gap-10">
        <h4 className="font-roboto-condensed text-3xl font-semibold">
          {title}
        </h4>

        <div>
          <p className="text-3xl">
            <span className="font-dm-sans font-bold">{price}</span>
            <span className={cn(!premium ? "text-gray-500" : "text-gray-400")}>
              /{per}
            </span>
          </p>
          <p>{tag}</p>
        </div>

        <p className="text-sm font-medium">{description}</p>

        <Button
          className={cn(
            "font-dm-sans cursor-pointer text-xl",
            !premium &&
              "bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:bg-white/40 hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]",
          )}
        >
          Get Started
        </Button>
      </div>

      <Separator className={cn("my-5", premium && "bg-background")} />

      <div>
        <p className="font-inter font-medium">What you get:</p>

        <ul>
          {features.map((feature, index) => (
            <span
              key={index}
              className="flex items-center gap-x-1 overflow-hidden text-sm font-medium text-nowrap text-ellipsis"
            >
              <CheckIcon className="size-2 shrink-0" />
              <li>{feature}</li>
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
}

const knockoutTourneyFeatures = [
  "High-excitement, single-day tournament format",
  "Low entry fee with a same-day cash prize",
  "A casual but competitive atmosphere",
  "Self-umpiring with instant replay screens",
  "Perfect for those who can’t commit to a full league",
  "A great way to test your skills against new opponents",
];

const casualPlayFeatures = [
  "Pay-per-person, per-hour pricing",
  "Social matchmaking to find a game",
  "Join via our exclusive WhatsApp community polls",
  "All high-quality equipment provided",
  "Perfect for solo players and small groups",
  "Play in a safe, all-weather environment",
];

const competitiveLeaguesFeatures = [
  "Guaranteed weekly matches for an 8-week season",
  "Chance to win a $1,000 AUD cash prize",
  "Live digital scoring for every match",
  "Individual player stats tracked online",
  "Online leaderboard to track your progress",
  "Pro-level lighting and FIFA-approved turf",
];
