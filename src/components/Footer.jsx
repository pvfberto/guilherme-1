import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-apple-bg py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Dr. Guilherme Fattori
          </h3>

          {/* Copyright */}
          <p className="text-sm text-apple-text">
            Todos os Direitos Reservados © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
