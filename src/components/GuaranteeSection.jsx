import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-apple-bg">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-4xl p-10 lg:p-16 shadow-apple-lg border border-gray-100">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Garantia Incondicional de Resultado
            </h2>
          </div>

          {/* Seal */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-apple-lg">
                <Shield className="w-20 h-20 text-white" strokeWidth={2} />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-apple">
                <CheckCircle className="w-10 h-10 text-green-500" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
              Participe do workshop completo. Se ao final você não souber{' '}
              <span className="font-bold text-gray-900">EXATAMENTE</span> como implementar o
              Método Paciente de Alto Lucro no seu consultório, eu devolvo{' '}
              <span className="font-bold text-green-600">100% do seu investimento</span>.
            </p>

            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                Você não tem nada a perder. Literalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
