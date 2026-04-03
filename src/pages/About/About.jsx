import { aboutIntro, aboutImageUrl } from "@/data/sefinContent";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            {aboutIntro.heading}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={aboutImageUrl}
                  className="rounded-[15px] shadow block w-full h-auto object-cover"
                  alt="Developer workspace"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              {aboutIntro.paragraphs.map((p, i) => (
                <p key={i} className="text-white leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-6">
                <blockquote className="border-l-4 border-teal-500/60 pl-4">
                  <p className="text-gray-200 italic">{aboutIntro.quote}</p>
                  <cite className="mt-4 block text-sm font-medium text-white not-italic">
                    — {aboutIntro.quoteAttribution}
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
