import React from 'react';
import SimpleTest from './SimpleTest';

// MODO DE DEBUG: Componente simples para testar se React está funcionando
// Se esta página aparecer, o problema é em algum dos componentes principais
// Para voltar ao normal, restaure o arquivo App.backup.jsx

function App() {
  console.log('App component rendering...');

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      <SimpleTest />
    </div>
  );
}

export default App;
