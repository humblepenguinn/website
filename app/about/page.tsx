'use client';

import { siteConfig } from '@/config/site';
import { useEffect, useState } from 'react';

export default function About() {
  const [daysPassed, setDaysPassed] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date('2006-05-13');
    const timeDifference = currentDate.getTime() - targetDate.getTime();

    setDaysPassed(
      Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toLocaleString()
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex-1 px-4 max-w-screen-md w-full">
        <div className="text-4xl md:text-5xl mb-6 md:mb-12 font-bold text-center py-12">
          Hello <span className="text-4xl">&#128075;</span>
        </div>

        <div className="text-sm md:text-base">
          <p className="mb-4">
            My name is Shaharyar Ahmed, and I came into existence about{' '}
            {daysPassed} days ago (not that I&apos;m counting). Currently
            I&apos;m completing my A-levels, or maybe I&apos;m done—depends on
            when you read this.
          </p>

          <p className="mb-4">
            I taught myself how to code at a young age, and ever since then, I
            have been obsessed with computers and technology. Over the years,
            I&apos;ve immersed myself in various programming languages,
            including <code>Rust</code>, <code>Python</code>, <code>C++</code>{' '}
            and <code>Typescript</code>, building a wide array of projects that
            have honed my skills.
          </p>

          <p className="mb-4">
            What captivates me most about computer science is the intricate,
            low-level details. I&apos;m fascinated by how the CPU operates,
            memory management, and the interaction between operating systems and
            hardware. I have always been intrigued by the complexity of these
            systems and how they work together to create the software we use
            every day.
          </p>

          <p className="mb-4">
            Alongside my passion for computer science, I really enjoy playing
            video games. I have been playing games since I was a kid, and have
            always been fascinated by the technology behind them. It was truly
            remarkable to see how developers in the older days were able to
            create sophisticated games with such limited hardware.
          </p>

          <p className="mb-4">
            Currently, I have gotten interested in the theoretical aspect of
            computer science and the mathematics behind it. I plan to write a
            couple of research papers; however, it will be some time before I
            publish one. Along with that, I am also working on a few projects
            that I hope to release soon.
          </p>
        </div>

        <div
          className="text-2xl font-semibold mt-4"
          style={{
            paddingTop: '2rem',
          }}
        >
          📲 Get in touch
        </div>

        <div className="mt-4">
          <p className="mb-4">
            You can reach me via{' '}
            <a
              href={siteConfig.links.gmail}
              className="text-blue-500 hover:underline"
            >
              email
            </a>{' '}
            or if you feel that is a bit too formal, feel free to DM me on my{' '}
            <a
              href={siteConfig.links.instagram}
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>{' '}
            or{' '}
            <a
              href={siteConfig.links.discord}
              className="text-blue-500 hover:underline"
            >
              Discord
            </a>{' '}
            accounts.
          </p>
        </div>
      </div>
    </div>
  );
}
