export type Predictor = {
  icon: string;
  title: string;
  value: string;
  color: string;
  description: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};
