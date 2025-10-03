"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type RuleItem = {
  title: string;
  bullets: string[];
};

type SportRules = {
  sport: string;
  sections: RuleItem[];
};

const rules: SportRules[] = [
  {
    sport: "Box Cricket",
    sections: [
      {
        title: "I. Game Format & Teams",
        bullets: [
          "Each match consists of one innings per team, with each innings lasting a maximum of 10 overs.",
          "Teams are comprised of 6 players. On the field, the composition is 1 bowler, 1 wicket-keeper, and 4 fielders.",
        ],
      },
      {
        title: "II. Batting & Scoring",
        bullets: [
          "Runs are scored by hitting the ball into designated scoring zones. With the exception of a 6, runs are awarded only upon the successful completion of a physical run between the wickets.",
          "The scoring zones are as follows:",
          "1 Run: The batted ball does not cross the yellow line.",
          "2 Runs: The batted ball crosses the first line.",
          "4 Runs: The batted ball crosses the second line.",
          "6 Runs: The batted ball hits the front net on the full. A physical run is not required.",
        ],
      },
      {
        title: "III. Dismissals",
        bullets: [
          "Standard cricket dismissal rules apply, including Bowled, Caught, Stumped, Run Out, and Hit Wicket.",
          "The Leg Before Wicket (LBW) rule is not in effect.",
          "Rebound Catches: A batsman can be dismissed 'Caught' off a rebound from any of the nets, provided the ball has not touched the ground.",
          "An innings is complete when either the 10 overs are bowled or all 6 batsmen are dismissed.",
          "Last Man Stands: The last remaining batsman is permitted to bat alone. However, they can be run out at either end of the wicket.",
        ],
      },
      {
        title: "IV. Umpiring & Disputes",
        bullets: [
          "The game is self-umpired by the players in the spirit of fair play.",
          "Any disputes over close calls will be resolved by reviewing a delayed video replay when available.",
        ],
      },
    ],
  },
  {
    sport: "Futsal",
    sections: [
      {
        title: "I. Game Format & Teams",
        bullets: [
          "Each match consists of two 15-minute halves. The game is designed for continuous play with minimal stoppages.",
          "Teams are comprised of 5 players. On the field, the composition is 1 Goalkeeper and 4 Outfield Players.",
          "Substitutions: A maximum of 2 substitutions per team are permitted during a match. An exception is made in the case of a verifiable injury.",
        ],
      },
      {
        title: "II. Gameplay & Scoring",
        bullets: [
          "A goal is worth one (1) point and is scored when the entire ball passes over the goal line, between the posts and under the crossbar.",
          "Rebound Play: The surrounding nets are considered live. A ball rebounding off any net is in play. There are no throw-ins or out-of-bounds.",
          "Goalkeeper Rules: The goalkeeper is not permitted to handle the ball (use their hands) once they have left their designated goal box.",
        ],
      },
      {
        title: "III. Fouls & Penalties",
        bullets: [
          "Fouls are called for actions such as pushing, handball, or any play deemed dangerous by the opposition. All free kicks are direct.",
          "5-Foul Limit: A penalty kick will be awarded to the opposition for every foul committed by a team after they have accumulated five (5) team fouls in a single half.",
        ],
      },
      {
        title: "IV. Officiating & Disputes",
        bullets: [
          "All matches are self-officiated by the players in the spirit of fair play.",
          "Disputes over contentious fouls or goal-line decisions will be resolved by reviewing the delayed video replay available on the court-side screens.",
        ],
      },
    ],
  },
  {
    sport: "Indoor AFL",
    sections: [
      {
        title: "I. Game Format & Teams",
        bullets: [
          "Each match consists of two 15-minute halves of continuous play. The clock will only be stopped for a serious foul or injury.",
          "Teams are comprised of 5 players. On the field, the composition is 1 Goalkeeper, 1 Ruck, and 3 Fielders.",
        ],
      },
      {
        title: "II. Scoring",
        bullets: [
          "Points are scored by kicking the ball through the designated goal area. The field is divided into zones which dictate how points are awarded.",
          "Goal (3 Points): The ball is kicked through the central goalposts.",
          "Behind (1 Point): The ball makes contact with the goal netting area outside of the posts.",
          "Midfield Rule: The ball must be passed at least once after it has crossed the midfield line before a team is eligible to score.",
        ],
      },
      {
        title: "III. Rules of Play",
        bullets: [
          "The game is designed for fast, continuous action. Standard AFL rules are in effect, with modifications for the indoor format.",
          "Rebound Play: The surrounding nets are considered live. A ball rebounding off any net remains in play and can be played immediately. There is no out-of-bounds.",
          "Tackling: Standard tackling is permitted. However, any tackle making contact above the shoulders is considered a high tackle and will be penalized.",
          "Fouls: A push in the back or a high tackle will result in a free kick to the opposing team.",
        ],
      },
      {
        title: "IV. Officiating & Disputes",
        bullets: [
          "All matches are self-officiated by the players in the spirit of fair play and good sportsmanship.",
          "Any disputes regarding close goal decisions will be resolved by reviewing the delayed video replay available on the court-side screens.",
        ],
      },
    ],
  },
];

function SportCollapsible({
  sport,
  sections,
  defaultOpen,
}: SportRules & { defaultOpen?: boolean }) {
  const [open, setOpen] = useState<boolean>(Boolean(defaultOpen));
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button
          className={cn(
            "bg-primary text-primary-foreground rounded-brand w-full cursor-pointer px-4 py-4 text-left text-2xl font-medium shadow-sm transition-colors",
            "font-roboto-condensed flex items-center justify-between shadow-md",
          )}
        >
          <span>{sport}</span>
          {open ? (
            <ChevronUp className="size-5" />
          ) : (
            <ChevronDown className="size-5" />
          )}
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="mt-3">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="max-h-96 overflow-y-auto pr-2">
            {sections.map((section) => (
              <div key={section.title} className="mb-6 last:mb-0">
                <h3 className="font-roboto-condensed text-lg font-semibold">
                  {section.title}
                </h3>
                <ul className="font-inter mt-2 list-disc space-y-2 pl-5 text-sm font-medium">
                  {section.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-screen-2xl p-4 py-10">
      <h1 className="font-dm-sans text-center text-4xl font-bold sm:text-5xl">
        The Sportsbook
      </h1>
      <h3 className="font-inter mx-auto mt-4 max-w-2xl text-center text-base font-medium tracking-wider text-pretty sm:text-lg">
        Every great game needs a clear set of rules. Here you'll find everything
        you need to know to keep our matches fun, fast, and fair for everyone
      </h3>

      <div className="mt-8 space-y-5">
        <SportCollapsible
          sport={rules[0].sport}
          sections={rules[0].sections}
          defaultOpen
        />
        <SportCollapsible sport={rules[1].sport} sections={rules[1].sections} />
        <SportCollapsible sport={rules[2].sport} sections={rules[2].sections} />
      </div>

      <div className="mt-6">
        <Link href="/Ballarat_Box_Sports_Rulebook.pdf" target="_blank">
          <div className="bg-foreground text-primary rounded-brand font-roboto-condensed hover:bg-foreground/80 mx-auto flex cursor-pointer items-center justify-between p-2 px-3 text-xs font-semibold sm:text-base">
            <p>Click Here to download the Sportsbook PDF!</p>

            <div className="bg-background text-foreground rounded-sm p-1">
              <ChevronRight className="size-3 sm:size-4" />
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
