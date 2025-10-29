import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dumbbell, MessageCircleDashed, Trophy, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 pt-16">
      <h2 className="font-dm-sans mt-5 text-center text-4xl font-semibold text-pretty">
        More Than Just a Pitch
      </h2>
      <h3 className="font-inter mx-auto mt-3 max-w-lg text-center font-medium text-pretty">
        We provide the pitch, the gear, and a 24/7 gym like facility. All you
        and your mates need to do is show up and play.
      </h3>

      <div className="flex flex-wrap items-center justify-center gap-6 pt-10 pb-5 sm:gap-10">
        <FeatureCard
          description="Keep your head in the game, not on the score. Our automated system tracks everything live, so your team can focus on strategy and the next big play."
          image="/feature-boxes/digital-scoreboard.png"
          title="Digital Scoreboards "
        />
        <FeatureCard
          description="A quick glance at the replay screen settles any dispute, keeping the game fair, fast, and fun for everyone. Currently available for Cricket only. Replay features for AFL and Football are coming soon.
"
          image="/feature-boxes/instant-replays.png"
          title="Instant Replays"
          className="flex-col-reverse pt-4 pb-0"
          imgClass="rounded-t-xl rounded-b-none"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 py-5">
        <ValueBox
          description="Don't let a lack of numbers stop you. Our social sessions are great for meeting like-minded players and joining the Ballarat sports community."
          icon={<Users className="size-6" />}
          title="Join a Game"
        />
        <ValueBox
          description="Play with the best every time. We provide a full range of clean, well-maintained, high-quality equipment to ensure a safe experience."
          icon={<Dumbbell className="size-6" />}
          title="Gear Included"
        />
        <ValueBox
          description="Our venue is for everyone. From elite teams to beginners seeking a fun run, you'll find your perfect game at Ballarat Box Sports."
          icon={<Trophy className="size-6" />}
          title="Play Your Way"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 pb-10">
        <ValueBox
          description="We're launching a WhatsApp community to help you connect with other local players. It's the easiest way to find a casual game, jump in on a poll, and see if a league is right for you."
          icon={<MessageCircleDashed className="size-6" />}
          title="Join the Community"
          isBottomBox
        />
        <ValueBox
          description="Our system automatically generates a unique access code for every booking. The code is sent directly to you and is only active during your timeslot for total security."
          icon={<Dumbbell className="size-6" />}
          title="Smart, Secure Access"
          isBottomBox
        />
      </div>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
  className?: string;
  imgClass?: string;
};

function FeatureCard({
  title,
  description,
  image,
  className,
  imgClass,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-primary flex w-full max-w-[500px] flex-col gap-y-2 rounded-xl px-4 pb-4",
        className,
      )}
    >
      <div className="relative h-40 w-full sm:h-48">
        <Image
          src={image}
          alt={title}
          fill
          className={cn("rounded-b-xl object-cover", imgClass)}
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <h3 className="font-dm-sans text-2xl font-semibold">{title}</h3>
        <p className="font-inter max-w-md text-sm font-medium text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
}

type ValueBoxProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  isBottomBox?: boolean;
};

function ValueBox({
  title,
  description,
  icon,
  isBottomBox = false,
}: ValueBoxProps) {
  return (
    <div
      className={cn(
        "bg-foreground text-background w-full rounded-xl p-4 text-center",
        isBottomBox
          ? "max-w-84 [@media(min-width:1080px)]:max-w-[514px]"
          : "max-w-84",
      )}
    >
      <div className="flex items-center justify-center gap-x-2 pb-2">
        <h3 className="font-dm-sans text-primary text-xl font-semibold sm:text-2xl">
          {title}
        </h3>
        {icon}
      </div>
      <p className="font-inter text-sm font-medium text-pretty sm:text-base">
        {description}
      </p>
    </div>
  );
}
