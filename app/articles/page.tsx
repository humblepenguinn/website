import { HeadingText } from "@/components/common/heading-text";
import ArticlePreview from "@/components/pages/articles/ArticlePreview";
import getArticleMetadata from "@/components/pages/articles/getArticleMetaData";

import { GrDocumentMissing } from "react-icons/gr";

export default async function Articles() {
  const articleMetadata = getArticleMetadata();
  const articlePreviews = articleMetadata.map((article) => (
    <ArticlePreview key={article.slug} {...article} />
  ));

  if (articlePreviews.length === 0) {
    articlePreviews.push(
      <div className="flex items-center justify-center">
        <div className="text-center">
          <GrDocumentMissing className="text-5xl mb-4" />
          <p className="text-lg">
            Oops! No articles available at the moment. They are currently under
            development. 🚧 Please come back another time.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center py-8">
      <div className="flex flex-col items-center space-y-4">
        <HeadingText subtext="">Articles</HeadingText>
        <div className="space-y-2"> {articlePreviews}</div>
      </div>
    </main>
  );
}
