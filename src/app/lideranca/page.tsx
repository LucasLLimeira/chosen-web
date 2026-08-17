import React from "react";

interface CouncilMember {
  name: string;
  role: string;
  image: string;
}

interface MinistryLeader {
  ministry: string;
  leader: string;
  role: string;
}

interface Cell {
  name: string;
  leader: string;
  day: string;
  time: string;
  location: string;
}

const council: CouncilMember[] = [
  {
    name: "Jasson Machado",
    role: "Líder Geral CHOSEN",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Maria Eduarda Marques",
    role: "Conselho CHOSEN",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Lucas Limeira",
    role: "Conselho CHOSEN",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Maria Eduarda Ferraro",
    role: "Conselho CHOSEN",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
];

const ministries: MinistryLeader[] = [
  { ministry: "Louvor", leader: "Ismael Victor", role: "Líder de Louvor & Adoração" },
  { ministry: "Mídia", leader: "Kayla", role: "Líder de Mídia & Redes Sociais" },
  { ministry: "Projeção", leader: "Lucas Limeira", role: "Líder de Projeção & Técnica" },
  { ministry: "Intercessão", leader: "Maria Eduarda Ferraro", role: "Líder de Intercessão" },
  { ministry: "Conectar", leader: "Líder a Definir", role: "Recepção & Integração" },
];

const cellsExample: Cell[] = [
  {
    name: "Célula Ágape",
    leader: "João & Ana",
    day: "Quarta-feira",
    time: "19:30h",
    location: "Bairro Central",
  },
  {
    name: "Célula Metanoia",
    leader: "Gabriel & Sofia",
    day: "Quinta-feira",
    time: "20:00h",
    location: "Bairro Universitário",
  },
  {
    name: "Célula Koinonia",
    leader: "Lucas & Mabs",
    day: "Sexta-feira",
    time: "19:00h",
    location: "Bairro Norte",
  },
];

export default function Lideranca() {
  return (
    <div className="flex flex-col gap-12 pb-12 px-4 max-w-7xl mx-auto pt-6">
      {/* Cabeçalho da Página */}
      <div className="space-y-2 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-chosen-green">
          Equipe & Organização
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-foreground">
          Nossa Liderança
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
          Conheça quem serve e direciona o ministério CHOSEN em cada área de atuação.
        </p>
      </div>

      {/* 1. Conselho Geral */}
      <section className="space-y-4">
        <div className="border-b border-white/10 pb-2">
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-chosen-green" />
            Conselho Geral
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {council.map((member, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-chosen-card border border-white/10 overflow-hidden hover:border-chosen-green/50 transition duration-300 flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chosen-card via-transparent to-transparent" />
              </div>

              <div className="p-5 space-y-1">
                <h3 className="font-bold text-lg group-hover:text-chosen-green transition">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-chosen-green uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Ministérios de Apoio */}
      <section className="space-y-4">
        <div className="border-b border-white/10 pb-2">
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-chosen-green" />
            Líderes de Ministérios
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ministries.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-chosen-card border border-white/10 hover:border-chosen-green/30 transition flex flex-col justify-between space-y-2"
            >
              <span className="text-xs font-bold text-chosen-green uppercase tracking-wider">
                {item.ministry}
              </span>
              <div>
                <h3 className="font-bold text-lg text-foreground">{item.leader}</h3>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Células (Espaço preparado para quando forem implementar) */}
      <section className="space-y-4">
        <div className="border-b border-white/10 pb-2 flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-chosen-green" />
            Nossas Células (Exemplo)
          </h2>
          <span className="text-xs text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Em atualização
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cellsExample.map((cell, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-chosen-card border border-white/10 space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-chosen-green">{cell.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-chosen-green/10 text-chosen-green px-2 py-0.5 rounded border border-chosen-green/20">
                  {cell.day}
                </span>
              </div>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p><strong className="text-foreground">Líderes:</strong> {cell.leader}</p>
                <p><strong className="text-foreground">Horário:</strong> {cell.time}</p>
                <p><strong className="text-foreground">Local:</strong> {cell.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção WhatsApp para Contato */}
      <div className="rounded-2xl bg-gradient-to-r from-chosen-card to-chosen-bg border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-lg font-bold">Dúvidas sobre os grupos ou liderança?</h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-xl">
            Entre em contato pelo WhatsApp para saber qual célula é mais próxima de você ou tirar dúvidas.
          </p>
        </div>
        
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-chosen-green/10 hover:bg-chosen-green/20 text-xs font-bold transition text-chosen-green whitespace-nowrap border border-chosen-green/20 shadow-[0_0_15px_rgba(0,255,102,0.1)] hover:shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:scale-105 active:scale-95"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.004 2c-5.518 0-9.993 4.482-9.993 10 0 1.761.462 3.412 1.267 4.846l-1.282 4.67 4.792-1.258c1.393.754 2.973 1.187 4.653 1.187 5.518 0 9.996-4.482 9.996-10s-4.478-10-9.996-10zm.003 18.25c-1.611 0-3.125-.421-4.44-1.156l-.318-.177-2.673.701.714-2.599-.193-.31c-.8-1.272-1.261-2.778-1.261-4.394 0-4.549 3.701-8.25 8.251-8.25 4.549 0 8.25 3.701 8.25 8.25s-3.701 8.25-8.251 8.25zm4.848-6.172c-.266-.133-1.576-.777-1.821-.866-.244-.089-.422-.133-.599.133-.178.266-.688.866-.843 1.044-.155.177-.311.2-.577.067-.266-.133-1.121-.413-2.134-1.316-.788-.702-1.32-1.569-1.475-1.835-.155-.266-.017-.41.117-.543.121-.119.266-.311.399-.466.133-.155.178-.266.266-.444.089-.177.044-.333-.022-.466-.067-.133-.599-1.443-.821-1.976-.217-.521-.437-.444-.599-.452-.16-.008-.344-.009-.527-.009s-.483.067-.733.333c-.25.266-.954.933-.954 2.277s.977 2.642 1.11 2.82c.133.178 1.921 2.934 4.653 4.117.65.281 1.156.449 1.55.574.653.208 1.248.178 1.717.108.523-.078 1.576-.644 1.8-.1.233.222.888.377 1.044.155.155.022.288-.111.155-.133-.266z"/>
          </svg>
          Chamar no WhatsApp
        </a>
      </div>
    </div>
  );
}