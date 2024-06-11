import { FaRust } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoPython,
} from 'react-icons/bi';
import { BsTerminal } from 'react-icons/bs';
import {
  SiPrisma,
  SiHiveBlockchain,
  SiMui,
  SiTensorflow,
} from 'react-icons/si';
import { IoGameController } from 'react-icons/io5';

export const projects = [
  {
    repo: 'envio',
    link: 'https://github.com/humblepenguinn/envio',
    website: '',
    description:
      'A open source CLI tool that helps make managing environment variables a breeze',
    summaryPoints: [
      'With envio, users can create encrypted profiles that contain a collection of environment variables associated with a specific project or use case',
      'envio ensures security and simplifies the development process by allowing users to easily switch between profiles as needed and load them in their current terminal session for immediate use',
      'It has over 600 stars on GitHub and is by far the most popular project I have worked on',
      'Built using The Rust programming language 🦀',
    ],
    icons: [
      { icon: FaRust, color: '#E05D44' },
      { icon: BsTerminal, color: '#C0C0C0' },
    ],
  },
  {
    repo: 'text',
    link: 'https://github.com/humblepenguinn/text',
    website: '',
    description:
      'A Chat Application that allows users to send and receive messages',
    summaryPoints: [
      'The application supports multiple login methods, including credentials, Google, and GitHub',
      'With Text, you can send messages, images, view user status (online or offline), create groups, and see if others have read your messages',
      "You can view the live demo at the project's GitHub repo",
      'Built using TypeScript, Next.js, TailwindCSS, MongoDB and Prisma 🚀',
    ],
    icons: [
      { icon: BiLogoTypescript, color: '#007ACC' },
      { icon: TbBrandNextjs, color: '#C0C0C0' },
      { icon: BiLogoTailwindCss, color: '#38B2AC' },
      { icon: BiLogoMongodb, color: '#3FA037' },
      { icon: SiPrisma, color: '#C0C0C0' },
    ],
  },
  {
    repo: 'odyssey',
    link: 'https://github.com/humblepenguinn/odyssey',
    website: '',
    description: 'Odyssey is a custom blockchain project built from scratch',
    summaryPoints: [
      'It was built following the original Bitcoin paper by Satoshi Nakamoto',
      'It aims to provide a simple and educational example of how a blockchain operates and its fundamental components',
      'As of now, it is a work in progress and not ready for production use',
      'Features include: Proof of Work, Merkle Trees, UTXOs, and more',
      'Built using The Rust programming language 🦀',
    ],
    icons: [
      { icon: FaRust, color: '#E05D44' },
      { icon: SiHiveBlockchain, color: '#FFFFFF' },
    ],
  },
  {
    repo: 'wallet',
    link: 'https://github.com/humblepenguinn/wallet',
    website: '',
    description:
      'A blockchain wallet that allows users to send and receive cryptocurrency',
    summaryPoints: [
      'It is built on top of a custom blockchain project that I built from scratch (odyssey)',
      'Users can create wallets, send transactions, view their transaction history and view all the addresses in the blockchain',
      'Built using TypeScript, Next.js and TailwindCSS ⭐',
    ],
    icons: [
      { icon: BiLogoTypescript, color: '#007ACC' },
      { icon: TbBrandNextjs, color: '#C0C0C0' },
      { icon: BiLogoTailwindCss, color: '#38B2AC' },
      { icon: FaRust, color: '#E05D44' },
    ],
  },
  {
    repo: 'blaze',
    link: 'https://github.com/humblepenguinn/blaze',
    website: '',
    description:
      'Blaze is a modern and minimal Node.js package manager designed to offer similar functionality to npm and Yarn, but with a key advantage: it is written in Rust, making it exceptionally fast.',
    summaryPoints: [
      'The choice of Rust as the programming language allows Blaze to take advantage of its performance benefits and efficiently handle package management tasks',
      "However, it's essential to note that as of now, Blaze is still a new project and might not be entirely stable or feature-complete. It is not yet recommended for use in production applications, where stability and reliability are crucial",
      'Nevertheless, Blaze can be an exciting option for developers who are looking to experiment with a faster package manager or work on test/hobby projects. It allows users to experience the benefits of increased speed during the development process, making it an appealing choice for non-critical projects.',
      'Built using The Rust Programming Language 🔥',
    ],
    icons: [
      { icon: FaRust, color: '#E05D44' },
      { icon: BsTerminal, color: '#C0C0C0' },
    ],
  },
  {
    repo: 'rewind',
    link: 'https://github.com/humblepenguinn/rewind',
    website: '',
    description:
      'A Youtube Clone that allows users to watch videos, see channel information, search for videos, and more',
    summaryPoints: [
      "You can view the live demo at the project's GitHub repo. Please note that there might be a chance that the Rapid Youtube API key might have gone over its limit",
      'So in that case, you can view the pictures of the application in the GitHub repo or you can clone the repo and run it locally',
      'Built using TypeScript, Next.js, TailwindCSS, MaterialUI, and the Rapid Youtube API 🎉',
    ],
    icons: [
      { icon: BiLogoTypescript, color: '#007ACC' },
      { icon: TbBrandNextjs, color: '#C0C0C0' },
      { icon: BiLogoTailwindCss, color: '#38B2AC' },
      { icon: SiMui, color: '#1976D2' },
    ],
  },
  {
    repo: 'portfolio-website',
    link: 'https://github.com/humblepenguinn/website',
    website: '',
    description:
      'A personal portfolio website that showcases my projects and skills',
    summaryPoints: [
      'You are currently on it right now!',
      'Built using TypeScript, Next.js and TailwindCSS 🌟',
    ],
    icons: [
      { icon: BiLogoTypescript, color: '#007ACC' },
      { icon: TbBrandNextjs, color: '#C0C0C0' },
      { icon: BiLogoTailwindCss, color: '#38B2AC' },
      { icon: SiMui, color: '#1976D2' },
    ],
  },
  {
    repo: 'python-games',
    link: 'https://github.com/humblepenguinn/python-games',
    website: '',
    description: 'A collection of games built using Python',
    summaryPoints: [
      'Some of the games included are: AI Flappy Bird, Tetris, AI Rock Paper Scissors, Snake and much more',
      'Built using Python and Pygame 🐍. Some games also use various AI libraries such as NEAT and Tensorflow',
    ],
    icons: [
      { icon: BiLogoPython, color: '#3776AB' },
      { icon: IoGameController, color: '#FFFFFF' },
      { icon: SiTensorflow, color: '#FF6F00' },
    ],
  },
];
