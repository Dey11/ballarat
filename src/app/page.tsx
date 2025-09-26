import Header from "@/components/header";

export default function page() {
  // return <main className="mx-auto max-w-screen-2xl p-4">hello world</main>;
  return (
    <main className="">
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute -inset-2 -z-10 bg-cover bg-center blur-[3px]"
          style={{
            backgroundImage: "url(/hero_img.png)",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="absolute inset-0 z-10">
          <div className="mx-auto max-w-screen-2xl p-4">
            <Header />
          </div>
        </div>
      </section>
    </main>
  );
}
