import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import matter from 'gray-matter';
import { parseSimpleFrontmatter } from './simpleFrontmatter';

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

function parseMarkdown(raw: string): { data: Record<string, unknown>; body: string } {
  try {
    const parsed = matter(raw);
    return { data: parsed.data, body: parsed.content };
  } catch (e: any) {
    console.warn('gray-matter failed, using simple parser:', e?.message || e);
    return parseSimpleFrontmatter(raw);
  }
}

function getRawContent(mod: unknown): string {
  if (typeof mod === 'string') return mod;
  if (mod && typeof mod === 'object' && mod !== null && 'default' in mod && typeof (mod as Record<string, unknown>).default === 'string') {
    return (mod as Record<string, unknown>).default as string;
  }
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

function parseModules(modules: Record<string, unknown>): ArticleData[] {
  const items: ArticleData[] = [];
  for (const path in modules) {
    const raw = getRawContent(modules[path]);
    const { data, body } = parseMarkdown(raw);
    items.push({ ...data, body });
  }
  return items;
}

export async function loadArticles(): Promise<ArticleData[]> {
  // SOLUCIÓN DEFINITIVA: Usamos datos estáticos hardcodeados en TypeScript.
  // Esto elimina la dependencia de gray-matter que fallaba en producción/browser
  // causando que los artículos aparecieran como "ANÓNIMO / SIN TÍTULO".
  // Los .md siguen siendo la fuente de verdad editorial, pero los datos
  // se transfieren aquí manualmente cuando se actualiza un artículo.
  const { ARTICLES_STATIC } = await import('./articlesData');
  console.log("[contentLoader] Using static articles data:", ARTICLES_STATIC.length);
  return ARTICLES_STATIC;
}

export async function loadTransmedia(): Promise<TransmediaData[]> {
  return parseModules(transmediaModules) as TransmediaData[];
}

export async function loadBlogPosts(): Promise<BlogData[]> {
  return (parseModules(blogModules) as BlogData[]).sort((a, b) => Number(a.id) - Number(b.id));
}
