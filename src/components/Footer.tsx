import { BookOpen, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2E2A26] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <BookOpen className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">CC</span>
            </div>
            <div className="flex leading-tight font-header text-white text-lg">cafe com teu corretor</div>
          </div>

          <div className="flex items-center gap-2 text-white">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:redacaopratica.rp@gmail.com"
              className="hover:text-[#C67A30] transition-colors"
            >
              redacaopratica.rp@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/70">
            © 2025 cafe com teu corretor. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
