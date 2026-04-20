export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: string;
}

export interface Testimony {
  text: string;
  author: string;
}

export interface Dimension {
  id: string;
  title: string;
  content: string;
  highlight: string;
  icon: string;
  testimonies: Testimony[];
}
