import React from 'react';
import { Users, TrendingUp, Target, Clock } from 'lucide-react';

const SocialProofDeep = () => {
  const stats = [
    {
      icon: Users,
      number: '1.247+',
      label: 'alunos',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      number: '96%',
      label: 'de satisfação',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      number: 'R$ 92k',
      label: 'faturamento médio mensal',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      number: '90 dias',
      label: 'de implementação',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Resultados Reais de Quem Implementou o{' '}
            <span className="text-gray-600">Método Paciente de Alto Lucro</span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {[4, 5, 6].map((index) => (
            <div key={index} className="group">
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-apple transition-all duration-300 hover:shadow-apple-lg hover:scale-[1.02]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-apple-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Depoimento {index}</p>
                    <p className="text-xs text-gray-400 mt-1">(Iframe de vídeo)</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid - 2x2 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-apple border border-gray-100 text-center group hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-apple-text font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProofDeep;
