import React from 'react';
import { ArrowRight, CalendarDays, Clock, Monitor } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Existem 2 Caminhos a Partir Daqui
          </h2>
        </div>

        {/* Two Paths */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Path 1 - Bad */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">❌</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Caminho 1</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Você continua operando no modelo antigo. Mais pacientes, mais horas, mesma (ou menos)
              receita. <span className="text-red-400 font-semibold">Burnout garantido.</span>
            </p>
          </div>

          {/* Path 2 - Good */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 lg:p-10 shadow-apple-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Caminho 2</h3>
              <p className="text-lg text-white leading-relaxed">
                Você investe 2 horas para aprender o sistema que pode mudar completamente sua vida
                profissional nos próximos <span className="font-bold">90 dias</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-12">
          <p className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Qual você escolhe?
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-16">
          <a
            href="#garantir-vaga"
            className="inline-flex items-center gap-3 px-10 py-5 text-xl font-bold text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-apple-lg"
          >
            QUERO APRENDER O MÉTODO PACIENTE DE ALTO LUCRO
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>

        {/* Workshop Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Informações do Workshop
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <CalendarDays className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-sm text-gray-400 mb-1">Data</div>
              <div className="text-lg font-bold text-white">14 de dezembro de 2025</div>
            </div>

            <div className="text-center">
              <Clock className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-sm text-gray-400 mb-1">Horário</div>
              <div className="text-lg font-bold text-white">9h (horário de Brasília)</div>
            </div>

            <div className="text-center">
              <Clock className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-sm text-gray-400 mb-1">Duração</div>
              <div className="text-lg font-bold text-white">2 horas</div>
            </div>

            <div className="text-center">
              <Monitor className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-sm text-gray-400 mb-1">Formato</div>
              <div className="text-lg font-bold text-white">Online ao vivo</div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            (link enviado 24h antes)
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
