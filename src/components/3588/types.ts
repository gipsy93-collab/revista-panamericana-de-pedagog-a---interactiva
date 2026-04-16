export interface Question {
  id: number;
  difficulty: 'fácil' | 'medio' | 'difícil';
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  quote?: string;
}

export interface Flashcard {
  front: string;
  back: string;
  category: string;
}
