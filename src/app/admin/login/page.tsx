"use client";

import React, { useState } from "react";
import { Lock, Mail, ArrowRight, MessageCircle, KeyRound, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const whatsappNumber = "5583999999999"; 
  const whatsappMessage = encodeURIComponent(
    "Olá! Sou líder no movimento CHOSEN e gostaria de solicitar meu acesso ao Painel Administrativo.\n\n" +
    "• Nome completo:\n" +
    "• Célula / Ministério:"
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    setTimeout(() => {
      // Login como CONSELHO (Admin Total)
      if (email === "conselho@teste.com.br" && password === "12345678") {
        localStorage.setItem("chosen_admin_logged", "true");
        localStorage.setItem("chosen_user_role", "admin");
        window.location.replace("/admin");
      } 
      // Login como LIDERANÇA (Visualização)
      else if (email === "lider@teste.com.br" && password === "12345678") {
        localStorage.setItem("chosen_admin_logged", "true");
        localStorage.setItem("chosen_user_role", "lider");
        window.location.replace("/admin");
      } 
      else {
        setErrorMsg("E-mail ou senha incorretos. Use as credenciais de teste.");
        setIsLoading(false);
      }
    }, 400);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setEmailSent(true);
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-chosen-card border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-chosen-green/10 rounded-full blur-2xl pointer-events-none" />

        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-chosen-green/10 text-chosen-green border border-chosen-green/20 mb-2">
            <Lock size={22} />
          </div>
          <h1 className="text-2xl font-black text-foreground">
            {forgotPasswordMode ? "Recuperar Senha" : "Acesso Restrito"}
          </h1>
          <p className="text-xs text-muted-foreground max-w-xs mx-auto">
            {forgotPasswordMode 
              ? "Digite seu e-mail para receber as instruções de redefinição." 
              : "Painel para o Conselho e Liderança do CHOSEN."}
          </p>
        </div>

        {/* Credenciais de Teste */}
        {!forgotPasswordMode && (
          <div className="p-3 bg-chosen-green/5 border border-chosen-green/20 rounded-xl text-[11px] text-muted-foreground space-y-1">
            <p className="font-bold text-chosen-green uppercase">Credenciais de Teste:</p>
            <p>👑 <b>Conselho (Edita tudo):</b> <code className="text-white font-mono">conselho@teste.com.br</code> | <code className="text-white font-mono">12345678</code></p>
            <p>👥 <b>Liderança (Apenas visualiza):</b> <code className="text-white font-mono">lider@teste.com.br</code> | <code className="text-white font-mono">12345678</code></p>
          </div>
        )}

        {errorMsg && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-400 flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {forgotPasswordMode ? (
          emailSent ? (
            <div className="bg-white/5 border border-chosen-green/30 rounded-2xl p-5 text-center space-y-3">
              <CheckCircle2 className="text-chosen-green mx-auto" size={32} />
              <p className="text-xs text-foreground font-semibold">
                E-mail de recuperação enviado para <span className="text-chosen-green">{email}</span>!
              </p>
              <p className="text-[11px] text-muted-foreground">
                Verifique sua caixa de entrada e spam para redefinir sua senha.
              </p>
              <button
                onClick={() => {
                  setForgotPasswordMode(false);
                  setEmailSent(false);
                  setErrorMsg("");
                }}
                className="text-xs font-bold text-chosen-green hover:underline pt-2 block mx-auto"
              >
                Voltar para o Login
              </button>
            </div>
          ) : (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-muted-foreground uppercase">E-mail Cadastrado</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <input
                    type="email"
                    required
                    disabled={isLoading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-foreground focus:outline-none focus:border-chosen-green transition disabled:opacity-50"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2.5 bg-chosen-green text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar E-mail <ArrowRight size={14} />
                  </>
                )}
              </button>

              <button
                type="button"
                disabled={isLoading}
                onClick={() => {
                  setForgotPasswordMode(false);
                  setErrorMsg("");
                }}
                className="w-full text-center text-xs text-muted-foreground hover:text-white transition disabled:opacity-50"
              >
                Cancelar e voltar
              </button>
            </form>
          )
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-muted-foreground uppercase">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="email"
                  required
                  disabled={isLoading}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMsg) setErrorMsg("");
                  }}
                  placeholder="conselho@teste.com.br"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-foreground focus:outline-none focus:border-chosen-green transition disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold text-muted-foreground uppercase">Senha</label>
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() => {
                    setForgotPasswordMode(true);
                    setErrorMsg("");
                  }}
                  className="text-[11px] text-chosen-green hover:underline flex items-center gap-1 disabled:opacity-50"
                >
                  <KeyRound size={12} /> Esqueci a senha
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="password"
                  required
                  disabled={isLoading}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMsg) setErrorMsg("");
                  }}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-foreground focus:outline-none focus:border-chosen-green transition disabled:opacity-50"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-chosen-green text-black font-bold text-xs rounded-xl hover:scale-[1.02] transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Entrando...
                </>
              ) : (
                <>
                  Entrar no Painel <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>
        )}

        <div className="relative flex items-center justify-center pt-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <span className="relative bg-chosen-card px-3 text-[10px] text-muted-foreground uppercase font-bold">
            Ainda não tem conta?
          </span>
        </div>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 bg-white/5 border border-white/10 hover:border-chosen-green/40 text-foreground font-semibold text-xs rounded-xl transition flex items-center justify-center gap-2 group"
        >
          <MessageCircle size={16} className="text-chosen-green group-hover:scale-110 transition" />
          Solicitar Acesso à Liderança
        </a>

      </div>
    </div>
  );
}