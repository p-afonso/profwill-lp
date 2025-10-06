import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <BookOpen className="w-8 h-8 text-[#011E5A]" />
            <span className="text-2xl font-bold text-[#011E5A]">RP</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-[#011E5A]">Redação</span>
            <span className="text-sm font-semibold text-[#F97430]">Prática</span>
          </div>
        </div>
        <a
          href="#pricing"
          className="bg-[#F97430] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e86620] transition-colors hidden sm:block"
        >
          Garanta sua vaga
        </a>
      </div>
    </header>
  );
}
