import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { personalInfo } from "../data/portfolioData.js";
import DarkModeToggle from "./DarkModeToggle.jsx";

const navLinks = [
  { label: "Home", href: "/#hero", isRoute: false },
  { label: "Experience", href: "/#experience", isRoute: false },
  { label: "Projects", href: "/#projects", isRoute: false },
  { label: "Blog", href: "/blog", isRoute: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleNavClick = (href, isRoute) => {
    if (!isRoute && location.pathname !== "/") {
      return;
    }
    if (!isRoute && href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-lg font-bold text-brand-700 dark:text-brand-400"
        >
          MM
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.isRoute ? (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-600 dark:hover:text-brand-400 ${
                    location.pathname.startsWith("/blog")
                      ? "text-brand-600 dark:text-brand-400"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  to={location.pathname === "/" ? link.href : `/${link.href}`}
                  onClick={() => handleNavClick(link.href, false)}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <DarkModeToggle />
          <a
            href={personalInfo.cvPath}
            download
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600"
          >
            Download CV
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <DarkModeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className="block text-base font-medium text-slate-700 dark:text-slate-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    to={location.pathname === "/" ? link.href : `/${link.href}`}
                    onClick={() => handleNavClick(link.href, false)}
                    className="block text-base font-medium text-slate-700 dark:text-slate-200"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a
                href={personalInfo.cvPath}
                download
                className="inline-block rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
