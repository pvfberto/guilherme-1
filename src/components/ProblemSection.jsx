import React from 'react';
import { X } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    '40+ atendimentos por semana para faturar R$15-20k',
    '6-7 dias trabalhando, sem tempo para família ou lazer',
    'Dependência de plantões e planos de saúde que determinam quanto você vale'
  ];

  return (
    <section className="py-20 lg:py-32 bg-apple-bg">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Problem Container - Dark */}
        <div className="bg-apple-dark rounded-4xl p-10 lg:p-16 shadow-apple-lg">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            A Conta Que Ninguém Faz{' '}
            <span className="text-gray-400">(Mas Deveria)</span>
          </h2>

          {/* Intro Paragraph */}
          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed">
            Você investiu 5/6 anos de graduação. Mais 2/3 de residência. Noites em claro.
            Finais de semana estudando. Trabalho paralelo ao estudo com muitos plantões cansativos.
            <span className="text-white font-semibold"> Resultado?</span>
          </p>

          {/* Problems List */}
          <div className="space-y-5 mb-10">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/5 rounded-2xl p-5 border border-white/10">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                </div>
                <p className="text-lg text-gray-200">{problem}</p>
              </div>
            ))}
          </div>

          {/* Transition */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-xl lg:text-2xl text-white font-light italic">
              Enquanto isso, existe um grupo de profissionais atuando em outra realidade...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
