"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-chosen-bg/80 backdrop-blur-md border-b border-white/10 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo CHOSEN Interativo */}
        <Logo />

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-chosen-green transition">Home</Link>
          <Link href="/lideranca" className="hover:text-chosen-green transition">Liderança</Link>
          <Link href="/ministerios" className="hover:text-chosen-green transition">Ministérios</Link>
          <Link href="/eventos" className="hover:text-chosen-green transition">Eventos</Link>
        </nav>

        {/* Menu Hambúrguer Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-white/10 pt-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-chosen-green">Home</Link>
          <Link href="/lideranca" onClick={() => setIsOpen(false)} className="hover:text-chosen-green">Liderança</Link>
          <Link href="/ministerios" onClick={() => setIsOpen(false)} className="hover:text-chosen-green">Ministérios</Link>
          <Link href="/eventos" onClick={() => setIsOpen(false)} className="hover:text-chosen-green">Eventos</Link>
        </nav>
      )}
    </header>
  );
}