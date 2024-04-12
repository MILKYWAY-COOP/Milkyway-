import FrontEndIcon from '@/assets/frontEnd';
import BackEndIcon from '@/assets/backEnd';
import ServersDevOpsIcon from '@/assets/devOps';
import DatabaseIcon from '@/assets/database';
import SourceControlIcon from '@/assets/sourceControl';
import ThirdPartyIcon from '@/assets/thirdParty';
import Affyn from '@/public/Affyn.png';
import OCBStream from '@/public/stream.jpg';
import Aksanti from '@/public/Aksanti.png';
import Jays from '@/public/jays.png';
import Humania from '@/public/humania.png';

const FrontEnd = [
  'JavaScript',
  'TypeScript',
  'ES6',
  'React JS',
  'Next JS',
  'Redux',
  'React Native',
  'Bootstrap',
  'Tailwind CSS',
  'Material UI',
  'WordPress + CMS Development',
  'Semantic Ui',
];

const BackEnd = [
  'Node JS',
  'Express JS',
  'Nest JS',
  'Strapi',
  'GraphQL',
  'Prisma',
  'Koa JS',
  'PostgreSQL',
  'API & Microservices development',
  'Knowledge of back-end development best practices',
];

const SeversnDevOps = [
  'Docker',
  'Nginx',
  'AWS',
  'Google Cloud',
  'Firewalls',
  'CI/CD',
];

const Database = ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase'];

const scodecontrol = ['Git', 'GitHub', 'GitLab', 'Bitbucket'];

const thirdPartyAPI = [
  'Chat gpt API',
  'Google Maps API',
  'WhatsApp Business API',
];

export const categories = [
  {
    name: 'Front End',
    technologies: FrontEnd,
    icon: FrontEndIcon,
  },
  {
    name: 'Back End',
    technologies: BackEnd,
    icon: BackEndIcon,
  },
  {
    name: 'Servers & DevOps',
    technologies: SeversnDevOps,
    icon: ServersDevOpsIcon,
  },
  {
    name: 'Database',
    technologies: Database,
    icon: DatabaseIcon,
  },
  {
    name: 'Source Control',
    technologies: scodecontrol,
    icon: SourceControlIcon,
  },
  {
    name: 'Third Party APIs',
    technologies: thirdPartyAPI,
    icon: ThirdPartyIcon,
  },
];

export const projects = [
  {
    title: 'Affyn',
    tags: ['Next js', 'Tailwind CSS', 'Redux', 'Figma'],
    image: Affyn,
    description:
      'The project involved a unique combination of features and technologies to enable NFT minting and facilitate a marketplace with normal authentication. The goal was to create a seamless user experience that encompassed Web3 wallet integration, smart contract interactions, and connection with user accounts.',
    accent: '#071031',
  },
  {
    title: 'OCB Stream',
    tags: ['React JS', 'Three JS', 'Redux', 'AWS', 'Jest', 'Strapi'],
    image: OCBStream,
    description:
      'OCB Stream is a web application that allows users to improve their drive thru experience. It is can be used by both restaurant owners and customers.',
    accent: '#314E10',
  },
  {
    title: 'Aksanti',
    tags: ['React JS', 'Tailwind CSS'],
    image: Aksanti,
    description:
      "AKSANTI GROUP CORPORATION is a Congolese holding corporation that centers its activities on the country's primary economy. We build their landing page.",
    accent: '#11294A',
  },
  {
    title: 'Jays',
    tags: [
      'Next js',
      'Prisma',
      'Postgres',
      'Google Cloud',
      'Docker',
      'Typescript',
      'API',
    ],
    image: Jays,
    description:
      'Jays is bus management software that helps bus companies manage their fleet.',
    accent: '#0E062E',
  },
  {
    title: 'Humania',
    tags: ['React JS', 'Web3.js', 'Tailwind CSS', 'Figma'],
    image: Humania,
    description:
      'Humania is a platform that connects users with mental health professionals. It is built with React JS, Node JS, MongoDB, and GraphQL.',
    accent: '#50084C',
  },
];
