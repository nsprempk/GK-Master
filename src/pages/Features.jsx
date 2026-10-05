import {
  Award,
  ChevronRight,
  Clock3,
  Headphones,
  RotateCcw,
  Sparkles,
  Video,
  Volume2,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const features = [
  {
    title: "25-question sessions",
    Icon: Clock3,
    text: "A compact quiz format that keeps each play session focused and easy to finish.",
  },
  {
    title: "Instant scoring",
    Icon: Award,
    text: "See the result of each answer and track your score as you move through the quiz.",
  },
  {
    title: "Previous / Next",
    Icon: RotateCcw,
    text: "Move backward or forward through the session so you can review your progress.",
  },
  {
    title: "Rewarded answer reveal",
    Icon: Video,
    text: "Voluntarily watch a rewarded ad when you don't know an answer and reveal it after earning the reward.",
  },
  {
    title: "Sound effects",
    Icon: Volume2,
    text: "Feedback sounds for correct answers, wrong answers, buttons, reveals, and quiz completion.",
  },
  {
    title: "Background music",
    Icon: Headphones,
    text: "Gentle looping music designed to stay in the background while you focus on questions.",
  },
];

export default function Features() {
  return (
    <main className="container-wide py-16 lg:py-24">
      <SectionHeading
        eyebrow="Game features"
        title="Everything you need for a clean quiz session."
        text="GK Master keeps the interface straightforward while adding the small touches that make repeated sessions more enjoyable."
        centered
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, Icon, text }) => (
          <div key={title} className="card p-6">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-400/10 text-blue-300">
              <Icon size={22} />
            </div>

            <h2 className="mt-5 font-display text-xl font-bold">{title}</h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>

            <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
              GK Master
              <ChevronRight size={14} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent p-7">
          <Sparkles className="text-blue-300" size={24} />

          <h3 className="mt-4 font-display text-2xl font-bold">
            Designed for quick play
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Start a session, answer a question, and keep going. The flow is
            intentionally simple so the quiz remains the focus.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-400/10 to-transparent p-7">
          <Headphones className="text-yellow-300" size={24} />

          <h3 className="mt-4 font-display text-2xl font-bold">
            Audio that stays in the background
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            Subtle sound effects provide feedback without overwhelming the quiz
            itself.
          </p>
        </div>
      </div>
    </main>
  );
}
