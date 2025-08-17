import type { BlogPost } from "@/data/blog-data"
import Image from "next/image"
import Link from "next/link"

interface RecentPostCardProps {
  post: BlogPost
}

export function RecentPostCard({ post }: RecentPostCardProps) {
  return (
    <a href={`/blog/${post.slug}`} className="block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="aspect-video relative">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </a>
  )
}
