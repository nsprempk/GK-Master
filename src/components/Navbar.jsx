import { Link, NavLink } from "react-router-dom";
import { BrainCircuit, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/categories", label: "Categories" },
  { to: "/features", label: "Features" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="container-wide flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/15">
            <BrainCircuit size={24} strokeWidth={2.3} />
          </div>
          <div>
            <div className="font-display text-lg font-bold tracking-tight">GK Master</div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Quiz • Learn • Play</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-white" : "text-slate-400 hover:text-white"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="mailto:support@awesomestory.site"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-yellow-200"
          >
            Get Support
          </a>
        </nav>

        <button
          className="rounded-xl border border-white/10 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 pb-5 pt-3 md:hidden">
          <div className="container-wide flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-sm ${isActive ? "bg-white/10 text-white" : "text-slate-300"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="mailto:support@awesomestory.site"
              className="mt-2 rounded-xl bg-white px-3 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Get Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
}