'use client';

import { useState, useEffect } from 'react';
import { Separator } from '@/components/ui/separator';

import {
  Languages as LanguagesComponent,
  MostUsedLanguage,
} from '@/components/pages/skills/languages';
import { Languages } from '@/types';

import Skills from '@/components/pages/skills/skills';
import { HeadingText } from '@/components/common/heading-text';
import SkillsPageLoading from './loading';

export default function SkillsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    setIsMounted(true);
    updateScreenWidth();

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  if (!isMounted) {
    return <SkillsPageLoading />;
  }

  const languages: Languages[] = [
    {
      name: 'Rust',
      usage: 20,
      color: '#DE5833',
    },
    {
      name: 'Python',
      usage: 20,
      color: '#3572A5',
    },
    {
      name: 'C++',
      usage: 20,
      color: '#f34b7d',
    },
    {
      name: 'C',
      usage: 15,
      color: '#555555',
    },
    {
      name: 'TypeScript',
      usage: 12,
      color: '#3178c6',
    },
    {
      name: 'JavaScript',
      usage: 12,
      color: '#f1e05a',
    },
  ];

  return (
    <>
      <div
        style={{
          paddingTop: '3rem',
          paddingBottom: '2rem',
          textAlign: 'center',
        }}
      >
        <HeadingText>Skills</HeadingText>
      </div>
      {screenWidth <= 990 ? (
        <div>
          <div
            style={{
              paddingTop: '3rem',
            }}
          >
            <LanguagesComponent languages={languages} />
          </div>

          <div
            style={{
              paddingTop: '3rem',
            }}
          >
            <MostUsedLanguage languages={languages} />
          </div>

          <div
            style={{
              paddingTop: '3rem',
              paddingBottom: '5rem',
            }}
          >
            <Skills />
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-start pt-10">
            <div className="flex flex-col w-1/2">
              <LanguagesComponent languages={languages} />
              <div
                className=""
                style={{
                  paddingTop: '3rem',
                }}
              >
                <MostUsedLanguage languages={languages} />
              </div>
            </div>

            <Separator orientation="vertical" className="mx-8" />

            <div className="w-1/2">
              <Skills />
            </div>
          </div>
        </>
      )}
    </>
  );
}
