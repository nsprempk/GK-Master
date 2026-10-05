import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, BookOpen, Brain, CheckCircle2, Crown, Globe2, Lightbulb, Play, Sparkles, Trophy, Zap } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const categories = [
  { icon: <Globe2 size={22} />, title: "Indian GK", text: "India-focused facts, places, people, culture, and current knowledge." },
  { icon: <Globe2 size={22} />, title: "World GK", text: "Challenge yourself with countries, capitals, landmarks, and world facts." },
  { icon: <Lightbulb size={22} />, title: "Science", text: "Explore questions across everyday science, nature, space, and discovery." },
  { icon: <BookOpen size={22} />, title: "History & Geography", text: "Travel through important events, places, maps, and famous stories." },
  { icon: <Zap size={22} />, title: "Technology", text: "Test your knowledge of computers, internet, devices, and digital history." },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid grid-bg opacity-40" />
        <div className="hero-orb absolute -left-28 top-12 h-64 w-64 rounded-full bg-blue-500/20" />
        <div className="hero-orb absolute -right-24 top-20 h-72 w-72 rounded-full bg-amber-400/15" />

        <div className="container-wide relative grid min-h-[680px] items-center gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
              <Sparkles size={14} /> General knowledge quiz game
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Think faster.
              <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-white bg-clip-text text-transparent">
                Learn more.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              GK Master turns everyday knowledge into quick, rewarding quiz sessions with categories for India, the world, science, history, geography, and technology.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3.5 font-bold text-slate-950 hover:bg-yellow-300"
              >
                <Play size={18} fill="currentColor" /> Get GK Master <ArrowRight size={18} />
              </a>
              <Link
                to="/categories"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white hover:bg-white/[0.07]"
              >
                Explore Categories
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2"><BadgeCheck size={16} className="text-emerald-300" /> 25-question sessions</span>
              <span className="inline-flex items-center gap-2"><BadgeCheck size={16} className="text-emerald-300" /> Rewarded answer reveal</span>
              <span className="inline-flex items-center gap-2"><BadgeCheck size={16} className="text-emerald-300" /> Sound & music</span>
            </div>
          </div>

          <div className="relative">
            <div className="mx-auto max-w-md rounded-[32px] border border-white/10 bg-gradient-to-b from-slate-800 to-slate-950 p-3 shadow-2xl shadow-blue-950/40">
              <div className="rounded-[26px] border border-white/10 bg-slate-950 p-5">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="font-semibold text-white">Question 7 / 25</span>
                  <span className="rounded-full bg-yellow-400/10 px-3 py-1 font-semibold text-yellow-300">40 pts</span>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">Indian GK</div>
                  <p className="font-display text-xl font-bold leading-8 text-white">What is the capital of India?</p>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900 px-4 py-4 text-sm text-slate-500">
                  Type your answer...
                </div>

                <button className="mt-3 w-full rounded-2xl bg-blue-500 px-4 py-3.5 font-bold text-white">
                  SUBMIT ANSWER
                </button>

                <button className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-semibold text-slate-200">
                  I DON'T KNOW • WATCH AD
                </button>

                <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-center text-sm text-emerald-200">
                  Reward earned → Correct answer revealed
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/10 text-amber-300"><Crown size={19} /></div>
                <div>
                  <div className="text-xs text-slate-500">Quiz mode</div>
                  <div className="font-semibold text-white">Master the board</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-7 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-400/10 text-blue-300"><Trophy size={19} /></div>
                <div>
                  <div className="text-xs text-slate-500">Quick sessions</div>
                  <div className="font-semibold text-white">Play anytime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40 py-6">
        <div className="container-wide grid gap-4 sm:grid-cols-3">
          {[
            ["25", "questions per session"],
            ["5", "core categories"],
            ["1", "simple goal: keep learning"],
          ].map(([value, label]) => (
            <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="font-display text-3xl font-bold text-yellow-300">{value}</div>
              <div className="text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide py-20 lg:py-24">
        <SectionHeading
          eyebrow="Built for curiosity"
          title="Five ways to challenge yourself"
          text="Jump into a category, answer quickly, and keep moving. GK Master is designed around short sessions that are easy to understand and satisfying to finish."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <div key={item.title} className="card group p-6 hover:-translate-y-1 hover:border-blue-400/20">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-400/10 text-blue-300">{item.icon}</div>
              <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              <Link to="/categories" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white">
                Explore <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container-wide pb-24">
        <div className="card overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">Rewarded learning</div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Don't know the answer? Keep the game moving.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                GK Master offers a voluntary rewarded-ad option. Watch an ad and the correct answer is revealed after the reward is earned.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                "Choose I DON'T KNOW",
                "Watch the rewarded ad",
                "Finish the ad to earn the reward",
                "See the correct answer",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-yellow-400 font-bold text-slate-950">{index + 1}</div>
                  <span className="text-sm font-medium text-slate-200">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="border-t border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 py-20">
        <div className="container-wide text-center">
          <div className="mx-auto max-w-2xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Coming to Google Play</div>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Ready to test your knowledge?</h2>
            <p className="mt-4 text-slate-400">The official GK Master Android experience is designed for quick quiz sessions, simple controls, and steady learning.</p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-200">
              <CheckCircle2 size={17} className="text-emerald-300" /> Google Play release in progress
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}