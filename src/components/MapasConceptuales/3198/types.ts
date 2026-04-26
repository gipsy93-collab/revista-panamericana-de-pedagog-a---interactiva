export interface NodeData {
  id: string;
  label: string;
  category: string;
  level: 1 | 2 | 3;
  x: number;
  y: number;
  color: string;
  icon: string;
  parentId?: string;
  posterVariant: 'light' | 'dark';
  content: PosterContent;
}

export interface PosterContent {
  title: string;
  breadcrumb: string;
  sections: PosterSection[];
  image?: string;
  imageAlt?: string;
}

export interface PosterSection {
  type: 'insight' | 'body' | 'quote' | 'list' | 'tags' | 'image' | 'metadata';
  content?: string;
  items?: string[];
  quote?: string;
  attribution?: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
}

export interface EdgeData {
  id: string;
  source: string;
  target: string;
  level: 1 | 2;
}

export interface CameraState {
  x: number;
  y: number;
  scale: number;
}

export interface SpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
}
