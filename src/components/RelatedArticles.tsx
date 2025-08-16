// src/components/RelatedArticles.tsx
import Image from 'next/image';
import Link from 'next/link';

interface RelatedArticle {
  title: string;
  slug: string;
  image: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="space-y-12">
      {articles.map((article, index) => (
        <Link href={`/blogs/${article.slug}`} key={index} className="group">
          <div className="flex space-x-3">
            <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden bg-gray-200 relative">
              <Image 
                src={article.image} 
                alt={article.title} 
                width={1200} // ✅ REQUIRED
                height={800} // ✅ REQUIRED
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium leading-snug group-hover:text-indigo-600 transition-colors">
                {article.title}
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}