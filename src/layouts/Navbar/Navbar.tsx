"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-16px)] -translate-x-1/2">
      <nav className="mx-auto flex h-12 w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#111111]/90 px-7 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <Link
          href="/"
          className="font-mono text-sm tracking-[0.18em] text-neutral-400 transition-colors hover:text-white"
        >
          quanthai.dev
        </Link>

        <div className="flex h-full items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex h-full items-center font-mono text-xs tracking-[0.14em] transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                {item.label}

                <span
                  className={`absolute right-0 bottom-0 left-0 mx-auto h-px bg-white transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;