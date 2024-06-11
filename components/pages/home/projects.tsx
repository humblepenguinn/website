'use client';

import { ExternalLink } from 'lucide-react';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { projects } from './projects_list';
import { BsTerminal } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { SiHiveBlockchain } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoGameController } from 'react-icons/io5';

export async function Projects() {
  const { theme } = useTheme();

  return (
    <>
      {projects.map((project) => (
        <Card
          key={project.repo}
          className="flex flex-col justify-between"
          onMouseEnter={() => {
            document.body.style.cursor = 'pointer';
          }}
          onMouseLeave={() => {
            document.body.style.cursor = 'default';
          }}
          onClick={() => {
            window.open(project.link, '_blank');
          }}
        >
          <CardHeader>
            <div className="flex justify-between">
              <a
                target="_blank"
                href={project.link}
                rel="noopener noreferrer"
                aria-label={project.repo}
              >
                <CardTitle className="text-base hover:underline">
                  {project.repo}
                </CardTitle>
              </a>
              <a
                target="_blank"
                href={project.website || project.link}
                rel="noopener noreferrer"
                aria-label="Visit the project's live url/repo"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
            <CardDescription className="line-clamp-2 text-sm font-light">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <div className="flex gap-1">
              {theme == 'light' ? (
                <>
                  {project.icons.map((icon) => {
                    const Icon = icon.icon;
                    if (
                      Icon == BsTerminal ||
                      Icon == SiHiveBlockchain ||
                      Icon == TbBrandNextjs ||
                      Icon == IoGameController
                    ) {
                      return (
                        <Icon key={0} className="h-4 w-4" color="#000000" />
                      );
                    } else {
                      return (
                        <Icon key={0} className="h-4 w-4" color={icon.color} />
                      );
                    }
                  })}
                </>
              ) : (
                <>
                  {project.icons.map((icon) => {
                    const Icon = icon.icon;

                    return (
                      <Icon key={0} className="h-4 w-4" color={icon.color} />
                    );
                  })}
                </>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
