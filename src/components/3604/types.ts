export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'fácil' | 'medio' | 'difícil';
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  quote?: string;
}
