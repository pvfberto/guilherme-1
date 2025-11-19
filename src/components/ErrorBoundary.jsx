import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '20px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{ maxWidth: '600px', textAlign: 'center' }}>
            <h1 style={{ color: '#1c1c1e', fontSize: '24px', marginBottom: '10px' }}>
              Algo deu errado
            </h1>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              Ocorreu um erro ao carregar a página. Por favor, tente recarregar.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 24px',
                backgroundColor: '#0071e3',
                color: 'white',
                border: 'none',
                borderRadius: '24px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Recarregar Página
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details style={{ marginTop: '20px', textAlign: 'left' }}>
                <summary style={{ cursor: 'pointer', color: '#666' }}>
                  Detalhes do erro (desenvolvimento)
                </summary>
                <pre style={{
                  marginTop: '10px',
                  padding: '10px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  overflow: 'auto',
                  fontSize: '12px'
                }}>
                  {this.state.error.toString()}
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
