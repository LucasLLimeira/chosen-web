import Link from "next/link";
import { Calendar, Users, Shield, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-12 px-4 max-w-7xl mx-auto pt-6">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-chosen-card to-chosen-bg border border-white/10 p-6 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-chosen-green bg-chosen-green/10 rounded-full border border-chosen-green/20">
            Ministério de Adolescentes
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
            Teu Chamado, <br className="hidden md:block" />
            <span className="text-chosen-green drop-shadow-[0_0_15px_rgba(0,255,102,0.4)]">
              Tua Vida.
            </span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg">
            Um lugar para se conectar, crescer na fé e viver o propósito de Deus para a sua geração.
          </p>
          <div className="pt-2">
            <Link
              href="/eventos"
              className="inline-flex items-center gap-2 px-6 py-3 font-bold text-black bg-chosen-green hover:bg-chosen-darkGreen rounded-full transition shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:scale-105 active:scale-95"
            >
              Participar do Próximo Encontro
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Card do Próximo Culto */}
        <div className="w-full md:w-80 bg-chosen-card border border-white/10 rounded-2xl p-5 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-bold text-chosen-green uppercase tracking-wider">
              Próximo Culto
            </span>
            <span className="flex h-2 w-2 rounded-full bg-chosen-green animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Sábado CHOSEN</h2>
            <p className="text-xs text-muted-foreground mt-1">Sábado • 19:00h</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3 text-xs space-y-1 border border-white/5">
            <p className="font-semibold text-foreground">Tema: Novo Começo</p>
            <p className="text-muted-foreground">Rua Principal, 123 — Prédio Teen</p>
          </div>
        </div>
      </section>

      {/* Navegação Rápida (Atalhos) */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Explore o CHOSEN</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/lideranca"
            className="group p-6 rounded-2xl bg-chosen-card border border-white/10 hover:border-chosen-green/50 transition flex flex-col justify-between h-44 hover:shadow-[0_0_15px_rgba(0,255,102,0.1)]"
          >
            <Users className="text-chosen-green group-hover:scale-110 transition" size={32} />
            <div>
              <h3 className="font-bold text-lg group-hover:text-chosen-green transition">Liderança</h3>
              <p className="text-xs text-muted-foreground mt-1">Conheça os líderes e mentores do ministério.</p>
            </div>
          </Link>

          <Link
            href="/ministerios"
            className="group p-6 rounded-2xl bg-chosen-card border border-white/10 hover:border-chosen-green/50 transition flex flex-col justify-between h-44 hover:shadow-[0_0_15px_rgba(0,255,102,0.1)]"
          >
            <Shield className="text-chosen-green group-hover:scale-110 transition" size={32} />
            <div>
              <h3 className="font-bold text-lg group-hover:text-chosen-green transition">Ministérios</h3>
              <p className="text-xs text-muted-foreground mt-1">Descubra onde servir (Louvor, Mídia, Recepção...).</p>
            </div>
          </Link>

          <Link
            href="/eventos"
            className="group p-6 rounded-2xl bg-chosen-card border border-white/10 hover:border-chosen-green/50 transition flex flex-col justify-between h-44 hover:shadow-[0_0_15px_rgba(0,255,102,0.1)]"
          >
            <Calendar className="text-chosen-green group-hover:scale-110 transition" size={32} />
            <div>
              <h3 className="font-bold text-lg group-hover:text-chosen-green transition">Calendário & Eventos</h3>
              <p className="text-xs text-muted-foreground mt-1">Fique por dentro de acampamentos, retiradas e cultos.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}