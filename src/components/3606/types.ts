export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface GEPIAResult {
  label: string;
  value: number;
  widthPercent: number;
  color: 'high' | 'medium' | 'low';
}

export interface Barrier {
  icon: string;
  name: string;
  description: string;
}

export interface Adjustment {
  name: string;
  description: string;
  teacher: string;
}

export interface Quote {
  text: string;
  author: string;
}
