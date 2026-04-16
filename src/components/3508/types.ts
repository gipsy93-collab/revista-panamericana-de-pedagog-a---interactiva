export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface Barrier {
  title: string;
  desc: string;
}

export interface KeyStat {
  label: string;
  value: string;
  note: string;
}

export interface Quote {
  text: string;
  author: string;
}
