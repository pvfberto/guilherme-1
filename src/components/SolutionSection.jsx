import React from 'react';
import { Check } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    '5-10 pacientes por semana faturando 50 mil ou mais',
    '3 dias trabalhando, 4 dias vivendo',
    'Consultório que funciona mesmo na sua ausência, com equipe fechando com os pacientes certos.'
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Solution Container - White with shadow */}
        <div className="bg-white rounded-4xl p-10 lg:p-16 shadow-apple-lg border border-gray-100">
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
            Profissional com o{' '}
            <span className="text-apple-blue">Método Paciente de Alto Lucro:</span>
          </h2>

          {/* Solutions List */}
          <div className="space-y-5 mb-12">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-4 bg-green-50 rounded-2xl p-6 border border-green-100">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                </div>
                <p className="text-lg text-gray-900 font-medium">{solution}</p>
              </div>
            ))}
          </div>

          {/* Strong Paragraph */}
          <div className="bg-apple-bg rounded-2xl p-8 border-l-4 border-apple-blue">
            <p className="text-xl lg:text-2xl text-gray-900 font-semibold leading-relaxed">
              A diferença? Eles não têm <span className="text-apple-blue">MAIS</span> pacientes.
              Têm os pacientes <span className="text-apple-blue">CERTOS</span> pagando o preço{' '}
              <span className="text-apple-blue">CERTO</span> pelo tratamento{' '}
              <span className="text-apple-blue">CERTO</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
