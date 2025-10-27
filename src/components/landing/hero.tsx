import { ShieldCheck } from "lucide-react";
import CTAButtons from "./cta-buttons";

export default function Hero() {
  return (
    <div className="text-background relative flex h-full flex-col items-center justify-center gap-y-10 text-center text-pretty">
      <h4 className="font-inter from-primary via-primary/80 to-primary text-foreground mx-auto flex w-fit items-center gap-x-2 rounded-full bg-gradient-to-r px-4.5 py-1.5 text-xs">
        <span className="font-bold italic">FIFA Approved</span> synthetic turfs
        <ShieldCheck className="size-4" />
      </h4>
      <h1 className="font-dm-sans max-w-screen-sm text-4xl leading-tight md:text-6xl">
        This is the New Home of <span className="italic">Ballarat Sport.</span>
      </h1>

      <h3 className="font-inter max-w-screen-sm text-base md:text-xl">
        Get Ready, Ballarat's premier courts with all gear provided for Futsal,
        AFL, and Cricket are opening soon. Sign up for launch news and offers.
      </h3>

      <CTAButtons />
    </div>
  );
}
