"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import { TextBoxAd } from "@/components/Google ads/TextboxAd"

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
      setProgress(scrollPercent)
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress)
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-[60]">
      <div className="h-full bg-emerald-500 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}

interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  items: TableOfContentsItem[]
}

function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [items])

  const scrollToSection = (id: string) => {
    console.log("[v0] Scrolling to section:", id)
    const element = document.getElementById(id)
    if (element) {
      console.log("[v0] Element found:", element)
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else {
      console.log("[v0] Element not found for id:", id)
    }
  }

  return (
   <>
    <nav className="space-y-1 p-4 bg-muted/30 rounded-lg border">
      <h3 className="font-semibold text-sm text-foreground mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left text-sm transition-all duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 py-1 px-2 rounded hover:bg-muted/50 ${
                activeId === item.id
                  ? "text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/50"
                  : "text-muted-foreground"
              } ${item.level === 3 ? "pl-6" : ""}`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    <TextBoxAd />
    
    </>
  )
}

export default function SampleBlogPage() {
  const tableOfContents = [
    { id: "introduction", title: "Introduction", level: 2 },
    { id: "understanding-saas", title: "Understanding SaaS Solutions", level: 2 },
    { id: "key-benefits", title: "Key Benefits for Business Efficiency", level: 2 },
    { id: "implementation-strategies", title: "Implementation Strategies", level: 2 },
    { id: "measuring-success", title: "Measuring Success", level: 2 },
    { id: "future-trends", title: "Future Trends", level: 2 },
    { id: "conclusion", title: "Conclusion", level: 2 },
  ]

  return (
    <>
      <ReadingProgress />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="ml-auto">
              <Link href="/" className="font-bold text-xl">
                Great think Contsruction
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Hero Image */}
              <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                  src="/best-construction-materials-2025.jfif"
                  alt="Modern office workspace"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    Business
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>December 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  Unlocking Business Efficiency with SaaS Solutions
                </h1>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Discover how modern SaaS solutions can transform your business operations, streamline workflows, and
                  drive unprecedented growth in todays competitive landscape.
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Jennifer Taylor</p>
                    <p className="text-sm text-muted-foreground">Senior Business Analyst</p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none dark:prose-invert prose-emerald">
                <h2
                  id="introduction"
                  className="scroll-mt-24 text-2xl font-bold text-foreground mb-4 border-b border-border pb-2"
                >
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In todays rapidly evolving business landscape, organizations are constantly seeking ways to optimize
                  their operations and stay ahead of the competition. Software as a Service (SaaS) solutions have
                  emerged as a game-changing technology that enables businesses to streamline processes, reduce costs,
                  and enhance productivity like never before.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  The shift towards cloud-based solutions represents more than just a technological upgrade—its a
                  fundamental transformation in how businesses operate, collaborate, and scale. From small startups to
                  enterprise-level corporations, SaaS platforms are revolutionizing the way we work.
                </p>

                <h2
                  id="understanding-saas"
                  className="scroll-mt-24 text-2xl font-bold text-foreground mb-4 border-b border-border pb-2"
                >
                  Understanding SaaS Solutions
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Software as a Service (SaaS) is a cloud computing model where software applications are delivered over
                  the internet on a subscription basis. Unlike traditional software that requires installation and
                  maintenance on individual computers, SaaS applications are hosted in the cloud and accessed through
                  web browsers.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">This model offers several advantages:</p>

                <ul className="space-y-2 mb-8 ml-6">
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Accessibility:</strong> Access your tools from anywhere with an
                    internet connection
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Scalability:</strong> Easily scale up or down based on your
                    business needs
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Cost-effectiveness:</strong> Reduce upfront costs and ongoing
                    maintenance expenses
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Automatic updates:</strong> Always have access to the latest
                    features and security patches
                  </li>
                </ul>

                <h2
                  id="key-benefits"
                  className="scroll-mt-24 text-2xl font-bold text-foreground mb-4 border-b border-border pb-2"
                >
                  Key Benefits for Business Efficiency
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The implementation of SaaS solutions can dramatically improve business efficiency across multiple
                  dimensions:
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-8">Streamlined Workflows</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  SaaS platforms often come with built-in workflow automation capabilities that eliminate manual,
                  repetitive tasks. This allows your team to focus on high-value activities that drive business growth.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Enhanced Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cloud-based solutions enable real-time collaboration among team members, regardless of their physical
                  location. This is particularly valuable in todays remote and hybrid work environments.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Data-Driven Decision Making</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Most SaaS platforms include robust analytics and reporting features that provide valuable insights
                  into your business operations, helping you make informed decisions based on real data.
                </p>

                <h2
                  id="implementation-strategies"
                  className="scroll-mt-24 text-2xl font-bold text-foreground mb-4 border-b border-border pb-2"
                >
                  Implementation Strategies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Successfully implementing SaaS solutions requires careful planning and execution. Here are key
                  strategies to ensure a smooth transition:
                </p>

                <ol className="space-y-3 mb-8 ml-6 list-decimal">
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Assess your current needs:</strong> Identify pain points and
                    areas for improvement
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Research solutions:</strong> Compare different platforms and
                    their features
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Plan the migration:</strong> Develop a comprehensive
                    implementation timeline
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Train your team:</strong> Ensure all users are comfortable with
                    the new system
                  </li>
                  <li className="text-muted-foreground">
                    <strong className="text-foreground">Monitor and optimize:</strong> Continuously evaluate performance
                    and make adjustments
                  </li>
                </ol>

                <h2
                  id="measuring-success"
                  className="scroll-mt-24 text-2xl font-bold text-foreground mb-4 border-b border-border pb-2"
                >
                  Measuring Success
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To ensure your SaaS implementation is delivering the expected benefits, its important to establish
                  key performance indicators (KPIs) and regularly monitor progress. Common metrics include:
                </p>

                <ul className="space-y-2 mb-8 ml-6">
                  <li className="text-muted-foreground">Time savings in daily operations</li>
                  <li className="text-muted-foreground">Reduction in operational costs</li>
                  <li className="text-muted-foreground">Improvement in team productivity</li>
                  <li className="text-muted-foreground">Enhanced customer satisfaction scores</li>
                  <li className="text-muted-foreground">Faster time-to-market for new products or services</li>
                </ul>

                <h2
                  id="future-trends"
                  className="scroll-mt-24 text-2xl font-bold text-foreground mb-4 border-b border-border pb-2"
                >
                  Future Trends
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The SaaS industry continues to evolve rapidly, with emerging trends that will shape the future of
                  business operations:
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Artificial Intelligence and Machine Learning integration will become more prevalent, offering
                  predictive analytics and automated decision-making capabilities. Additionally, industry-specific SaaS
                  solutions will continue to emerge, providing more tailored functionality for specialized business
                  needs.
                </p>

                <h2
                  id="conclusion"
                  className="scroll-mt-24 text-2xl font-bold text-foreground mb-4 border-b border-border pb-2"
                >
                  Conclusion
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SaaS solutions represent a powerful opportunity for businesses to unlock new levels of efficiency and
                  competitiveness. By carefully selecting and implementing the right platforms, organizations can
                  streamline operations, reduce costs, and position themselves for sustainable growth in the digital
                  age.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  The key to success lies in understanding your specific business needs, choosing solutions that align
                  with your goals, and ensuring proper implementation and adoption across your organization.
                </p>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
