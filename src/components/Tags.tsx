// src/components/Tags.tsx
import Link from 'next/link';

interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div>
      <h3 className="font-medium text-gray-700 mb-3">Tagged:</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <a 
            href={`/tag/${tag.toLowerCase()}`} 
            key={index}
            className="px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full text-sm transition-colors"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}