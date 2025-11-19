import React from 'react';

function SimpleTest() {
  return (
    <div style={{
      padding: '40px',
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#1c1c1e',
        marginBottom: '20px'
      }}>
        React Funcionando! ✅
      </h1>
      <p style={{
        fontSize: '20px',
        color: '#666',
        marginBottom: '20px'
      }}>
        Se você está vendo esta mensagem, significa que o React está carregando corretamente.
      </p>
      <div style={{
        background: '#f5f5f7',
        padding: '20px',
        borderRadius: '12px'
      }}>
        <p style={{ margin: 0, color: '#333' }}>
          <strong>Próximo passo:</strong> Verificar por que os componentes principais não estão renderizando.
        </p>
      </div>
    </div>
  );
}

export default SimpleTest;
