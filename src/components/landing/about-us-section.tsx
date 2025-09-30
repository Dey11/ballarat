import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl p-4 pt-16">
        <h2 className="font-dm-sans mt-5 text-center text-4xl font-semibold text-pretty">
          Built for Ballarat
        </h2>
        <h3 className="font-inter mx-auto mt-3 max-w-xl px-4 text-center font-medium text-pretty">
          We built a welcoming space for the entire Ballarat sports community,
          from serious teams chasing a title to mates just after a fun hit-out.
        </h3>
      </div>

      <div className="bg-foreground text-background font-inter mb-5 px-2 py-3 text-center">
        Ballarat’s only venue offering Box Cricket, Futsal & AFL together in one
        space
      </div>

      <div className="mx-auto max-w-screen-xl p-4 pb-16">
        <div className="relative">
          <h3 className="bg-primary rounded-brand font-roboto-condensed mb-5 px-4 py-3 text-2xl">
            Our Goals.
          </h3>

          <Image
            src="/about-us/football.png"
            alt="Our Goals"
            width={100}
            height={100}
            className="absolute top-5 -left-10 -z-10 rotate-45"
          />
        </div>

        <div className="flex flex-col items-stretch justify-center gap-5 md:flex-row md:items-center">
          <div className="rounded-brand w-full flex-1 bg-white p-5 sm:p-8">
            <div className="bg-primary rounded-brand relative h-80 overflow-hidden p-5 sm:p-8">
              <h4 className="font-dm-sans text-xl sm:text-2xl">
                Multi Sport Setup
              </h4>

              <p className="font-inter max-w-sm pt-3 text-sm sm:text-base">
                Our venue was engineered to be a true hub for local passions. We
                offer professional, dedicated setups for Ballarat's favourite
                sports: Futsal, AFL, and Box Cricket.
              </p>

              <Image
                src="/about-us/futsal.svg"
                alt="Multi Sport Setup"
                width={80}
                height={80}
                className="absolute inset-y-23 right-0 hidden sm:block"
              />
              <Image
                src="/about-us/indoor-afl.svg"
                alt="Multi Sport Setup"
                width={120}
                height={120}
                className="absolute right-0 bottom-0 sm:block"
              />
              <Image
                src="/about-us/box-cricket.svg"
                alt="Multi Sport Setup"
                width={160}
                height={160}
                className="absolute right-27 bottom-0 hidden sm:block"
              />
            </div>
          </div>

          <div className="rounded-brand w-full flex-1 bg-white p-5 sm:p-8">
            <div className="bg-primary rounded-brand relative flex h-80 flex-col justify-between overflow-hidden p-5 sm:p-8">
              <div className="flex-1">
                <h4 className="font-dm-sans text-xl sm:text-2xl">
                  Secure Space
                </h4>

                <p className="font-inter pt-3 text-sm sm:text-base">
                  Our venue is perfect for local sports like Futsal, AFL, and
                  Box Cricket. Enjoy low injury risk and excellent lighting for
                  a top-notch experience.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-inter bg-foreground text-primary w-full rounded-md px-4 py-2 text-center text-sm font-semibold sm:text-base">
                  <span className="italic">FIFA approved</span> synthetic turfs
                </div>
                <div className="flex flex-wrap gap-2 text-sm">
                  <div className="font-inter border-foreground min-w-44 flex-1 rounded-md border bg-transparent px-4 py-1 text-center font-semibold text-nowrap">
                    Protection from harsh weather
                  </div>
                  <div className="font-inter border-foreground min-w-44 flex-1 rounded-md border bg-transparent px-4 py-1 text-center font-semibold">
                    Professional Grade lighting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-dm-sans relative flex flex-wrap items-center justify-center gap-5 pt-5 text-center text-sm md:text-xl">
          <div className="bg-foreground text-primary rounded-brand flex-1 px-4 py-3 text-nowrap">
            Providing affordable sports for all!
          </div>
          <div className="bg-foreground text-primary rounded-brand flex-1 px-4 py-3 text-nowrap">
            Open 24/7 for all your sporting needs!
          </div>

          <Image
            src="/about-us/cricket-ball.png"
            alt="Cricket Ball"
            width={100}
            height={100}
            className="absolute -top-10 -right-7 -z-10"
          />
        </div>

        <h3 className="bg-primary rounded-brand font-roboto-condensed mt-10 mb-5 px-4 py-3 text-2xl">
          Founder's Note.
        </h3>

        <div className="font-inter rounded-brand relative w-full bg-white p-10 text-center text-pretty shadow-lg">
          <p className="mx-auto max-w-3xl">
            Hi everyone, I’m excited to welcome you to Ballarat Box Sports. My
            vision is to create a 24/7 space for the Ballarat community where
            anyone can enjoy cricket, futsal, or footy in a way that’s fast,
            fun, and safe. This venue is designed for those who can’t always
            commit to full local seasons but still want the thrill of playing,
            competing, and connecting. It’s about making sport more accessible,
            more flexible, and always community-driven.
          </p>

          <p className="mt-5">Jasman</p>

          <p className="text-sm text-gray-500">Founder, Ballarat Box Sports</p>

          <Image
            src="/about-us/soccer-ball.png"
            alt="Soccer Ball"
            width={100}
            height={100}
            className="absolute -bottom-10 -left-10 -z-10"
          />
        </div>
      </div>
    </div>
  );
}
