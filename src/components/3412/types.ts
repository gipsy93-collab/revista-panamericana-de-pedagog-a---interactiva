export type Dimension = {
  code: string;
  name: string;
  emoji: string;
  desc: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};
