export interface PopupContent {
  label?: string;
  value: string;
  highlight?: boolean;
}

export interface SubNode {
  id: string;
  title: string;
  icon: string;
  popup: {
    type: 'info' | 'compare' | 'testimonials' | 'cards' | 'list';
    title: string;
    content: PopupContent[];
    source?: string;
    animation?: string;
  };
}

export interface Branch {
  id: string;
  position: 'top-left' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom-right';
  title: string;
  icon: string;
  color: string;
  subNodes: SubNode[];
}

export interface TourStep {
  branchId: string;
  subNodeId: string;
  message: string;
}
