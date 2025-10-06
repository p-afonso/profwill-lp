import { Shield, CheckCircle } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#6C39C1] to-[#8b5cf6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-lg">
            <Shield className="w-12 h-12 text-[#F97430]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Garantia incontestável de <span className="text-[#F97430]">7 dias</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Se por qualquer motivo você não gostar do conteúdo, basta enviar um e-mail dentro de 7 dias
            após a compra e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-[#011E5A]">Satisfação 100% Garantida</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Você não corre nenhum risco. Experimente o curso por 7 dias e se não for exatamente o que
              você esperava, devolvemos todo o seu dinheiro.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur rounded-full px-6 py-3">
              <p className="text-white font-semibold">🔒 Pagamento Seguro</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-full px-6 py-3">
              <p className="text-white font-semibold">⚡ Acesso Imediato</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-full px-6 py-3">
              <p className="text-white font-semibold">✓ Sem Risco</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
