import React from 'react';
import { CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-apple-bg pt-24 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-apple">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-900">
                1.247+ profissionais já implementaram
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
              Os Profissionais de Saúde Que Mais Faturam no Brasil{' '}
              <span className="text-gray-600">Trabalham em Média 60% Menos Que Você</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl font-light text-apple-text leading-relaxed">
              Eles descobriram que o caminho não é atender mais - e sim, construir um modelo de negócio
              com o <span className="font-semibold text-gray-900">Método Paciente de Alto Lucro</span> que
              funciona mesmo quando tiram férias.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#garantir-vaga"
                className="inline-flex items-center justify-center px-8 py-4 text-base lg:text-lg font-semibold text-white bg-apple-blue rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-apple-lg"
              >
                COMEÇAR MINHA TRANSIÇÃO AGORA
              </a>
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="relative">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-apple-lg">
              {/* Image placeholder - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Imagem do Dr. Guilherme</p>
                  <p className="text-xs text-gray-400 mt-1">(Substituir por foto real)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
