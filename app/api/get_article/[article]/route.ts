import { NextResponse } from 'next/server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(req: Request) {
  const slug = req.url?.slice(req.url?.lastIndexOf('/') + 1);

  const folder = path.join(process.cwd(), 'articles');
  const file = `${folder}/${slug}.md`;

  try {
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);

    return NextResponse.json(
      {
        data: matterResult.data,
        content: matterResult.content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error reading article:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
