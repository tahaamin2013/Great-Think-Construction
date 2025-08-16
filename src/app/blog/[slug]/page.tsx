import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { ReadingProgress } from "@/components/blog/reading-progress"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { featuredPost, featuredPosts, recentPosts } from "@/data/blog-data"

export async function generateStaticParams() {
  const allPosts = [featuredPost, ...featuredPosts, ...recentPosts]
  return allPosts.map((post) => ({
    slug: post.slug.replace("/blog/", ""),
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const allPosts = [featuredPost, ...featuredPosts, ...recentPosts]
  const post = allPosts.find((p) => p.slug === `/blog/${params.slug}`)

  if (!post) {
    notFound()
  }

  return (
    <>
      <ReadingProgress />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <div className="text-sm font-medium">Beyond UI</div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Main Content */}
            <article className="flex-1 max-w-4xl">
              {/* Hero Image */}
              <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Dec 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>

                <p className="text-xl text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-sm text-muted-foreground">Senior UX Designer</div>
                  </div>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <h2 id="introduction">Introduction</h2>
                <p>
                  In today's rapidly evolving business landscape, efficiency isn't just a competitive advantage—it's a
                  necessity for survival. Software as a Service (SaaS) solutions have emerged as the cornerstone of
                  modern business operations, offering unprecedented opportunities to streamline processes, reduce
                  costs, and scale operations effectively.
                </p>

                <h2 id="understanding-saas">Understanding SaaS Solutions</h2>
                <p>
                  SaaS represents a fundamental shift in how businesses access and utilize software. Unlike traditional
                  software installations, SaaS applications are hosted in the cloud and accessed through web browsers,
                  eliminating the need for complex infrastructure and maintenance overhead.
                </p>

                <h3 id="key-benefits">Key Benefits of SaaS</h3>
                <ul>
                  <li>
                    <strong>Cost Efficiency:</strong> Reduced upfront costs and predictable subscription pricing
                  </li>
                  <li>
                    <strong>Scalability:</strong> Easy scaling up or down based on business needs
                  </li>
                  <li>
                    <strong>Accessibility:</strong> Access from anywhere with an internet connection
                  </li>
                  <li>
                    <strong>Automatic Updates:</strong> Always access to the latest features and security patches
                  </li>
                </ul>

                <h2 id="implementation-strategies">Implementation Strategies</h2>
                <p>
                  Successful SaaS implementation requires careful planning and strategic thinking. Organizations must
                  evaluate their current processes, identify pain points, and select solutions that align with their
                  specific business objectives.
                </p>

                <h3 id="assessment-phase">Assessment Phase</h3>
                <p>
                  Begin by conducting a comprehensive audit of your existing systems and workflows. This assessment
                  should identify inefficiencies, redundancies, and areas where automation could provide the most
                  significant impact.
                </p>

                <h3 id="selection-criteria">Selection Criteria</h3>
                <p>
                  When evaluating SaaS solutions, consider factors such as integration capabilities, user experience,
                  security features, and vendor reliability. The right solution should complement your existing
                  technology stack while providing room for growth.
                </p>

                <h2 id="measuring-success">Measuring Success</h2>
                <p>
                  Implementing SaaS solutions is only the beginning. Establishing clear metrics and KPIs is essential
                  for measuring the impact of your investment and identifying opportunities for further optimization.
                </p>

                <h3 id="key-metrics">Key Metrics to Track</h3>
                <ul>
                  <li>Time savings in routine tasks</li>
                  <li>Reduction in operational costs</li>
                  <li>Improvement in team productivity</li>
                  <li>Enhanced customer satisfaction scores</li>
                  <li>Faster time-to-market for new initiatives</li>
                </ul>

                <h2 id="conclusion">Conclusion</h2>
                <p>
                  The journey toward business efficiency through SaaS solutions requires commitment, strategic planning,
                  and continuous optimization. By embracing these technologies and following best practices for
                  implementation, organizations can unlock new levels of productivity and position themselves for
                  sustained growth in an increasingly competitive marketplace.
                </p>
              </div>

              {/* Related Posts */}
              <div className="mt-16 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {recentPosts.slice(0, 2).map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={relatedPost.slug}
                      className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Table of Contents Sidebar */}
            <aside className="w-64 shrink-0">
              <TableOfContents />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
