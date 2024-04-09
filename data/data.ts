import FrontEndIcon from '@/assets/frontEnd';
import BackEndIcon from '@/assets/backEnd';
import ServersDevOpsIcon from '@/assets/devOps';
import DatabaseIcon from '@/assets/database';
import SourceControlIcon from '@/assets/sourceControl';
import ThirdPartyIcon from '@/assets/thirdParty';

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
  'Semantic UI',
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
