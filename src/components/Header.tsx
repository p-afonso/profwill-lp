import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 font-header">
          <BookOpen className="w-8 h-8 text-[#2E2A26]" />
          <span className="text-3xl font-bold text-[#1A1A1A]">cafe com teu corretor</span>
        </div>
        <a
          href="#pricing"
          className="bg-[#C67A30] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#a96326] transition-colors hidden sm:block"
        >
          Garanta sua vaga
        </a>
      </div>
    </header>
  );
}
