import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { siteConfig } from '@/config/site';
import { Inter } from 'next/font/google';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Radix UI',
    'shadcn/ui',
    'Portfolio',
    'Code',
    'Programming',
    'Software Engineer',
    'Humble Penguin',
    'humblepenguin',
    'humblepenguinn',
    'Humble Penguin Portfolio',
    'Digital Portfolio',
    'Portfolio Website',
    'Open Source',
    'GitHub',
    'Code Showcase',
    'Personal Projects',
    'Creative Coding',
    'Technology Enthusiast',
    'Tech Blog',
    'Tech Articles',
    'Programming Languages',
    'Software Development',
    'Innovative Solutions',
    'Problem Solving',
    'Technical Skills',
    'Rust',
    'TypeScript',
    'JavaScript',
    'React',
    'C',
    'C++',
    'Python',
  ],
  authors: [
    {
      name: siteConfig.author,
    },
  ],
  creator: siteConfig.author,

  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex justify-center bg-background text-zinc-800 dark:text-zinc-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="container flex min-h-screen max-w-7xl mx-auto flex-col py-4 md:py-8 mx-auto max-w-4xl px-6">
            <Navbar />
            {children}
            <Analytics mode="production" />
            <SpeedInsights />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
