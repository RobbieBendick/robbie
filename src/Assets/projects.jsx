import raytracingImage from '../Assets/raytracing.png';
import arenaMarkerImage from '../Assets/arenamarker.png';
import curbCompanionImage from '../Assets/curb-companion.png';

export const nonFeaturedProjectDetails = [
  {
    title: 'A* Pathfinding Algorithm',
    description:
      'Calculates and visualizes the fastest route from the starting location to the end location while maneuvering around barricades.',
    githubSrc: 'https://github.com/RobbieBendick/a-star-pathfinding',
    techList: ['Python'],
    techTag: 'Python',
  },
  {
    title: 'Levenshtein Algorithm',
    description:
      'Plugin/AddOn that streamlines group building with an intuitive GUI. Uses the Levenshtein distance algorithm to analyze messages for player roles and other necessary information.',
    githubSrc: 'https://github.com/RobbieBendick/GroupBuilder',
    techList: ['Lua'],
    techTag: 'Lua',
  },
  {
    title: 'CurbCompanion Mobile',
    description:
      'Cross-platform mobile app designed to help users find local food trucks and explore their menus effortlessly.',
    githubSrc: 'https://github.com/RobbieBendick/curb_companion_mobile',
    techList: ['Flutter', 'Dart'],
    techTag: 'Flutter',
  },
  {
    title: 'CurbCompanion Backend',
    description:
      'Robust backend service supporting the CurbCompanion mobile app, enabling real-time food truck discovery and menu browsing.',
    githubSrc: 'https://github.com/RobbieBendick/curb_companion_backend',
    techList: ['TS', 'Express', 'MongoDB', 'JWT'],
    techTag: 'JS Node',
  },
  {
    title: 'CurbCompanion Landing',
    description:
      'Landing page for CurbCompanion, providing information and access to the mobile app for food truck enthusiasts.',
    githubSrc: 'https://github.com/RobbieBendick/curb_companion_landing',
    externalSrc: 'https://curbcompanion.com/',
    techList: ['TS', 'React', 'Vite'],
    techTag: 'JS',
  },
  {
    title: 'CurbCompanion Admin Panel',
    description:
      'User-friendly admin dashboard for efficiently managing food truck data and user accounts within the CurbCompanion app.',
    githubSrc: 'https://github.com/RobbieBendick/curb_companion_admin',
    techList: ['TS', 'React', 'Vite'],
    techTag: 'JS',
  },
];

export const featuredProjectDetails = [
  {
    title: 'Ray Tracing',
    description:
      'A ray tracer built in Rust that employs advanced rendering techniques which includes realistic sphere rendering with dynamic shadows, reflections, and refractions.',
    githubSrc: 'https://github.com/RobbieBendick/raytracing',
    techList: ['Rust'],
    image: raytracingImage,
  },
  {
    title: 'CurbCompanion',
    description:
      'Full stack app developed in Flutter for compatibility with both Android and iOS that links users with nearby food trucks and vendors. The app incorporates various features such as Google Maps integration, providing users with access to menus, schedules, and locations of local food trucks and vendors.',
    githubSrc: 'https://github.com/RobbieBendick/curb_companion_mobile',
    externalSrc: 'https://curbcompanion.com/',
    techList: ['TS', 'Flutter', 'Express', 'MongoDB'],
    image: curbCompanionImage,
    id: 'curb-companion',
  },
  {
    title: 'ArenaMarker',
    description:
      'Fully customizable addon that automates tedious UI tasks. 100k+ downloads and rank 14 in popularity, among other addons in its respective category.',
    githubSrc: 'https://github.com/RobbieBendick/ArenaMarker',
    externalSrc: 'https://www.curseforge.com/wow/addons/arenamarker',
    techList: ['Lua'],
    image: arenaMarkerImage,
    id: 'arenamarker',
  },
];
