export default function SectionHeading({ eyebrow, title, text, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-400">{text}</p>}
    </div>
  );
}