import { Play, CheckCircle, Target, TrendingUp, Award } from 'lucide-react';

export default function Transformation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <a
              href="https://youtube.com/shorts/1VI1-Qarp8I"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="aspect-[9/16] bg-gradient-to-br from-[#011E5A] to-[#6C39C1] flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-[#F97430] rounded-full p-8 mx-auto mb-4 group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-16 h-16 text-white fill-white" />
                  </div>
                  <p className="text-white font-bold text-xl px-4">Assista ao vídeo do Prof Will</p>
                  <p className="text-white/80 text-sm mt-2">Clique para ver no YouTube</p>
                </div>
              </div>
            </a>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border-4 border-[#F97430] z-10">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="font-bold text-[#011E5A]">100% Online</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#011E5A] mb-6 leading-tight">
              De travado nos <span className="text-[#F97430]">500-600</span> para notas acima de{' '}
              <span className="text-[#F97430]">900</span>: essa pode ser a <span className="italic">sua</span> história!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Centenas de alunos já destravaram a escrita e conquistaram notas incríveis com o método
              Redação Prática. Agora é a sua vez de fazer parte desse time de vencedores!
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-[#F97430] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e86620] transition-colors shadow-lg"
            >
              Quero aumentar minha nota!
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Play, label: 'Aulas Objetivas', color: '#6C39C1' },
            { icon: Target, label: 'Foco no ENEM', color: '#6C39C1' },
            { icon: TrendingUp, label: 'Método Validado', color: '#6C39C1' },
            { icon: Award, label: 'Resultados Comprovados', color: '#6C39C1' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#6C39C1] to-[#8b5cf6] rounded-xl p-6 text-white text-center shadow-lg hover:scale-105 transition-transform"
            >
              <item.icon className="w-12 h-12 mx-auto mb-3" />
              <p className="font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
