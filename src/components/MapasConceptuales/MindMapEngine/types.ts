import type { LucideIcon } from 'lucide-react';

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
  posterVariant?: 'dark' | 'light';
  content: {
    title: string;
    breadcrumb: string;
    sections: ContentSection[];
    image?: string;
    imageAlt?: string;
  };
}

export interface ContentSection {
  type: 'insight' | 'body' | 'list' | 'quote' | 'metadata';
  content?: string;
  items?: string[];
  quote?: string;
  attribution?: string;
  tags?: string[];
}

export interface EdgeData {
  id: string;
  source: string;
  target: string;
  level: number;
}
