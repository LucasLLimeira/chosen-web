"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

// Função para verificar se a página já carregou no navegador (Hydration segura)
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

function useIsMounted() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function Logo() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className="flex items-center font-black text-2xl tracking-wider select-none">
        <span>CH</span>
        <div className="mx-1 w-10 h-5.5 rounded-full bg-chosen-green" />
        <span>SEN</span>
      </div>
    );
  }

  const isDark = theme === "dark";

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center font-black text-2xl tracking-wider select-none cursor-pointer group">
      {/* Texto CH */}
      <span className="text-foreground transition-colors duration-300">CH</span>

      {/* Botão Switch / Toggle do O */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Alternar Tema"
        className={`relative mx-0.5 w-10 h-5.5 rounded-full p-0.5 transition-all duration-300 ease-in-out focus:outline-none ${
          isDark
            ? "bg-chosen-green shadow-[0_0_12px_#00FF66]"
            : "bg-transparent border border-black dark:border-white shadow-[0_0_12px_#000000]"
        }`}
      >
        {/* Bolinha Interna Animada */}
        <div
          className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ease-in-out transform ${
            isDark
              ? "translate-x-4.5 bg-chosen-bg/90 shadow-md"
              : "translate-x-1 dark:bg-white shadow-md dark:shadow-[0_0_8px_#FFFFFF] bg-black"
          }`}
        />
      </button>

      {/* Texto SEN */}
      <span className="text-foreground transition-colors duration-300">SEN</span>
    </div>
  );
}