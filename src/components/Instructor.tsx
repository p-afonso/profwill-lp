import { GraduationCap, Users, Award, ArrowRight } from 'lucide-react';

export default function Instructor() {
  return (
    <section className="py-20 bg-coffee-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-text mb-6">
              Olá, meu nome é <span className="text-coffee-accent">Prof Will</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                Sou professor de redação e ex-corretor oficial do ENEM e ACAFE. Durante anos, avaliei milhares de redações e sei exatamente o que os avaliadores procuram.
              </p>
              <p>
                Desenvolvi o método Redação Prática a partir da minha experiência nos bastidores da correção, revelando os segredos que poucos conhecem sobre como realmente se conquista nota máxima.
              </p>
              <p>
                Já ajudei mais de <span className="font-bold text-[#C67A30]">1.200 alunos</span> a
                conquistarem notas excelentes no ENEM e realizarem o sonho da aprovação usando técnicas validadas por quem corrige.
              </p>
              <p className="font-semibold text-[#1A1A1A]">
                Minha missão é revelar o que aprendi como corretor para você escrever redações que impressionam!
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <GraduationCap className="w-8 h-8 text-[#C67A30] mx-auto mb-2" />
                <p className="font-bold text-[#1A1A1A] text-2xl">12</p>
                <p className="text-sm text-gray-600">Anos de experiência</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <Users className="w-8 h-8 text-[#C67A30] mx-auto mb-2" />
                <p className="font-bold text-[#1A1A1A] text-2xl">+1200</p>
                <p className="text-sm text-gray-600">Alunos aprovados</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <Award className="w-8 h-8 text-[#C67A30] mx-auto mb-2" />
                <p className="font-bold text-[#1A1A1A] text-2xl">ENEM</p>
                <p className="text-sm text-gray-600">Ex-Corretor</p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#C67A30] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a96326] transition-colors shadow-lg"
              >
                Vamos juntos
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-coffee-dark rounded-full overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mb-4">
                      <GraduationCap className="w-24 h-24 text-[#2E2A26]" />
                    </div>
                    <p className="text-2xl font-bold">Prof Will</p>
                    <p className="text-lg">Professor</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <Award className="w-12 h-12 text-[#C67A30]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
