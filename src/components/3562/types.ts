export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface Profile {
  key: string;
  name: string;
  age: number;
  semester: string;
  location: string;
  tags: string[];
  story: string;
  quote?: string;
  color: string;
}

export interface DataStat {
  value: string;
  label: string;
  context: string;
}

export interface AgeBar {
  label: string;
  count: number;
  widthPercent: number;
}

export interface TheoryTab {
  key: string;
  title: string;
  content: React.ReactNode;
}

export interface Testimonial {
  text: string;
  author: string;
}

export interface Solution {
  id: string;
  label: string;
}
