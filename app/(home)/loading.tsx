import { siteConfig } from '@/config/site';

import { HeadingText } from '@/components/common/heading-text';
import { SocialMediaIcons } from '@/components/common/social-media-icons';
import { ProjectsSkeleton } from '@/components/loaders/projects-skeleton';

export default function Home() {
  return (
    <main className="py-4">
      <section className="space-y-4 py-4">
        <p className="font-light">
          Currently an undergrad student at IBA completing my bachelor&apos;s in
          Computer Science. Turns out, I like to code and think about stuff
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
  );
}
