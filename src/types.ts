import React from 'react';

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  tag: string;
  metric: number;
  trend?: number[];
  abstract: string;
  img: string;
  keywords: string;
  doi: string;
  interactUrl?: string;
}

export interface RSSItem {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
  category: string;
}

export interface NavItem {
  name: string;
  index: number;
  icon: React.ElementType;
}
