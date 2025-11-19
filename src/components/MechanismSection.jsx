import React from 'react';
import { BarChart3, Calendar, DollarSign, Zap } from 'lucide-react';

const MechanismSection = () => {
  const pillars = [
    {
      icon: BarChart3,
      title: 'PILAR 1 - ALTO LUCRO',
      subtitle: 'De consultas de R$200 a R$500 para tratamentos de R$5.000 ou mais.',
      description: 'Aprenda a se posicionar para vender de forma totalmente ética alto ticket usando a imagem e a narrativa correta.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: 'PILAR 2 - LIBERDADE',
      subtitle: 'De 6 a 7 dias trabalhando para 3 dias lucrando.',
      description: 'Monte equipe que fecha as vendas mesmo quando você não está presente.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'PILAR 3 - FATURAMENTO',
      subtitle: 'De receita imprevisível para mais de 50k/mês ou mais de forma consistente',
      description: 'Construa modelo de negócio médico de 5-10 pacientes premium por semana',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'PILAR 4 - ACELERANDO',
      subtitle: 'De anos esperando a carreira deslanchar para 90 dias implementando.',
      description: 'Siga cronograma dia-a-dia para fazer a transição completa',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-apple-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            "O Método Paciente de Alto Lucro Tem{' '}
            <span className="text-apple-blue">4 Pilares</span>
          </h2>
          <p className="text-2xl lg:text-3xl font-light text-gray-600">
            (E Você Vai Dominar Todos)"
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <p className="text-base lg:text-lg font-semibold text-gray-700 mb-4">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-base text-apple-text leading-relaxed">
                  → {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
