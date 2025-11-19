import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
// import './index.css' // TEMPORARIAMENTE DESABILITADO PARA DEBUG - Tailwind pode estar causando erro

console.log('Main.jsx loaded');
console.log('React version:', React.version);
console.log('⚠️ CSS desabilitado para debug');

const root = document.getElementById('root');
console.log('Root element:', root);

if (!root) {
  console.error('Root element not found!');
  document.body.innerHTML = '<div style="padding: 20px; font-family: system-ui;">Error: Root element not found</div>';
} else {
  try {
    console.log('Creating React root...');
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>,
    );
    console.log('React app rendered successfully');
  } catch (error) {
    console.error('Error rendering React app:', error);
    root.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: system-ui;">
        <div style="text-align: center; max-width: 500px; padding: 20px;">
          <h1 style="color: #1c1c1e; margin-bottom: 10px;">Erro ao Carregar</h1>
          <p style="color: #666; margin-bottom: 20px;">Ocorreu um erro ao inicializar a aplicação.</p>
          <pre style="background: #f5f5f5; padding: 15px; border-radius: 8px; text-align: left; overflow: auto; font-size: 12px;">
            ${error.message}
          </pre>
        </div>
      </div>
    `;
  }
}
