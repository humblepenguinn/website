"use client";

import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export default function About() {
  const [daysPassed, setDaysPassed] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date("2006-05-13");
    const timeDifference = currentDate.getTime() - targetDate.getTime();

    setDaysPassed(
      Math.floor(timeDifference / (1000 * 60 * 60 * 24)).toLocaleString()
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-left w-1/2">
        <div className="text-5xl mb-12 font-bold">
          Hello <span className="text-4xl">&#128075;</span>
        </div>

        <div className="mb-4">
          <p className="mb-4">
            I came into existence about {daysPassed} days ago (not that I&apos;m
            counting). Currently completing my A-levels, or maybe I&apos;m done—depends on
            when you find this.
          </p>

          <p className="mb-4">
            At some point early in my life, I was introduced to computers, and
            ever since that encounter, I have been obsessed with them.
            Initially, just for games and web surfing.
          </p>

          <p className="mb-4">
            In my humble opinion (
            <i>
              you see what I did there? My username is humblepenguin, so I used
              the word humble. Get it now?
            </i>
            ), the greatest game of all time is
            <strong> Red Dead Redemption 2</strong>. Gameplay aside, the
            engineering is mind-blowing.
          </p>

          <p className="mb-4">
            But let&apos;s steer back on track. So long story short I decided to
            learn how to code. I started off with <code>C++</code> which was
            perhaps the worst choice an 11 year old could have made. For a long
            time, I thought I was perhaps a bit <i>special</i> since I could not
            understand anything. (<i>Special here means stupid in case you were not aware</i>)
          </p>

          <p className="mb-4">
            <i>
              <b>Fun fact:</b> I still don&apos;t understand anything. Im just
              joking. I think so at least
            </i>
          </p>

          <p className="mb-4">
            After <code>C++</code>, I moved on to other languages such as{" "}
            <code>Python</code>, <code>JavaScript</code>,{" "}
            <code>TypeScript</code>, <code>Rust</code>, and dabbled
            in a few more like <code>Go</code>, <code>C#</code>,{" "}
            <code>Java</code>, <code>C</code> and a few others.{" "}
            <i>So maybe I was not special</i>
          </p>

          <p className="mb-4">
            The aspects of computer science that interest me the most are the
            low-level nitty-gritty stuff and things where my love for
            mathematical intuition comes in handy.
          </p>

          <p className="mb-4">
            So here we are now. Currently, I have gotten interested in the
            theoretical aspect of computer science and the mathematics behind
            it. I plan to write a couple of research papers; however, it will be
            some time before I publish one. Along with that, I am also working on a few projects that I hope to release soon.
          </p>
        </div>

        <div
          className="text-2xl font-semibold mt-4"
          style={{
            paddingTop: "2rem",
          }}
        >
          📲 Get in touch
        </div>

        <div className="mt-4">
          <p className="">
            You can reach me via{" "}
            <a
              href={siteConfig.links.gmail}
              className="text-blue-500 hover:underline"
            >
              email
            </a>{" "}
            or if you feel that is a bit too formal, feel free to DM me on my{" "}
            <a
              href={siteConfig.links.instagram}
              className="text-blue-500 hover:underline"
            >
              Instagram
            </a>{" "}
            or{" "}
            <a
              href={siteConfig.links.discord}
              className="text-blue-500 hover:underline"
            >
              Discord
            </a>{" "}
            accounts.
          </p>
        </div>
      </div>
    </div>
  );
}
