"use client";

import React, { useState, useEffect } from "react";
import { 
  Users, 
  CalendarDays, 
  UserCheck, 
  ClipboardList, 
  Plus, 
  Edit3, 
  Trash2, 
  Megaphone,
  CheckCircle2,
  Clock,
  LogOut,
  Loader2,
  ShieldAlert,
  Eye
} from "lucide-react";

interface AdminEvent {
  id: string;
  title: string;
  date: string;
  type: string;
  registrations: number;
  status: "Ativo" | "Encerrado" | "Rascunho";
}

const initialEvents: AdminEvent[] = [
  {
    id: "1",
    title: "Acampamento 'Metanoia'",
    date: "12 de Setembro, 2026",
    type: "Acampamento",
    registrations: 42,
    status: "Ativo",
  },
  {
    id: "2",
    title: "Conferência CHOSEN 2026",
    date: "10 de Outubro, 2026",
    type: "Conferência",
    registrations: 88,
    status: "Ativo",
  },
  {
    id: "3",
    title: "Sábado CHOSEN - Especial",
    date: "29 de Agosto, 2026",
    type: "Culto",
    registrations: 0,
    status: "Encerrado",
  },
];

export default function AdminDashboard() {
  const [events, setEvents] = useState<AdminEvent[]>(initialEvents);
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<"admin" | "lider">("lider");

  useEffect(() => {
    setIsMounted(true);

    const logged = localStorage.getItem("chosen_admin_logged") === "true";
    const role = (localStorage.getItem("chosen_user_role") as "admin" | "lider") || "lider";

    if (logged) {
      setIsAuthenticated(true);
      setUserRole(role);
    } else {
      window.location.replace("/admin/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("chosen_admin_logged");
    localStorage.removeItem("chosen_user_role");
    window.location.replace("/admin/login");
  };

  if (!isMounted || !isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 text-muted-foreground text-sm">
        <Loader2 className="animate-spin text-chosen-green" size={28} />
        <span>Verificando permissões de acesso...</span>
      </div>
    );
  }

  const isAdmin = userRole === "admin";

  return (
    <div className="flex flex-col gap-8 pb-12 px-4 max-w-7xl mx-auto pt-6">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-chosen-green">
              {isAdmin ? "Painel do Conselho" : "Painel da Liderança"}
            </span>
            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full border ${
              isAdmin 
                ? "bg-chosen-green/10 text-chosen-green border-chosen-green/30" 
                : "bg-blue-500/10 text-blue-400 border-blue-500/30"
            }`}>
              {isAdmin ? "Admin Total" : "Modo Visualização"}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-foreground">
            {isAdmin ? "Gestão Estratégica" : "Acompanhamento da Liderança"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {isAdmin 
              ? "Gerencie eventos, permissões de acesso e escalas de voluntários." 
              : "Consulte a programação, avisos internos e escalas dos ministérios."}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Botão de Novo Evento visível APENAS para o Conselho */}
          {isAdmin && (
            <button className="flex items-center gap-2 bg-chosen-green text-black font-bold px-4 py-2.5 rounded-full hover:scale-105 transition text-xs">
              <Plus size={16} /> Novo Evento
            </button>
          )}

          <button 
            onClick={handleLogout}
            className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-muted-foreground hover:text-white px-3.5 py-2.5 rounded-full hover:bg-white/10 transition text-xs font-semibold"
          >
            <LogOut size={15} /> Sair
          </button>
        </div>
      </div>

      {/* Alerta explicativo para Liderança */}
      {!isAdmin && (
        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center gap-3 text-xs text-blue-300">
          <ShieldAlert size={20} className="shrink-0 text-blue-400" />
          <span>
            <b>Acesso de Liderança:</b> Você pode visualizar dados, avisos e escalas. Alterações nos eventos são restritas aos membros do Conselho.
          </span>
        </div>
      )}

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-chosen-card rounded-2xl border border-white/10 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-medium">Voluntários Ativos</p>
            <h3 className="text-2xl font-black text-foreground mt-1">34</h3>
          </div>
          <div className="p-3 bg-chosen-green/10 text-chosen-green rounded-xl border border-chosen-green/20">
            <UserCheck size={20} />
          </div>
        </div>

        <div className="p-5 bg-chosen-card rounded-2xl border border-white/10 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-medium">Inscrições Ativas</p>
            <h3 className="text-2xl font-black text-foreground mt-1">130</h3>
          </div>
          <div className="p-3 bg-chosen-green/10 text-chosen-green rounded-xl border border-chosen-green/20">
            <ClipboardList size={20} />
          </div>
        </div>

        <div className="p-5 bg-chosen-card rounded-2xl border border-white/10 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-medium">Eventos Programados</p>
            <h3 className="text-2xl font-black text-foreground mt-1">4</h3>
          </div>
          <div className="p-3 bg-chosen-green/10 text-chosen-green rounded-xl border border-chosen-green/20">
            <CalendarDays size={20} />
          </div>
        </div>

        <div className="p-5 bg-chosen-card rounded-2xl border border-white/10 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-medium">Membros Cadastrados</p>
            <h3 className="text-2xl font-black text-foreground mt-1">210</h3>
          </div>
          <div className="p-3 bg-chosen-green/10 text-chosen-green rounded-xl border border-chosen-green/20">
            <Users size={20} />
          </div>
        </div>
      </div>

      {/* Grid Secundária */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Tabela de Eventos */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <CalendarDays className="text-chosen-green" size={18} />
              Cronograma de Eventos
            </h2>
          </div>

          <div className="bg-chosen-card rounded-2xl border border-white/10 overflow-x-auto">
            <table className="w-full text-left text-xs text-muted-foreground">
              <thead className="bg-white/5 text-foreground uppercase font-bold text-[10px] tracking-wider border-b border-white/10">
                <tr>
                  <th className="p-4">Evento</th>
                  <th className="p-4">Data</th>
                  <th className="p-4">Inscrições</th>
                  <th className="p-4">Status</th>
                  {isAdmin && <th className="p-4 text-right">Ações</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {events.map((evt) => (
                  <tr key={evt.id} className="hover:bg-white/[0.02] transition">
                    <td className="p-4 font-bold text-foreground">
                      {evt.title}
                      <span className="block text-[10px] text-chosen-green font-normal uppercase mt-0.5">
                        {evt.type}
                      </span>
                    </td>
                    <td className="p-4">{evt.date}</td>
                    <td className="p-4 font-semibold text-foreground">
                      {evt.registrations > 0 ? `${evt.registrations} pessoas` : "-"}
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                        evt.status === "Ativo" 
                          ? "bg-chosen-green/10 text-chosen-green border-chosen-green/20" 
                          : "bg-white/5 text-muted-foreground border-white/10"
                      }`}>
                        {evt.status}
                      </span>
                    </td>
                    {/* Ações disponíveis apenas para o Conselho */}
                    {isAdmin && (
                      <td className="p-4 text-right space-x-2">
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-white transition">
                          <Edit3 size={14} />
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-red-400 hover:text-red-300 transition">
                          <Trash2 size={14} />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bloco Lateral: Avisos + Escalas do Sábado */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quadro de Avisos */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Megaphone className="text-chosen-green" size={18} />
                Avisos Internos
              </h2>
            </div>

            <div className="bg-chosen-card rounded-2xl border border-white/10 p-4 space-y-3">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-chosen-green flex items-center gap-1">
                    <Clock size={10} /> Reunião Mensal
                  </span>
                  <span className="text-[10px] text-muted-foreground">Hoje, 20h</span>
                </div>
                <p className="text-xs text-foreground font-semibold">Alinhamento do Acampamento Metanoia com a liderança.</p>
              </div>

              {isAdmin && (
                <button className="w-full py-2 text-xs font-bold text-black bg-chosen-green rounded-xl hover:scale-[1.02] transition">
                  Novo Comunicado
                </button>
              )}
            </div>
          </div>

          {/* Escalas do Sábado (Visualização para a Liderança) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <UserCheck className="text-chosen-green" size={18} />
                Escalas do Próximo Sábado
              </h2>
            </div>

            <div className="bg-chosen-card rounded-2xl border border-white/10 p-4 space-y-3 text-xs">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-muted-foreground">Recepção:</span>
                <span className="font-semibold text-foreground">Lucas & Beatriz</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-muted-foreground">Mídia & Transmissão:</span>
                <span className="font-semibold text-foreground">Matheus</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-muted-foreground">Intercessão:</span>
                <span className="font-semibold text-foreground">Célula Boanerges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}