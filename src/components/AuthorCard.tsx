// src/components/AuthorCard.tsx
import Link from 'next/link';

interface AuthorCardProps {
  name: string;
  bio: string;
}

export default function AuthorCard({ name, bio }: AuthorCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center space-x-4 mb-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">Author</p>
      </div>
      <p className="text-gray-700 text-sm">{bio}</p>
      <a href={`/author/${name.toLowerCase().replace(/\s+/g, '-')}`} className="mt-4 inline-block text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors">
        View all posts
      </a>
    </div>
  );
}