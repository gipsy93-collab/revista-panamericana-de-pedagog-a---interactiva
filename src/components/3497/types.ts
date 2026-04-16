export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface LeadershipType {
  name: string;
  features: string;
  impact: string;
}

export interface Dimension {
  key: string;
  name: string;
  icon: string;
  description: string;
  elements: string[];
  status: 'evaluated' | 'ignored';
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  status: 'finished' | 'active' | 'cancelled';
}

export interface Quote {
  text: string;
  author: string;
}
