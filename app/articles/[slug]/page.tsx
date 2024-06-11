'use client';

import Markdown from 'react-markdown';

import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useEffect, useState } from 'react';
import { ArticleMetadata } from '@/types';

import rehypeHighlight from 'rehype-highlight';
import CopyButton from '@/components/pages/articles/CopyButton';
import 'highlight.js/styles/atom-one-dark.min.css';

import Loading from '@/components/common/Loading';

import { cn } from '@/lib/utils';
import { PiTerminalThin } from 'react-icons/pi';
import { colors, icons } from '@/lib/icons';

import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Article(props: any) {
  const slug = props.params.slug;

  const [data, setData] = useState<ArticleMetadata>();
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticleData = async () => {
      try {
        const res = await fetch(`/api/get_article/${slug}`);
        const { data, content } = await res.json();

        setData(data);
        setContent(content);
      } catch (error) {
        return (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Uh oh! Something went wrong</AlertTitle>
            <AlertDescription>
              There was an error fetching the article
            </AlertDescription>
          </Alert>
        );
      } finally {
        setLoading(false);
      }
    };

    getArticleData();
  }, [slug]);

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return (
      <div>
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Uh oh! Something went wrong</AlertTitle>
          <AlertDescription>Article data not available</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-slate-200 mt-2">{data.date}</p>
      </div>
      <Markdown
        className={cn('dark:text-gray-200 space-y-8', 'sm:p-10')}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => {
            return <h1 {...props} className="text-3xl font-bold my-6" />;
          },
          h2: ({ node, ...props }) => {
            return <h2 {...props} className="text-2xl font-bold my-5" />;
          },
          h3: ({ node, ...props }) => {
            return <h3 {...props} className="text-xl font-bold my-4" />;
          },
          h4: ({ node, ...props }) => {
            return <h4 {...props} className="text-lg font-bold my-3" />;
          },

          a: ({ node, ...props }) => {
            return (
              <a {...props} className="text-blue-500 hover:underline">
                {props.children}
              </a>
            );
          },

          table: ({ node, ...props }) => {
            return (
              <div className="overflow-x-auto">
                <table {...props} className="table-auto w-full"></table>
              </div>
            );
          },

          th: ({ node, ...props }) => {
            return (
              <th {...props} className="p-2 text-left border">
                {props.children}
              </th>
            );
          },

          td: ({ node, ...props }) => {
            return (
              <td {...props} className="p-2 text-left border">
                {props.children}
              </td>
            );
          },

          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const language: string = match ? match[1] : 'plaintext';
            let color: string = '#FFFFFF';

            const id = (Math.floor(Math.random() * 100) + 1).toString();
            if (match?.length) {
              let Icon = PiTerminalThin;
              const isMatch = icons.hasOwnProperty(match[1]);

              if (isMatch) {
                Icon = icons[match[1] as keyof typeof icons];
                color = colors[match[1] as keyof typeof colors];
              }

              return (
                <div className=" bg-graident-dark text-gray-300 border-[0.5px] rounded-md border-zinc-500">
                  <div className="flex items-center justify-between px-5 py-2 border-b-[0.5px] border-zinc-500">
                    <div className="flex items-center gap-2">
                      <Icon color={color} />
                      <p className="text-sm text-gray-400">{language}</p>
                    </div>
                    <CopyButton id={id} />
                  </div>
                  <div className="overflow-x-auto w-full">
                    <div className="p-5" id={id}>
                      {children}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <code
                  className="break-words bg-zinc-700 px-1 rounded-sm"
                  {...props}
                >
                  {children}
                </code>
              );
            }
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
