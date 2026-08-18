"use client";

import React, { useState } from "react";
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  isSameDay, 
  isSameMonth, 
  addMonths, 
  subMonths, 
  getDay 
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronLeft, ChevronRight, CalendarDays, MapPin, Ticket, Zap, RefreshCw, Star } from "lucide-react";

interface ChosenEvent {
  id: string;
  type: "culto" | "acampamento" | "conferencia" | "social";
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  image: string;
  registrationOpen: boolean;
}

const chosenEvents: ChosenEvent[] = [
  {
    id: "1",
    type: "culto",
    title: "Sábado CHOSEN",
    date: new Date(2026, 7, 22),
    time: "19:00h",
    location: "Prédio Teen",
    description: "Nosso culto semanal com louvor, palavra e comunhão.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400",
    registrationOpen: false,
  },
  {
    id: "2",
    type: "culto",
    title: "Sábado CHOSEN - Especial",
    date: new Date(2026, 7, 29),
    time: "19:00h",
    location: "Prédio Teen",
    description: "Culto com momento especial de oração e recepção.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400",
    registrationOpen: false,
  },
  {
    id: "3",
    type: "acampamento",
    title: "Acampamento 'Metanoia'",
    date: new Date(2026, 8, 12),
    time: "Fim de Semana",
    location: "Recanto das Águas",
    description: "Um final de semana de imersão e transformação.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=400",
    registrationOpen: true,
  },
  {
    id: "4",
    type: "conferencia",
    title: "Conferência CHOSEN 2026",
    date: new Date(2026, 9, 10),
    time: "18:00h",
    location: "Auditório Principal",
    description: "Programação externa com convidados especiais.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
    registrationOpen: true,
  },
];

const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export default function Eventos() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 18));
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [specialCategory, setSpecialCategory] = useState<"todos" | "especial">("todos");

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
    setSelectedDay(null);
  };
  
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
    setSelectedDay(null);
  };

  const startDayOfMonth = startOfMonth(currentDate);
  const endDayOfMonth = endOfMonth(currentDate);
  const daysOfMoth = eachDayOfInterval({ start: startDayOfMonth, end: endDayOfMonth });
  const startDayOfWeek = getDay(startDayOfMonth);

  const filteredEvents = chosenEvents.filter(event => {
    if (specialCategory === "especial") {
      return event.type === "acampamento" || event.type === "conferencia" || event.type === "social";
    }

    const isSameMonthEvent = isSameMonth(event.date, currentDate);
    const isSameDayEvent = selectedDay ? isSameDay(event.date, selectedDay) : true;

    return isSameMonthEvent && isSameDayEvent;
  });

  return (
    <div className="flex flex-col gap-8 pb-12 px-4 max-w-7xl mx-auto pt-6">
      {/* Cabeçalho */}
      <div className="space-y-2 text-center lg:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-chosen-green">
          Teu Chamado, Tua Vida
        </span>
        <h1 className="text-3xl lg:text-5xl font-black text-foreground">
          Calendário & Eventos
        </h1>
        <p className="text-muted-foreground text-sm lg:text-base max-w-2xl">
          Acompanhe os cultos do mês ou confira as programações especiais de todo o ano.
        </p>
      </div>

      {/* Grid: 1 Coluna no Mobile, 12 Colunas Lado a Lado no Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* 1. Calendário (Esquerda - 5 colunas no PC) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="border-b border-white/10 pb-2 flex items-center justify-between">
            <h2 className="text-xl lg:text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <Zap className="text-chosen-green" size={20} />
              Calendário Mensal
            </h2>
            <div className="flex items-center gap-1">
              <button 
                onClick={prevMonth} 
                className="p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextMonth} 
                className="p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-white transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="bg-chosen-card rounded-2xl border border-white/10 p-5 lg:p-4 shadow-inner">
            <div className="flex items-center justify-between mb-5 lg:mb-3 px-1">
              <h3 className="text-lg lg:text-base font-bold text-foreground capitalize">
                {format(currentDate, "MMMM 'de' yyyy", { locale: ptBR })}
              </h3>
              {selectedDay && (
                <button
                  onClick={() => setSelectedDay(null)}
                  className="flex items-center gap-1 text-xs text-chosen-green hover:underline"
                >
                  <RefreshCw size={12} /> Ver Mês
                </button>
              )}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {weekdays.map(day => (
                <div key={day} className="text-xs lg:text-[11px] font-bold text-muted-foreground py-2 lg:py-1">{day}</div>
              ))}

              {Array.from({ length: startDayOfWeek }).map((_, idx) => (
                <div key={`empty-${idx}`} />
              ))}

              {daysOfMoth.map(day => {
                const isSelected = selectedDay && isSameDay(day, selectedDay);
                const hasEvent = chosenEvents.some(event => isSameDay(event.date, day));

                return (
                  <button
                    key={day.toString()}
                    onClick={() => {
                      setSpecialCategory("todos");
                      setSelectedDay(isSelected ? null : day);
                    }}
                    className={`relative w-full aspect-square lg:h-9 lg:w-9 lg:mx-auto flex flex-col items-center justify-center rounded-full transition-all duration-300 ${
                      isSelected 
                        ? "bg-chosen-green text-black font-bold shadow-[0_0_15px_#00FF66]" 
                        : "hover:bg-white/5"
                    }`}
                  >
                    <span className={`text-sm lg:text-xs ${isSelected ? "text-black font-bold" : "text-foreground"}`}>
                      {format(day, "d")}
                    </span>

                    {hasEvent && (
                      <div className={`absolute bottom-1.5 lg:bottom-1 w-1.5 h-1.5 lg:w-1 lg:h-1 rounded-full ${isSelected ? "bg-black" : "bg-chosen-green shadow-[0_0_6px_#00FF66]"}`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. Lista de Eventos (Direita - 7 colunas no PC) */}
        <div className="lg:col-span-6 space-y-6 lg:space-y-4">
          <div className="border-b border-white/10 pb-2 flex items-center justify-between">
            <h2 className="text-xl lg:text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
              <Ticket className="text-chosen-green" size={20} />
              Programação
            </h2>
            <span className="text-xs text-chosen-green font-semibold capitalize">
              {specialCategory === "especial" ? "Todas as Especiais" : format(currentDate, "MMMM", { locale: ptBR })}
            </span>
          </div>

          {/* Filtros */}
          <div className="flex items-center gap-2 flex-wrap text-xs font-bold">
            <button 
              onClick={() => {
                setSpecialCategory("todos");
                setSelectedDay(null);
              }} 
              className={`px-4 py-1.5 rounded-full transition ${specialCategory === 'todos' ? 'bg-chosen-green text-black' : 'bg-white/5 border border-white/10 hover:border-white/20'}`}
            >
              Mês de {format(currentDate, "MMMM", { locale: ptBR })}
            </button>
            <button 
              onClick={() => {
                setSpecialCategory("especial");
                setSelectedDay(null);
              }} 
              className={`px-4 py-1.5 rounded-full transition flex items-center gap-1.5 ${specialCategory === 'especial' ? 'bg-chosen-green text-black' : 'bg-white/5 border border-white/10 hover:border-white/20'}`}
            >
              <Star size={14} className={specialCategory === 'especial' ? 'fill-black' : 'fill-chosen-green text-chosen-green'} /> 
              Programações Especiais (Geral)
            </button>
          </div>

          {/* Cards de Evento */}
          <div className="space-y-4 lg:space-y-3">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(event => (
                <div key={event.id} className="p-5 lg:p-4 rounded-2xl bg-chosen-card border border-white/10 flex items-start gap-4 hover:border-chosen-green/30 transition">
                  <div className="w-20 h-20 lg:w-16 lg:h-16 rounded-xl overflow-hidden border border-white/5 flex-shrink-0">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 space-y-2 lg:space-y-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-base lg:text-sm text-foreground">{event.title}</h3>
                        <p className="text-xs lg:text-[11px] text-chosen-green font-semibold uppercase">
                          {format(event.date, "dd 'de' MMMM", { locale: ptBR })}
                        </p>
                      </div>
                      {event.type !== "culto" && (
                        <span className="text-[10px] lg:text-[9px] font-bold uppercase bg-chosen-green/10 text-chosen-green px-2 py-0.5 rounded border border-chosen-green/20">
                          {event.type}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><CalendarDays size={14} /> {event.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                    </div>

                    {event.registrationOpen && (
                      <button className="mt-2 px-4 py-1.5 lg:px-3 lg:py-1 text-xs lg:text-[11px] font-bold text-black bg-chosen-green rounded-full hover:scale-105 transition">
                        Fazer Inscrição
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-muted-foreground text-sm border border-dashed border-white/10 rounded-2xl">
                Nenhum evento encontrado nesta categoria.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}