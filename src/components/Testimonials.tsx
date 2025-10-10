import { MessageCircle, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Jana - Mentoria 2025',
    grade: 'Aluna aprovada',
    message: 'Boa noite, acabei de ver minha nota da redação e tirei 8!!! Gostaria de te agradecer imensamente pelo seu trabalho e toda ajuda ao longo do semestre, fosse essencial para que eu alcançasse essa nota! Agora torcer para a aprovação vir!! Muito obrigada mesmo 😭😭',
    image: '/will img1.jpg',
  },
  {
    name: 'Pedro A.',
    grade: 'Aluno do 3º ano',
    message: 'Eu sempre travava na introdução, mas depois das aulas consegui organizar minhas ideias. Tirei 920 na redação do ENEM! Como ex-corretor, o Prof Will sabe exatamente o que buscamos. Muito obrigado! 🙏',
  },
  {
    name: 'Isa - COC Online 2025',
    grade: 'Aluna aprovada',
    message: 'Oiii will, tudo bem?? vim te mostrar o resultado dos nossos laboratórios. Estou extremamente feliz!! Total 1: 8,00 | Total 2: 9,00 | Média: 8,50',
    image: '/will img2.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-coffee-dark py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-white transform origin-top-left -skew-y-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Pessoas reais, como <span className="italic">você</span>, usaram o método e
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-coffee-accent text-center mb-16">
          transformaram a nota de redação.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border-2 border-coffee-accent shadow-lg">
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-auto object-cover"
                />
              ) : (
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-[#C67A30] rounded-full p-2 flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-800 text-sm leading-relaxed">{testimonial.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="text-center p-4 border-t border-gray-200 bg-white">
                <p className="font-bold text-[#1A1A1A]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.grade}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#C67A30] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#a96326] transition-colors shadow-lg"
          >
            SIM! QUERO COMEÇAR AGORA!
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white transform origin-bottom-left skew-y-2"></div>
    </section>
  );
}
