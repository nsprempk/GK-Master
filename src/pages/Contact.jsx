import { Mail, MessageCircle, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  return (
    <main className="container-wide py-16 lg:py-24">
      <SectionHeading
        eyebrow="Support"
        title="Need help with GK Master?"
        text="For app support, privacy questions, or feedback, contact the GK Master support team."
        centered
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
        <a href="mailto:support@awesomestory.site" className="card p-6 hover:border-blue-400/20">
          <Mail className="text-blue-300" size={24} />
          <h2 className="mt-5 font-display text-lg font-bold">Email support</h2>
          <p className="mt-2 break-all text-sm leading-6 text-slate-400">support@awesomestory.site</p>
        </a>

        <div className="card p-6">
          <MessageCircle className="text-yellow-300" size={24} />
          <h2 className="mt-5 font-display text-lg font-bold">Feedback</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">Tell us what would make the quiz experience better.</p>
        </div>

        <div className="card p-6">
          <ShieldCheck className="text-emerald-300" size={24} />
          <h2 className="mt-5 font-display text-lg font-bold">Privacy</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">See the published privacy policy for information about ads and data handling.</p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.025] p-7">
        <h3 className="font-display text-2xl font-bold">Before contacting support</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          Include your Android version, app version, and a brief description of the issue when possible. Never send passwords, payment credentials, or other secrets by email.
        </p>
      </div>
    </main>
  );
}