export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface Specialty {
  name: string;
  count: number;
}

export interface FrequencyRow {
  specialty: string;
  never: number;
  once: number;
  multiple: number;
}

export interface Quote {
  text: string;
  author: string;
}
