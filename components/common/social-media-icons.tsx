'use client';

import { FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import { siteConfig } from '@/config/site';

export function SocialMediaIcons() {
  return (
    <div className="flex gap-2">
      <a
        target="_blank"
        href={siteConfig.links.github}
        rel="noopener noreferrer"
        aria-label="Github"
        className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <FaGithub />
      </a>
      <a
        target="_blank"
        href={siteConfig.links.discord}
        rel="noopener noreferrer"
        aria-label="Github"
        className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <FaDiscord color="#7289DA" />
      </a>

      <a
        target="_blank"
        href={siteConfig.links.instagram}
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <div
          style={{
            background:
              ' linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
            padding: '1px',
            borderRadius: '6px',
          }}
        >
          <FaInstagram
            style={{
              color: '#fff',
              paddingBottom: '1px',
            }}
            size={20}
          />
        </div>
      </a>

      <a
        target="_blank"
        href={siteConfig.links.gmail}
        rel="noopener noreferrer"
        aria-label="Email"
        className="rounded p-2 text-xl hover:bg-accent hover:text-accent-foreground"
      >
        <SiGmail color="#D14836" />
      </a>
    </div>
  );
}
