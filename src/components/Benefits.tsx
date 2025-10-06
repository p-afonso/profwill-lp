import { CheckCircle, Shield, Lock, ArrowRight } from 'lucide-react';

const benefits = [
  'Aulas curtas e diretas, fáceis de assistir',
  'Explicação simples de cada competência do ENEM por quem já corrigiu milhares de redações',
  'Modelos prontos de parágrafo validados por corretor oficial',
  'Estratégias práticas para organizar ideias e impressionar os avaliadores',
  'PDFs com repertórios eficazes e lista de conjunções',
  'Técnicas exclusivas de quem trabalhou nos bastidores da correção do ENEM e ACAFE',
];

export default function Benefits() {
  return (
    <section className="bg-[#011E5A] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Garanta sua vaga e receba:
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F97430] flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#6C39C1] to-[#8b5cf6] rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Além do curso completo, você recebe bônus exclusivos
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Ferramentas e materiais que vão acelerar ainda mais a sua evolução na redação do ENEM.
              Tudo pensado para que você alcance a nota que precisa de forma rápida e eficiente.
            </p>
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Compra Segura</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Satisfação Garantida</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
                <Lock className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Privacidade Protegida</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#F97430] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e86620] transition-colors shadow-lg"
          >
            Quero garantir minha vaga!
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
