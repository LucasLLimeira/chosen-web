import { Mail } from "lucide-react";

interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  instagram: string;
  image: string;
}

const leaders: Leader[] = [
  {
    id: "1",
    name: "Pedro Santos",
    role: "Líder Principal CHOSEN",
    bio: "Apaixonado por ver a juventude vivendo o propósito de Deus com ousadia.",
    instagram: "@pedrosantos",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    name: "Ana Costa",
    role: "Líder de Louvor & Adoração",
    bio: "Conduzindo a galera a momentos profundos de louvor e presença.",
    instagram: "@anacosta",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    name: "Mateus Silva",
    role: "Líder de Mídia & Mídias Sociais",
    bio: "Comunicando o evangelho através do design, vídeo e criatividade.",
    instagram: "@mateussilva",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    name: "Júlia Silva",
    role: "Líder de Recepção & Integração",
    bio: "Garantindo que cada novo visitante se sinta em casa desde o primeiro dia.",
    instagram: "@juliasilva",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
];

export default function Lideranca() {
  return (
    <div className="flex flex-col gap-8 pb-12 px-4 max-w-7xl mx-auto pt-6">
      {/* Cabeçalho da Página */}
      <div className="space-y-2 text-center md:text-left">
        <span className="text-xs font-semibold uppercase tracking-wider text-chosen-green">
          Equipe & Mentores
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-foreground">
          Nossa Liderança
        </h1>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
          Conheça quem está à frente do ministério servindo, discipulando e cuidando dos nossos adolescentes.
        </p>
      </div>

      {/* Grid de Líderes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="group rounded-2xl bg-chosen-card border border-white/10 overflow-hidden hover:border-chosen-green/50 transition duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Foto do Líder */}
              <div className="relative h-64 w-full overflow-hidden bg-white/5">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chosen-card via-transparent to-transparent" />
              </div>

              {/* Informações */}
              <div className="p-5 space-y-2">
                <h3 className="font-bold text-xl group-hover:text-chosen-green transition">
                  {leader.name}
                </h3>
                <p className="text-xs font-semibold text-chosen-green uppercase tracking-wider">
                  {leader.role}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                  {leader.bio}
                </p>
              </div>
            </div>

            {/* Contato/Redes */}
            <div className="px-5 pb-5 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
            <a
                href={`https://instagram.com/${leader.instagram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-chosen-green transition"
            >
                {/* SVG do Instagram */}
                <svg
                className="w-3.5 h-3.5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>{leader.instagram}</span>
            </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mensagem para os Pais */}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-chosen-card to-chosen-bg border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
            <h2 className="text-lg font-bold">É pai ou responsável?</h2>
            <p className="text-xs md:text-sm text-muted-foreground max-w-xl">
            Temos um canal aberto direto via WhatsApp com a liderança para tirar dúvidas sobre eventos, segurança e acompanhamento dos adolescentes.
            </p>
        </div>
        
        {/* Link e Botão WhatsApp */}
        <a
            href="https://wa.me/5500000000000" // Substitua pelo número real da liderança (incluindo DDI e DDD, sem espaços ou símbolos)
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-chosen-green/10 hover:bg-chosen-green/20 text-xs font-bold transition text-chosen-green whitespace-nowrap border border-chosen-green/20 shadow-[0_0_15px_rgba(0,255,102,0.1)] hover:shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:scale-105 active:scale-95"
        >
            {/* SVG do WhatsApp */}
            <svg 
            className="w-4 h-4 fill-current" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M12.004 2c-5.518 0-9.993 4.482-9.993 10 0 1.761.462 3.412 1.267 4.846l-1.282 4.67 4.792-1.258c1.393.754 2.973 1.187 4.653 1.187 5.518 0 9.996-4.482 9.996-10s-4.478-10-9.996-10zm.003 18.25c-1.611 0-3.125-.421-4.44-1.156l-.318-.177-2.673.701.714-2.599-.193-.31c-.8-1.272-1.261-2.778-1.261-4.394 0-4.549 3.701-8.25 8.251-8.25 4.549 0 8.25 3.701 8.25 8.25s-3.701 8.25-8.251 8.25zm4.848-6.172c-.266-.133-1.576-.777-1.821-.866-.244-.089-.422-.133-.599.133-.178.266-.688.866-.843 1.044-.155.177-.311.2-.577.067-.266-.133-1.121-.413-2.134-1.316-.788-.702-1.32-1.569-1.475-1.835-.155-.266-.017-.41.117-.543.121-.119.266-.311.399-.466.133-.155.178-.266.266-.444.089-.177.044-.333-.022-.466-.067-.133-.599-1.443-.821-1.976-.217-.521-.437-.444-.599-.452-.16-.008-.344-.009-.527-.009s-.483.067-.733.333c-.25.266-.954.933-.954 2.277s.977 2.642 1.11 2.82c.133.178 1.921 2.934 4.653 4.117.65.281 1.156.449 1.55.574.653.208 1.248.178 1.717.108.523-.078 1.576-.644 1.8-.1.233.222.888.377 1.044.155.155.022.288-.111.155-.133-.266z"/>
            </svg>
            Enviar Mensagem no WhatsApp
        </a>
        </div>
    </div>
  );
}