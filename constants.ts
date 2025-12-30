import { TeamMember, Event, RoadmapItem, Sponsor } from './types';

// Generate 30 mock team members
export const TEAM_MEMBERS: TeamMember[] = Array.from({ length: 30 }, (_, i) => {
  const committees = ['High Board', 'Tech', 'Media', 'PR', 'HR', 'Logistics'] as const;
  const committee = committees[i % committees.length];
  return {
    id: i,
    name: `Member Name ${i + 1}`,
    role: i < 6 ? 'Head of Committee' : 'Member',
    committee: committee,
    image: `https://picsum.photos/seed/member${i}/200/200`,
  };
});

export const EVENTS: Event[] = [
  {
    id: 1,
    title: "ICPC Tanta Qualifications 2025",
    date: "Oct 15, 2025",
    description: "The main qualification round for the university teams.",
    image: "https://picsum.photos/seed/event1/600/400",
    type: "Upcoming"
  },
  {
    id: 2,
    title: "Intro to C++ Workshop",
    date: "Nov 01, 2025",
    description: "A beginner friendly workshop to start your coding journey.",
    image: "https://picsum.photos/seed/event2/600/400",
    type: "Upcoming"
  },
  {
    id: 3,
    title: "ECPC Finals 2024",
    date: "August 20, 2024",
    description: "Our teams competing at the national level.",
    image: "https://picsum.photos/seed/event3/600/400",
    type: "Past"
  },
  {
    id: 4,
    title: "Ramadan Coding Nights",
    date: "April 10, 2024",
    description: "Nightly contests during the holy month.",
    image: "https://picsum.photos/seed/event4/600/400",
    type: "Past"
  }
];

export const ROADMAP_MATERIALS: RoadmapItem[] = [
  { id: 1, title: "C++ Basics", description: "Introduction to syntax and loops", category: "Level 0", link: "#", type: "Slides" },
  { id: 2, title: "STL Containers", description: "Vectors, Sets, Maps", category: "Level 1", link: "#", type: "Video" },
  { id: 3, title: "Number Theory", description: "Primes, GCD, LCM", category: "Level 1", link: "#", type: "Sheet" },
  { id: 4, title: "Graph Theory I", description: "BFS, DFS", category: "Advanced", link: "#", type: "Slides" },
  { id: 5, title: "Dynamic Programming", description: "Knapsack, LCS", category: "Advanced", link: "#", type: "Video" },
];

export const SPONSORS: Sponsor[] = [
  { id: 1, name: "Focus Zone", logo: "https://picsum.photos/seed/logo1/200/100" },
  { id: 2, name: "WOCM Workspace", logo: "https://picsum.photos/seed/logo2/200/100" },
  { id: 3, name: "Watchly", logo: "https://picsum.photos/seed/logo3/200/100" },
];

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Teams", path: "/team" },
  { name: "Roadmaps", path: "/roadmaps" },
  { name: "Training", path: "/training" },
  { name: "Events", path: "/events" },
];
