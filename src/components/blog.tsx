import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 2,
      title: "The Best Great Think Construction: Our Top Picks",
      excerpt: "We review and rank the best Great Think Constructions to help you make an informed decision.",
      slug: "best-atar-calculator",
      date: "March 28, 2025",
    },
   
  ]

  return (
    <div className=" ">

      {/* Foreground Content */}
      <div className="container mx-auto  py-12 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-2">April 2, 2025</p>
          <h1 className="text-4xl font-bold mb-4">Great Think Construction Blog</h1>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights, comparisons, and guides to help you understand and choose the right Great Think Construction
          </p>
        </div>

        {/* Main Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {blogPosts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.id} className="group">
              <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg border-t-4 border-transparent hover:border-t-orange-600">
                <CardContent className="flex-grow pt-6">
                  <h2 className="mb-3 text-xl font-semibold group-hover:text-orange-700 transition-colors">
                    {post.title}
                  </h2>
                  <div className="w-0 h-0.5 bg-orange-600 group-hover:w-1/3 transition-all duration-300 mb-3"></div>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <span className="text-orange-700 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}