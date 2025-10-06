import { CheckCircle, FileText, Lightbulb, BookOpen, Target, Rocket, ArrowRight } from 'lucide-react';

const achievements = [
  { icon: FileText, text: 'Parar de travar na folha em branco' },
  { icon: Lightbulb, text: 'Ganhar repertórios prontos para usar' },
  { icon: BookOpen, text: 'Organizar suas ideias com clareza' },
  { icon: Target, text: 'Economizar tempo com modelos eficazes' },
  { icon: CheckCircle, text: 'Escrever com segurança conhecendo as competências do ENEM' },
  { icon: Rocket, text: 'Aprender com quem já avaliou milhares de redações' },
];

export default function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#011E5A] mb-4">
            O que você vai conquistar com o <span className="text-[#F97430]">Redação Prática</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#F97430]"
            >
              <div className="bg-gradient-to-br from-[#F97430] to-[#e86620] rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <achievement.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-lg font-semibold text-[#011E5A]">{achievement.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#F97430] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e86620] transition-colors shadow-lg"
          >
            Quero melhorar minha redação
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="bg-[#011E5A] rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Redação Prática é sinônimo de <span className="text-[#F97430]">bons resultados</span>
          </h3>
          <p className="text-xl text-gray-200 text-center mb-12">
            Pessoas como você obtiveram excelentes notas e conquistaram suas vagas!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { score: '940', name: 'Maria Silva', achievement: '1º lugar no vestibular' },
              { score: '920', name: 'João Pedro', achievement: 'Aprovado em Medicina' },
              { score: '900', name: 'Carla Santos', achievement: 'Nota máxima na redação' },
            ].map((student, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-5xl font-bold text-[#F97430] mb-2">{student.score}</div>
                <p className="text-sm text-gray-500 mb-3">Nota ENEM</p>
                <p className="font-bold text-[#011E5A] mb-1">{student.name}</p>
                <p className="text-sm text-gray-600">{student.achievement}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h4 className="text-2xl font-bold text-white mb-6">
              Com o método de quem trabalhou nos <span className="text-[#F97430]">bastidores da correção</span>, você leva:
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Aulas curtas e objetivas de ex-corretor',
                'Explicação clara das 5 competências',
                'Modelos de parágrafo validados oficialmente',
                'PDFs com repertórios atualizados',
                'Lista de conectivos que impressionam avaliadores',
                'Técnicas exclusivas de quem conhece o sistema por dentro',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#F97430] flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
