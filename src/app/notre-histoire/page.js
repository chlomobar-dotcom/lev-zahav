import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SmartImage from "@/components/SmartImage";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import Tributes from "@/components/Tributes";
import CTADonation from "@/components/CTADonation";
import { story } from "@/data/content";

export const metadata = {
  title: "Notre histoire",
  description:
    "Découvrez l'histoire de LEV ZAHAV — La Banque du Cœur : 10 ans de solidarité, de la première distribution à aujourd'hui.",
};

export default function HistoirePage() {
  return (
    <>
      <PageHero
        eyebrow={story.eyebrow}
        title={story.title}
        subtitle={story.intro}
      />

      <section className="container-wide py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <SmartImage
              src={story.image}
              alt="L'histoire de LEV ZAHAV"
              label="Photo · histoire"
              className="aspect-[4/5] rounded-[2rem] shadow-card"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="flex flex-col gap-5">
            {story.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <Stats />
      <Timeline />
      <Tributes />
      <CTADonation />
    </>
  );
}
