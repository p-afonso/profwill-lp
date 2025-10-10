import { Clock, Smartphone, FileCheck, Mail, Pencil, ArrowRight } from 'lucide-react';

const faqs = [
  {
    icon: Clock,
    question: 'Quando recebo acesso?',
    answer:
      'Você recebe o acesso imediatamente após a confirmação do pagamento. É só fazer login e começar a estudar!',
  },
  {
    icon: Smartphone,
    question: 'Posso assistir pelo celular?',
    answer:
      'Sim! O curso é 100% online e você pode acessar de qualquer dispositivo: celular, tablet ou computador.',
  },
  {
    icon: FileCheck,
    question: 'Como é o conteúdo?',
    answer:
      'o conteúdo é composto por 5 aulas de que comprovadamente desbloquearão suas ideias para liberar seu melhor potencial em redação!',
  },
  {
    icon: Mail,
    question: 'Tem suporte se eu tiver dúvidas?',
    answer:
      'Com certeza! Você pode entrar em contato pelo e-mail gmail@gmail.com e terá atendimento sem burocracia.',
  },
];

const quickFeatures = [
  {
    icon: Pencil,
    title: 'Teoria Clara',
    description: 'Sem enrolação, apenas o que realmente cai',
  },
  {
    icon: FileCheck,
    title: 'Exemplos Comentados',
    description: 'Veja como aplicar na prática',
  },
  {
    icon: Clock,
    title: 'Estratégia Passo a Passo',
    description: 'Do rascunho à redação final',
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-[#2E2A26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Ainda está com dúvidas?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4 mb-3">
                <div className="bg-[#C67A30] rounded-full p-3 flex-shrink-0">
                  <faq.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#C67A30] pt-2">{faq.question}</h3>
              </div>
              <p className="text-gray-700 pl-16">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#C67A30] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a96326] transition-colors shadow-lg"
          >
            Quero aumentar minha nota
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quickFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#BB9469] to-[#D2AB80] rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <div className="bg-[#2E2A26] rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-[#C67A30]" />
              </div>
              <h4 className="text-xl font-bold text-[#1A1A1A] mb-2">{feature.title}</h4>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#C67A30] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a96326] transition-colors shadow-lg"
          >
            Quero fazer parte!
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
