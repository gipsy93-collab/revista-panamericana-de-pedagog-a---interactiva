export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface RegionalData {
  name?: string;
  value?: number;
  region?: string;
  n: number;
  percentage?: number;
  countries: string;
}

export interface Perspective {
  focus: string;
  authors: string;
  characteristics: string;
}

export interface Strategy {
  strategy: string;
  description: string;
  authors: string;
}

export interface TypeResult {
  type: string;
  description: string;
  studies: string;
}
