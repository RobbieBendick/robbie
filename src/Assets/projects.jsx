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
    title: 'GroupBuilder',
    description:
      'Comprehensive Plugin/AddOn designed to streamline the group building process, featuring an intuitive GUI control panel for effortless player management, updates, and removals.',
    githubSrc: 'https://github.com/RobbieBendick/GroupBuilder',
    techList: ['Lua'],
    techTag: 'Lua',
  },
  {
    title: 'GladiatorGuru',
    description:
      'A full stack web app that provides World of Warcraft players with a platform to connect with professional players for coaching or gaming.',
    githubSrc: 'https://github.com/brandongevat/gladiator-guru',
    techList: ['React', 'TS', 'Express', 'MongoDB'],
    techTag: 'JS Node',
  },
  {
    title: 'TotemPredictor',
    description:
      'Plugin/AddOn for an online game that determines the best ability to use in a given scenario.',
    githubSrc: 'https://github.com/RobbieBendick/totempredictor',
    externalSrc: 'https://www.curseforge.com/wow/addons/totempredictor',
    techList: ['Lua'],
    techTag: 'Lua',
  },
  {
    title: 'Dark Theme',
    description:
      'Provides a Dark Theme as part of a customizable UI Addon/Plugin written in Lua.',
    githubSrc: 'https://github.com/RobbieBendick/DarkTheme',
    techList: ['Lua'],
    techTag: 'Lua',
  },
  {
    title: 'Anon',
    description:
      "Plugin/AddOn that color coordinates unit nameplates, and disguises player and player companion's names.",
    githubSrc: 'https://github.com/RobbieBendick/Anon',
    techList: ['Lua'],
    techTag: 'Lua',
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
    externalSrc: 'https://curbcompanion.com/',
    techList: ['TS', 'Flutter', 'Express', 'MongoDB'],
    image: curbCompanionImage,
    id: 'curb-companion',
  },
  {
    title: 'ArenaMarker',
    description:
      'Fully customizable addon that automates tedious UI tasks. 52k+ downloads and currently rank 14 in popularity, among other addons in its respective category.',
    githubSrc: 'https://github.com/RobbieBendick/ArenaMarker',
    externalSrc: 'https://www.curseforge.com/wow/addons/arenamarker',
    techList: ['Lua'],
    image: arenaMarkerImage,
    id: 'arenamarker',
  },
];
