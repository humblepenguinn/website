import { IconType } from 'react-icons';
import { FaRust, FaDocker } from 'react-icons/fa';
import { FcLinux } from 'react-icons/fc';
import {
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoPython,
  BiLogoCPlusPlus,
  BiLogoFlask,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoGit,
} from 'react-icons/bi';
import {
  SiPrisma,
  SiGnubash,
  SiHiveBlockchain,
  SiExpress,
  SiNextdotjs,
  SiOpengl,
  SiTensorflow,
  SiNumpy,
  SiPytorch,
  SiRasa,
  SiPandas,
  SiPostgresql,
  SiRedis,
  SiDjango,
} from 'react-icons/si';
import { BsGit } from 'react-icons/bs';

export default function getIconByName(iconName: string): IconType | null {
  switch (iconName) {
    case 'rust':
      return FaRust;
    case 'mongodb':
      return BiLogoMongodb;
    case 'tailwind':
      return BiLogoTailwindCss;
    case 'typescript':
      return BiLogoTypescript;
    case 'nextjs':
      return SiNextdotjs;
    case 'prisma':
      return SiPrisma;
    case 'bash':
      return SiGnubash;
    case 'hive':
      return SiHiveBlockchain;
    case 'react':
      return BiLogoReact;
    case 'python':
      return BiLogoPython;
    case 'c++':
      return BiLogoCPlusPlus;
    case 'flask':
      return BiLogoFlask;
    case 'nodejs':
      return BiLogoNodejs;
    case 'express':
      return SiExpress;
    case 'javascript':
      return BiLogoJavascript;
    case 'html':
      return BiLogoHtml5;
    case 'git':
      return BiLogoGit;
    case 'linux':
      return FcLinux;
    case 'opengl':
      return SiOpengl;
    case 'tensorflow':
      return SiTensorflow;
    case 'numpy':
      return SiNumpy;
    case 'pytorch':
      return SiPytorch;
    case 'rasa':
      return SiRasa;
    case 'git':
      return BsGit;
    case 'pandas':
      return SiPandas;
    case 'docker':
      return FaDocker;
    case 'postgresql':
      return SiPostgresql;
    case 'redis':
      return SiRedis;
    case 'django':
      return SiDjango;
    default:
      console.log('Icon not found', iconName);
  }

  return FaRust;
}
