import SectionHeading from "./SectionHeading.jsx";
import { leadership } from "../data/portfolioData.js";

export default function Leadership() {
  return (
    <section id="leadership" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Involvement"
          title="Leadership & Involvement"
          description="Competitions, teaching, and extracurricular activities."
        />
        <div className="space-y-3">
          {leadership.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900"
            >
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                {item.detail && (
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{item.detail}</p>
                )}
              </div>
              <p className="shrink-0 text-sm text-slate-500 dark:text-slate-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
