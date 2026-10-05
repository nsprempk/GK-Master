import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const faqs = [
  ["What is GK Master?", "GK Master is an Android general knowledge quiz game focused on short question-and-answer sessions across five core categories."],
  ["How many questions are in a quiz?", "The current quiz experience is built around 25 questions per session."],
  ["Can I reveal an answer if I don't know it?", "Yes. Choose I DON'T KNOW and use the voluntary rewarded-ad flow. The correct answer is revealed after the reward is earned."],
  ["What advertisements does GK Master use?", "The app uses Google AdMob for banner, interstitial, and rewarded advertisements."],
  ["Do I need an account?", "The core quiz experience does not require a user account."],
  ["Where can I read the privacy policy?", "The current privacy policy is available at /privacy-policy and is intended to be the public policy page for the GK Master Android app."],
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <main className="container-wide py-16 lg:py-24">
      <SectionHeading
        eyebrow="Questions"
        title="Frequently asked questions"
        text="A few quick answers about the GK Master experience."
        centered
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faqs.map(([q, a], index) => {
          const isOpen = active === index;
          return (
            <div key={q} className="rounded-2xl border border-white/10 bg-white/[0.03]">
              <button
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left"
                onClick={() => setActive(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-white">{q}</span>
                <ChevronDown size={18} className={`shrink-0 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-slate-400">{a}</div>}
            </div>
          );
        })}
      </div>
    </main>
  );
}