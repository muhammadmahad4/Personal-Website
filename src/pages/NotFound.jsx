import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="text-6xl font-bold text-brand-600 dark:text-brand-400">404</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Page not found</p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Go home
      </Link>
    </div>
  );
}
