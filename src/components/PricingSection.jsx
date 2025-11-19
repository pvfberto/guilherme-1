import React, { useState, useEffect } from 'react';
import { Clock, Zap, Users, TrendingUp } from 'lucide-react';

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tiers = [
    {
      lote: 'LOTE 1',
      originalPrice: 'R$ 97',
      price: 'R$ 47',
      badge: 'MELHOR OFERTA',
      highlight: 'Somente para os 20 Primeiros',
      icon: Zap,
      gradient: 'from-orange-500 to-red-500',
      popular: true
    },
    {
      lote: 'LOTE 2',
      originalPrice: 'R$ 97',
      price: 'R$ 67',
      highlight: 'Apenas 20 vagas',
      icon: Users,
      gradient: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      lote: 'LOTE 3',
      originalPrice: '',
      price: 'R$ 97',
      highlight: 'Vagas limitadas',
      icon: TrendingUp,
      gradient: 'from-gray-600 to-gray-700',
      popular: false
    }
  ];

  return (
    <section id="garantir-vaga" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Comece Sua Transição Agora
          </h2>
        </div>

        {/* Timer */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="glassmorphism rounded-3xl p-8 shadow-apple-lg border-2 border-orange-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-orange-500" />
              <p className="text-lg font-semibold text-gray-900">Lote 1 acaba em:</p>
            </div>
            <div className="flex justify-center gap-4">
              {[
                { label: 'Horas', value: timeLeft.hours },
                { label: 'Minutos', value: timeLeft.minutes },
                { label: 'Segundos', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-4 min-w-[80px] shadow-apple">
                    <div className="text-4xl font-bold text-white">
                      {String(item.value).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-600 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-apple transition-all duration-300 hover:shadow-apple-lg hover:-translate-y-2 ${
                  tier.popular ? 'ring-2 ring-orange-500' : 'border border-gray-200'
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-apple">
                      {tier.badge}
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${tier.gradient} flex items-center justify-center`}>
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                {/* Lote */}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  {tier.lote}
                </h3>

                {/* Price */}
                <div className="text-center mb-6">
                  {tier.originalPrice && (
                    <div className="text-lg text-gray-400 line-through mb-1">
                      {tier.originalPrice}
                    </div>
                  )}
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    {tier.price}
                  </div>
                  <p className="text-sm font-medium text-apple-text">
                    {tier.highlight}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="#"
                  className={`block w-full text-center px-6 py-4 text-base font-semibold text-white rounded-full transition-all duration-200 hover:scale-105 shadow-apple ${
                    tier.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-500'
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  GARANTIR MINHA VAGA
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
