import { ArrowRight, BookOpen, Globe2, Lightbulb, MapPinned, Cpu } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const items = [
  { icon: Globe2, title: "Indian GK", tone: "from-orange-400/20 to-white/[0.03]", desc: "Explore facts about India, including places, culture, people, symbols, and everyday knowledge." },
  { icon: Globe2, title: "World GK", tone: "from-blue-400/20 to-white/[0.03]", desc: "Test yourself on countries, capitals, landmarks, geography, and interesting facts from around the world." },
  { icon: Lightbulb, title: "Science", tone: "from-yellow-300/20 to-white/[0.03]", desc: "Answer questions across nature, physics, biology, space, and science you meet in everyday life." },
  { icon: MapPinned, title: "History & Geography", tone: "from-emerald-300/20 to-white/[0.03]", desc: "Revisit important events, places, physical geography, and stories that shaped the world." },
  { icon: Cpu, title: "Technology", tone: "from-violet-300/20 to-white/[0.03]", desc: "Challenge your knowledge of computers, mobile devices, internet history, software, and digital technology." },
];

export default function Categories() {
  return (
    <main className="container-wide py-16 lg:py-24">
      <SectionHeading
        eyebrow="Quiz categories"
        title="Pick a subject. Start playing."
        text="Every category is designed for short, focused quiz sessions. Choose what you know—or use the game to discover what you don't."
        centered
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {items.map(({ icon: Icon, title, tone, desc }, index) => (
          <div key={title} className={`card overflow-hidden p-7 ${index === items.length - 1 ? "lg:col-span-2" : ""}`}>
            <div className={`rounded-3xl bg-gradient-to-br ${tone} p-7`}>
              <div className="flex items-start justify-between gap-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-slate-950/40 text-blue-200">
                  <Icon size={26} />
                </div>
                <span className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-slate-300">Category {index + 1}</span>
              </div>
              <h2 className="mt-7 font-display text-2xl font-bold">{title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">{desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
                Ready for the challenge <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center">
        <BookOpen className="mx-auto text-yellow-300" size={26} />
        <h3 className="mt-4 font-display text-xl font-bold">More quiz content can grow with the game</h3>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-7 text-slate-400">
          The category structure is designed to make future question packs and new topics easy to add.
        </p>
      </div>
    </main>
  );
}