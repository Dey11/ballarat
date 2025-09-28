import CTAButtons from "./cta-buttons";

export default function Hero() {
  return (
    <div className="text-background flex h-full flex-col items-center justify-center gap-y-10 text-center text-pretty">
      <h1 className="font-dm-sans max-w-2xl text-4xl leading-tight md:text-6xl">
        This is the New Home of <span className="italic">Ballarat Sport.</span>
      </h1>

      <h3 className="font-inter max-w-2xl text-base md:text-xl">
        Get Ready, Ballarat's premier courts for Futsal, AFL, and Cricket are
        opening soon. Sign up for launch news and offers.
      </h3>

      <CTAButtons />
    </div>
  );
}
