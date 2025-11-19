import React from 'react';
import { Award, Users, TrendingUp, Calendar } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Calendar,
      text: 'Formado em 2011, pós-graduação internacional'
    },
    {
      icon: TrendingUp,
      text: '125 atendimentos particulares/semana em 2019'
    },
    {
      icon: Award,
      text: '5 anos consecutivos: melhor profissional da cidade'
    },
    {
      icon: Users,
      text: '1.247+ profissionais nos programas desde 2019'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-apple-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Foto do Dr. Guilherme</p>
                  <p className="text-xs text-gray-400 mt-1">(Substituir por foto real)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Quem Vai Te Ensinar o{' '}
                <span className="text-apple-blue">Método Paciente de Alto Lucro</span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Me chamo <span className="font-semibold text-gray-900">Guilherme Fattori</span>,
                sou profissional de saúde como você, me formei em 2011, fiz pós graduação internacional
                e vários cursos de aprimoramentos.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Atendi por 3 anos no SUS da minha cidade enquanto construía as pontes para meu
                consultório particular. Em 2014 deixei o SUS pois estava com agenda cheia e fila
                de espera, e decidi trazer outros profissionais para atender na minha equipe.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Passei de 2014 a 2019 cuidando do crescimento do meu consultório. Em 2019, minha
                equipe estava atendendo nas duas principais clínicas da cidade e atingimos a média
                de <span className="font-semibold text-gray-900">125 atendimentos particulares por semana com 5 profissionais</span>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Recebi por 5 anos consecutivos o reconhecimento de melhor profissional da minha
                área na cidade por votação popular nas redes sociais.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Em 2019 comecei a entregar pequenas "dicas" para colegas médicos, e essas dicas se
                tornaram pedidos para um acompanhamento, de onde surgiu a Consultoria.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                De 2019 a 2025 <span className="font-semibold text-gray-900">mais de 1.247 profissionais já estiveram nos meus programas</span>,
                e atualmente atendo algumas das principais clínicas e médicos do Brasil.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-apple-bg rounded-2xl p-4 flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-apple-blue flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <p className="text-sm font-medium text-gray-900 leading-snug pt-1">
                      {highlight.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
