import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import matter from 'gray-matter';

export const ICON_MAP: Record<string, LucideIcon> = {
  Brain: Icons.Brain,
  Activity: Icons.Activity,
  BookOpen: Icons.BookOpen,
  GraduationCap: Icons.GraduationCap,
  Heart: Icons.Heart,
  Film: Icons.Film,
  Phone: Icons.Phone,
  ShieldAlert: Icons.ShieldAlert,
  Search: Icons.Search,
  Sparkles: Icons.Sparkles,
  TrendingUp: Icons.TrendingUp,
  Mic: Icons.Mic,
  Play: Icons.Play,
  FileText: Icons.FileText,
  Feather: Icons.Feather,
  Eye: Icons.Eye,
  MessageCircle: Icons.MessageCircle,
};

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface ArticleData {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  tag: string;
  metric: number;
  volume: string;
  abstract: string;
  doi: string;
  interactUrl: string;
  icon: string;
  color: string;
  text: string;
  accent: string;
  keywords: string[];
  hasInteractive?: boolean;
  template?: string;
  quizQuestions?: QuizQuestion[];
  body?: string;
}

export interface TransmediaData {
  id: string;
  type: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
  text: string;
  link: string;
  image: string;
  body?: string;
}

export interface BlogData {
  id: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
  text: string;
  date: string;
  readTime: string;
  category: string;
  body?: string;
}

function parseMarkdown(raw: string): { data: any; body: string } {
  try {
    const lines = raw.split('\n');
    if (lines[0].trim() !== '---') return { data: {}, body: raw };
    
    const data: any = {};
    let i = 1;
    let currentKey: string | null = null;
    
    while (i < lines.length && lines[i].trim() !== '---') {
      const line = lines[i];
      if (line.trim() === '') {
        i++;
        continue;
      }
      
      if (line.startsWith('  - ')) {
        if (currentKey) {
          if (!Array.isArray(data[currentKey])) data[currentKey] = [];
          data[currentKey].push(line.replace('  - ', '').trim());
        }
      } else {
        const colonIdx = line.indexOf(':');
        if (colonIdx !== -1) {
          currentKey = line.substring(0, colonIdx).trim();
          let value = line.substring(colonIdx + 1).trim();
          
          if (value === 'true') data[currentKey] = true;
          else if (value === 'false') data[currentKey] = false;
          else if (!value) data[currentKey] = []; // Prep for array
          else data[currentKey] = value.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1'); // Remueve comillas si las hay
        }
      }
      i++;
    }
    return { data, body: lines.slice(i + 1).join('\n').trim() };
  } catch (e) {
    console.error('Failed to parse markdown:', e);
    return { data: {}, body: raw };
  }
}

function getRawContent(mod: any): string {
  if (typeof mod === 'string') return mod;
  if (mod && typeof mod.default === 'string') return mod.default;
  if (mod && typeof mod === 'object') return JSON.stringify(mod);
  return String(mod);
}

const articleModules = import.meta.glob('/src/content/articles/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const transmediaModules = import.meta.glob('/src/content/transmedia/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const blogModules = import.meta.glob('/src/content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function parseModules(modules: Record<string, any>): any[] {
  const items: any[] = [];
  for (const path in modules) {
    const raw = getRawContent(modules[path]);
    const { data, body } = parseMarkdown(raw);
    items.push({ ...data, body });
  }
  return items;
}

export async function loadArticles(): Promise<ArticleData[]> {
  return parseModules(articleModules) as ArticleData[];
}

export async function loadTransmedia(): Promise<TransmediaData[]> {
  return parseModules(transmediaModules) as TransmediaData[];
}

export async function loadBlogPosts(): Promise<BlogData[]> {
  return (parseModules(blogModules) as BlogData[]).sort((a, b) => Number(a.id) - Number(b.id));
}
