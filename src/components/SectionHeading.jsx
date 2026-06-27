export default function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      {label && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
