// Definición de variables de entorno
interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly GEMINI_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Tipo simplificado para Lenis
type LenisInstance = {
  raf: (time: number) => void;
  on: (event: string, callback: () => void) => void;
  destroy: () => void;
  scrollTo: (target: number | string | HTMLElement, options?: object) => void;
};

declare global {
  interface Window {
    /** Instancia global de Lenis para scroll suave */
    lenis?: LenisInstance;
  }
}

// Export vacío para que el archivo sea tratado como módulo
export {};
