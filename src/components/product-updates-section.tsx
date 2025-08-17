import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { recentPosts } from "@/data/blog-data"

export function ProductUpdatesSection() {
  const latestPosts = recentPosts.slice(0, 4)
  const [featuredPost, ...sidebarPosts] = latestPosts

  return (
    <section className="w-full my-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground mb-8">Latest Articles</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main featured article */}
        <div className="lg:col-span-2">
          <Link href={featuredPost.slug} className="block hover:opacity-90 transition-opacity">
            <Card className="relative overflow-hidden ">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                width={800}
                height={400}
                className="w-full h-[200px] object-cover"
              />

              {/* Content overlay */}
              <div className="bottom-0 left-0 right-0 bg-white text-black p-6">
                <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{featuredPost.author.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-medium">{featuredPost.author}</span>
                  <span className="text-sm text-gray-500">• {featuredPost.readTime}</span>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Sidebar updates */}
        <div className="space-y-2 mb-6">
          {sidebarPosts.map((post, index) => (
            <Link key={post.id} href={post.slug} className="block hover:opacity-90 transition-opacity">
              <div className={index < sidebarPosts.length - 1 ? "border-b border-border pb-6" : ""}>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-muted rounded-sm text-xs">{post.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
