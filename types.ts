export interface TeamMember {
  id: number;
  name: string;
  role: string;
  committee: 'High Board' | 'Tech' | 'Media' | 'PR' | 'HR' | 'Logistics';
  image: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  type: 'Past' | 'Upcoming';
}

export interface RoadmapItem {
  id: number;
  title: string;
  description: string;
  category: 'Level 0' | 'Level 1' | 'Advanced';
  link: string;
  type: 'Video' | 'Sheet' | 'Slides';
}

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
}
