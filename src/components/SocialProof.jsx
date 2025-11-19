import React from 'react';

const SocialProof = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            1.247 Médicos e Profissionais de Saúde de Alto Ticket já implementaram o{' '}
            <span className="text-gray-600">Método Paciente de Alto Lucro</span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {[1, 2, 3].map((index) => (
            <div key={index} className="group">
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-apple transition-all duration-300 hover:shadow-apple-lg hover:scale-[1.02]">
                {/* Video Placeholder */}
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
      </div>
    </section>
  );
};

export default SocialProof;
