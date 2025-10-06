import { useState, useEffect } from 'react';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#011E5A] to-[#6C39C1] rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#F97430] text-white px-4 py-2 rounded-full mb-4">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Oferta por tempo limitado!</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Garanta sua vaga com desconto especial
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-8">
            <p className="text-white text-center mb-4 font-semibold">A oferta acaba em:</p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, label: 'Dias' },
                { value: timeLeft.hours, label: 'Horas' },
                { value: timeLeft.minutes, label: 'Minutos' },
                { value: timeLeft.seconds, label: 'Segundos' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#011E5A] mb-1">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8">
            <div className="text-center mb-6">
              <p className="text-gray-500 mb-2">De <span className="line-through">R$ 797,00</span> por apenas:</p>
              <div className="text-5xl md:text-6xl font-bold text-[#F97430] mb-2">R$ 497,00</div>
              <p className="text-gray-600">ou 12x de <span className="font-bold text-[#011E5A]">R$ 41,47</span></p>
            </div>

            <div className="space-y-3 mb-6 pt-6 border-t border-gray-200">
              {[
                'Acesso completo ao curso Redação Prática',
                'Explicação de todas as 5 competências por ex-corretor oficial',
                'Modelos prontos de parágrafo validados',
                'PDFs com repertórios e conectivos',
                'Técnicas exclusivas dos bastidores da correção',
                'Suporte dedicado via e-mail',
                'Garantia incondicional de 7 dias',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.hotmart.com/example"
              className="block w-full bg-[#F97430] text-white text-center px-8 py-5 rounded-full font-bold text-xl hover:bg-[#e86620] transition-colors shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                Quero garantir minha vaga agora!
                <ArrowRight className="w-6 h-6" />
              </span>
            </a>

            <p className="text-center text-sm text-gray-500 mt-4">
              Pagamento 100% seguro • Acesso imediato após a compra
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">Compra Segura</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">Satisfação Garantida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm">Acesso Vitalício</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
