"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={cn("sticky top-4 z-[5000] mb-2 md:mb-3", className)}>
      <div className="relative mx-auto w-full max-w-[1500px] rounded-2xl border border-white/[0.12] bg-[#080b1c]/80 px-4 shadow-[0_8px_32px_rgba(69,42,142,0.12)] backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="grid min-h-[72px] grid-cols-[auto_1fr_auto] items-center gap-4">
          <Link
            href="#home"
            aria-label="Go to home"
            className="group flex min-w-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple via-[#9a87ff] to-[#68a5ff] text-sm font-bold tracking-tight text-black-100 shadow-[0_0_22px_rgba(151,117,255,0.38)] transition-transform duration-300 group-hover:scale-105">
              GB
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-semibold tracking-wide text-white sm:text-base">
                Gaurab Bhul
              </span>
              <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.15em] text-white-100 sm:block">
                MERN Stack Developer
              </span>
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-5 xl:gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="group relative py-2 text-sm font-medium text-white-100 transition-colors hover:text-purple"
              >
                {item.name}
                <span className="absolute inset-x-1 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-purple to-blue-100 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-2 lg:flex">
            <SocialLink href="https://github.com" label="GitHub">
              <FaGithub className="h-[17px] w-[17px]" />
            </SocialLink>
            <SocialLink href="https://linkedin.com" label="LinkedIn">
              <FaLinkedinIn className="h-4 w-4" />
            </SocialLink>
            <WorkLink />
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] text-white transition-colors hover:border-purple/60 hover:text-purple lg:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/[0.1] py-3 lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-white-100 transition-colors hover:bg-white/[0.05] hover:text-purple"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-2 flex items-center gap-2 px-3 pb-2 pt-1">
              <SocialLink href="https://github.com" label="GitHub">
                <FaGithub className="h-[17px] w-[17px]" />
              </SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <FaLinkedinIn className="h-4 w-4" />
              </SocialLink>
              <WorkLink onClick={closeMenu} className="ml-auto" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-white-100 transition-all hover:-translate-y-0.5 hover:border-purple/60 hover:bg-purple/15 hover:text-purple"
  >
    {children}
  </a>
);

const WorkLink = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) => (
  <Link
    href="#contact"
    onClick={onClick}
    className={cn(
      "inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#9673f5] via-purple to-[#6c9cff] px-4 text-sm font-semibold text-black-100 shadow-[0_8px_22px_rgba(128,91,234,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(128,91,234,0.42)]",
      className
    )}
  >
    Let&apos;s Work <span className="ml-1.5 text-base leading-none">→</span>
  </Link>
);
