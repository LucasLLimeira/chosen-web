"use client";

import React, { useState } from "react";
import { ChevronDown, Music, Camera, Tv, HeartHandshake, UserCheck } from "lucide-react";

interface Ministry {
  id: string;
  name: string;
  leader: string;
  icon: React.ReactNode;
  description: string;
  activities: string[];
  bannerImage: string;
}

const ministriesData: Ministry[] = [
  {
    id: "louvor",
    name: "Louvor & Adoração",
    leader: "Ismael Victor",
    icon: <Music className="text-chosen-green" size={24} />,
    description: "Ministério responsável por conduzir os adolescentes à presença de Deus através da música, instrumentos e adoração nos cultos e eventos.",
    activities: [
      "Ensaios semanais para alinhamento e prática",
      "Execução das músicas nos cultos de sábado e conferências",
      "Composição e arranjos próprios do CHOSEN"
    ],
    bannerImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "midia",
    name: "Mídia & Redes Sociais",
    leader: "Kayla",
    icon: <Camera className="text-chosen-green" size={24} />,
    description: "Equipe focada na comunicação visual, fotografia, criação de conteúdo para o Instagram, vídeos promocionais e cobertura em tempo real dos cultos.",
    activities: [
      "Fotografia profissional dos cultos e bastidores",
      "Edição de Reels, cortes de pregações e Stories",
      "Design gráfico de identidades e campanhas"
    ],
    bannerImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "projecao",
    name: "Projeção & Técnica",
    leader: "Lucas Limeira",
    icon: <Tv className="text-chosen-green" size={24} />,
    description: "Responsável pelo suporte audiovisual nos cultos: projeção das letras de músicas, passagens bíblicas, iluminação e transmissão de dados.",
    activities: [
      "Operação dos softwares de projeção (Holyrics/ProPresenter)",
      "Controle de iluminação e painéis de LED",
      "Apoio técnico para a equipe de Louvor"
    ],
    bannerImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "intercessao",
    name: "Intercessão",
    leader: "Maria Eduarda Ferraro",
    icon: <HeartHandshake className="text-chosen-green" size={24} />,
    description: "A base espiritual do CHOSEN. Ministério focado em cobrir cada adolescente, líder e evento em oração contínua.",
    activities: [
      "Relógio de oração antes dos cultos de sábado",
      "Campanhas de oração e jejum para acampamentos",
      "Acompanhamento espiritual e pedidos de oração"
    ],
    bannerImage: "https://images.unsplash.com/photo-1499209974431-9dac3ada00d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "conectar",
    name: "Conectar (Recepção)",
    leader: "Líder a definir",
    icon: <UserCheck className="text-chosen-green" size={24} />,
    description: "Porta de entrada do ministério! Cuida das boas-vindas, recepção calorosa na entrada dos cultos e integração de novos adolescentes.",
    activities: [
      "Recepção dos adolescentes com energia na entrada",
      "Cadastro e integração de visitantes de primeira vez",
      "Apoio na organização e dinâmica dos cultos"
    ],
    bannerImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Ministerios() {
  const [openId, setOpenId] = useState<string | null>("louvor"); // Abre Louvor por padrão

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-8 pb-12 px-4 max-w-7xl mx-auto pt-6">
      {/* Cabeçalho */}
      <div className="space-y-2 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-chosen-green">
          Faça parte da equipe
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-foreground">
          Nossos Ministérios
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
          Descubra onde seus talentos e dons se encaixam no CHOSEN. Clique em uma área para ver detalhes.
        </p>
      </div>

      {/* Lista de Seções Expansíveis (Accordions) */}
      <div className="space-y-4">
        {ministriesData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-chosen-card border-chosen-green/50 shadow-[0_0_20px_rgba(0,255,102,0.1)]"
                  : "bg-chosen-card/60 border-white/10 hover:border-white/20"
              }`}
            >
              {/* Botão de Título do Accordion */}
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="font-bold text-lg md:text-xl text-foreground">
                      {item.name}
                    </h2>
                    <p className="text-xs text-chosen-green font-medium">
                      Líder: {item.leader}
                    </p>
                  </div>
                </div>

                <div
                  className={`p-2 rounded-full bg-white/5 text-foreground transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-chosen-green" : ""
                  }`}
                >
                  <ChevronDown size={20} />
                </div>
              </button>

              {/* Conteúdo Expansível */}
              {isOpen && (
                <div className="px-5 pb-6 pt-2 border-t border-white/5 space-y-6 animate-fadeIn">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Imagem do Ministério */}
                    <div className="relative h-48 w-full rounded-xl overflow-hidden border border-white/10">
                      <img
                        src={item.bannerImage}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>

                    {/* Atividades */}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-chosen-green">
                        O que fazemos no dia a dia:
                      </h3>
                      <ul className="space-y-2">
                        {item.activities.map((act, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-chosen-green" />
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}