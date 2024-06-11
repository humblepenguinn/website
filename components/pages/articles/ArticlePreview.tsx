import Link from 'next/link';

import { ArticleMetadata } from '@/types';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ArticlePreview(props: ArticleMetadata) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={`/articles/${props.slug}`}>
            <h2 className="hover:underline">{props.title}</h2>
          </Link>
        </CardTitle>
        <CardDescription>{props.subtitle}</CardDescription>
      </CardHeader>
      <CardFooter>
        <p className="text-sm">{props.date}</p>
      </CardFooter>
    </Card>
  );
}
