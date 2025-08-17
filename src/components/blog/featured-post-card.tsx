import type { BlogPost } from "@/data/blog-data"
import Image from "next/image"
import Link from "next/link"

interface FeaturedPostCardProps {
  post: BlogPost
}

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <a href={`/blog/${post.slug}`} className="block">
      <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
        <div className="flex-shrink-0">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={60}
            height={60}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3  className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">{post.title}</h3>
        </div>
      </div>
    </a>
  )
}
