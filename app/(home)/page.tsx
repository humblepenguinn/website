"use client";

import { siteConfig } from "@/config/site";

import { Projects } from "@/components/pages/home/projects";
import { HeadingText } from "@/components/common/heading-text";
import { SocialMediaIcons } from "@/components/common/social-media-icons";
import { useEffect, useState } from "react";
import { ProjectsSkeleton } from "@/components/loaders/projects-skeleton";

export default function Home() {
  const fun_facts = [
    "All of my usernames end with two n's. That is beacuse the username 'humblepenguin' was taken on most sites. Ok maybe that was not so fun",
    "I'm smart.. I think",
    "I'm funny.. I think",
    "Messi's the GOAT",
    "I'm pretty good at not being good at things (I'm not sure if that's a good thing)",
  ];

  const [fun_fact, set_fun_fact] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    set_fun_fact(fun_facts[Math.floor(Math.random() * fun_facts.length)]);
  }, []);

  return (
    <main className="py-4">
      {fun_fact !== "" ? (
        <>
          <section className="space-y-4 py-4">
            <p className="font-light">
              I am a high school student currently completing my A levels. Turns
              out I like to code and think about stuff.
            </p>
            <p className="font-light text-muted-foreground">
              Fun fact: {fun_fact}{" "}
            </p>
            <SocialMediaIcons />
          </section>
          <section className="space-y-4 py-4">
            <HeadingText>Projects</HeadingText>
            <div className="flex flex-col items-end gap-4">
              <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
                <Projects />
              </div>
              <a
                target="_blank"
                href={`${siteConfig.links.github}?tab=repositories`}
                className="text-sm underline"
              >
                See More...
              </a>
            </div>
          </section>
        </>
      ) : (
        <main className="py-4">
          <section className="space-y-4 py-4">
            <p className="font-light">
              I am a high school student currently completing my A levels. Turns
              out I like to code and think about stuff.
            </p>
            <SocialMediaIcons />
          </section>
          <section className="space-y-4 py-4">
            <HeadingText>Projects</HeadingText>
            <div className="flex flex-col items-end gap-4">
              <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
                <ProjectsSkeleton />
              </div>
              <a
                target="_blank"
                href={`${siteConfig.links.github}?tab=repositories`}
                className="text-sm underline"
              >
                See More...
              </a>
            </div>
          </section>
        </main>
      )}
    </main>
  );
}
