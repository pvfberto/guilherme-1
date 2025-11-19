import React from 'react';
import { BarChart3, Calendar, DollarSign, Zap, CalendarDays, Clock, Monitor, FileText } from 'lucide-react';

const WhatYouGetSection = () => {
  const benefits = [
    {
      icon: BarChart3,
      emoji: '📊',
      title: 'Alto Lucro',
      description: 'Como cobrar R$5.000 ou mais por tratamento sem parecer caro, vendedor ou antiético'
    },
    {
      icon: Calendar,
      emoji: '🗓️',
      title: 'Liberdade',
      description: 'O modelo de equipe para trabalhar 3 dias e faturar mais que trabalhando 6 ou 7'
    },
    {
      icon: DollarSign,
      emoji: '💰',
      title: 'Faturamento',
      description: 'A matemática dos 5-10 pacientes certos que geram pelo menos R$50 mil por mês de forma recorrente.'
    },
    {
      icon: Zap,
      emoji: '⚡',
      title: 'Acelerado',
      description: 'O cronograma de 90 dias para fazer a transição completa'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-apple-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            No Workshop Você Vai Descobrir:
          </h2>
          <p className="text-xl lg:text-2xl font-light text-apple-text max-w-4xl mx-auto">
            O mapa completo do Método Paciente de Alto Lucro - o que fazer para transformar sua prática em 90 dias
          </p>
        </div>

        {/* Benefits Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{benefit.emoji}</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-lg text-apple-text leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Workshop Info Box */}
        <div className="bg-gradient-to-br from-apple-blue to-blue-700 rounded-4xl p-10 lg:p-12 shadow-apple-lg text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
            Informações do Workshop
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <CalendarDays className="w-8 h-8 mb-3" />
              <div className="text-sm font-medium opacity-90 mb-1">Data</div>
              <div className="text-xl font-bold">14 de dezembro de 2025</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <Clock className="w-8 h-8 mb-3" />
              <div className="text-sm font-medium opacity-90 mb-1">Horário</div>
              <div className="text-xl font-bold">9h (Brasília)</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <Clock className="w-8 h-8 mb-3" />
              <div className="text-sm font-medium opacity-90 mb-1">Duração</div>
              <div className="text-xl font-bold">2 horas</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <Monitor className="w-8 h-8 mb-3" />
              <div className="text-sm font-medium opacity-90 mb-1">Formato</div>
              <div className="text-xl font-bold">Online ao vivo</div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm flex items-center gap-4">
            <FileText className="w-8 h-8 flex-shrink-0" />
            <div className="text-lg font-medium">+ Material de apoio em PDF</div>
          </div>
        </div>

        {/* Transition Text */}
        <div className="mt-12 text-center">
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Ao final do workshop, você vai ter clareza total sobre{' '}
            <span className="font-bold text-gray-900">O QUE fazer</span>. E vai entender se faz
            sentido para você aprender o{' '}
            <span className="font-bold text-gray-900">COMO fazer</span> na prática com acompanhamento direto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
