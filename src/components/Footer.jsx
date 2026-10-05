import { Link } from "react-router-dom";
import { Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="container-wide grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-400 font-display font-bold text-slate-950">GK</div>
            <span className="font-display text-lg font-bold">GK Master</span>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            A quick, friendly general knowledge quiz game for testing what you know and discovering something new.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Explore</h3>
          <div className="space-y-3 text-sm text-slate-400">
            <Link to="/categories" className="block hover:text-white">Categories</Link>
            <Link to="/features" className="block hover:text-white">Features</Link>
            <Link to="/faq" className="block hover:text-white">FAQ</Link>
            <Link to="/privacy-policy" className="block hover:text-white">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Support</h3>
          <a href="mailto:support@awesomestory.site" className="mb-3 flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <Mail size={16} /> support@awesomestory.site
          </a>
          <div className="flex items-start gap-2 text-xs leading-6 text-slate-500">
            <ShieldCheck size={15} className="mt-1 shrink-0" />
            <span>Ads and privacy information are described in the Privacy Policy.</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-wide flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 GK Master. All rights reserved.</span>
          <span>Official website: awesomestory.site</span>
        </div>
      </div>
    </footer>
  );
}