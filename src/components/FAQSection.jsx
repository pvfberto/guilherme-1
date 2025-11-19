import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Isso funciona para minha especialidade?',
      answer: 'Temos casos validados em muitas especialidades médicas e em diversas áreas da saúde. Se você atende pessoas com problemas que precisam ser resolvidos, funciona.'
    },
    {
      question: 'Minha cidade é pequena, tem mercado?',
      answer: 'Dr. Thiago fatura R$90 mil por mês em uma cidade de 45 mil habitantes no interior do Paraná. Tamanho da cidade é desculpa, não limitação.'
    },
    {
      question: 'Não quero ser visto como mercenário',
      answer: 'Cobrar seu valor justo baseado na transformação que entrega é ético. Trabalhar exausto e mal remunerado não é. O Método Paciente de Alto Lucro ensina a cobrar certo, não a cobrar errado.'
    },
    {
      question: 'Já faço consultas caras, por que preciso disso?',
      answer: 'Consulta cara não é negócio escalável. O Método Paciente de Alto Lucro ensina a construir estrutura que funciona até quando você está ausente - a verdadeira liberdade.'
    },
    {
      question: 'Tenho pouco tempo, consigo implementar?',
      answer: 'O cronograma dia-a-dia dos próximos 90 dias é suficiente para a transição.'
    },
    {
      question: 'E se eu não conseguir aplicar?',
      answer: 'Você aciona a nossa Garantia. Você não perde nada tentando, mas perde tudo ficando parado.'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-apple-bg">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-apple overflow-hidden transition-all duration-300 hover:shadow-apple-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-50"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-base lg:text-lg text-apple-text leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
