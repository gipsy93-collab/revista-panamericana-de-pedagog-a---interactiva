import React, { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      
      return (
        <div className="min-h-screen bg-zine-black flex items-center justify-center p-6">
          <div className="max-w-lg text-center">
            <h1 className="text-4xl text-white mb-4">⚠️ Algo salió mal</h1>
            <p className="text-red-400 text-sm mb-4 font-mono break-all">
              {this.state.error?.message || 'Error desconocido'}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-zine-red text-white rounded"
            >
              Recargar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
