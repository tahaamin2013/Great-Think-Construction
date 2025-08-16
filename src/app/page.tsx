import { FeaturedPostCard } from "@/components/blog/featured-post-card"
import { RecentPostCard } from "@/components/blog/recent-post-card"
import { featuredPost, featuredPosts, recentPosts } from "@/data/blog-data"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Ad from "@/components/Ad"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <BlogHeader /> */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <Link href={`/blog/${featuredPost.slug}`} className="relative rounded-2xl overflow-hidden mb-8">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                width={800}
                height={400}
                className="w-full h-[400px]  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 inline-block ml-3 mb-4 shadow-lg">
                  <span className="text-white text-sm font-medium">Business</span>
                </div>
                <div className="bg-black/5  0 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-2xl">
                  <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                    {featuredPost.title}
                  </h1>
                </div>
              </div>
            </div>
            </Link>

            {/* Recent Posts Section */}
            <div className="mb-8 mt-9">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
                <Button variant="outline" className="text-sm bg-transparent">
                  All Posts
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recentPosts.map((post) => (
                  <RecentPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Other featured posts</h3>
              <div className="space-y-2">
                {featuredPosts.map((post) => (
                  <FeaturedPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
            <Ad />
          </div>
        </div>
      </main>
    </div>
  )
}



// import { blogPosts } from "@/components/data";
// import { Card } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";

// export const metadata = {
//   title: "India Pakistan War 2025 – Latest News on Pakistan vs India ",
//   alternates: {
//     canonical: "https://www.pakindiawar.com",
//   },
//   description:
//     "Stay updated on the Pak India War with the latest news on the Pakistan vs India War. Pakistan India Jung",
//   keywords: [ 
//     "pak india war",
//     "pakistan vs india war",
//     "india pakistan",
//     "india pakistan news",
//     "war of india and pakistan 2025",
//     "war of india and pakistan",
//     "war pakistan",
//     "india and pakistan news",
//     "india and pakistan war",
//     "india and pakistan jang",
//     "pk vs india war",
//     "pk vs india war 2025",
//     "pk vs india war today",
//     "india vs pak war today",
//     "War of india and pakistan 2025",
//     "India Pakistan war News",
//     "India-Pakistan 2025",
//     "India-Pakistan News",
//     "India-Pakistan war",
//     "India Pakistan map",
//     "India pakistan war 2025",
//     "Indian Army",
//     "Pakistan Army",
//   ],
//   openGraph: {
//     title: "India Pakistan War 2025 – Latest News on Pakistan vs India War",
//     description:
//       "Stay updated with the latest news on India Pakistan War 2025. Get real-time updates and news on the ongoing conflict.",
//     url: "https://www.pakindiawar.com",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// function HoverLink({
//   href,
//   children,
//   className = "",
// }: {
//   href: string;
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <Link
//       href={href}
//       className={`${className} bg-gradient-to-r from-black to-black bg-[length:0px_3px]
//         hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500`}
//     >
//       {children}
//     </Link>
//   );
// }

// export default function Home() {
//   const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
//   const topPosts = sortedPosts.slice(0, 5); // Get the first 5 posts
//   const otherPosts = sortedPosts.slice(5); // Get the remaining posts

//   return (
//     <section className="hero-post-area py-6 md:py-10 lg:py-16 mt-10">
//       <div className="text-center mb-6">
//         <h1 className="font-bold text-3xl">
//        Great Think Construction - Latest News about Construction
//         </h1>
//               <p className="text-sm w-fit md:w-[1000px] mx-auto">
//                 Great think construction is a platform that provides the latest news and updates on modern construction techniques, sustainable building practices, and innovative technologies in the construction industry. Stay informed about the future of construction with our expert insights and articles.

//         </p>
//       </div>

//       <div className="container mb-[100px] mx-auto px-4">
//         <div className="post-area-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
//           {/* Left Column */}
//           <div className="post-area-right-2 md:col-span-1 lg:col-span-3">
//             <div className="post-card-wrap space-y-6">
//               {topPosts.slice(1, 3).map((post) => (
//                 <div className="post-card" key={post.id}>
//                   <div className="post-thumb rounded-md overflow-hidden aspect-[20/15]">
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       width={400}
//                       height={400}
//                       className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
//                     />
//                   </div>
//                   <div className="post-content mt-3">
//                     <h2 className="title text-base sm:text-lg font-bold mt-2">
//                       <HoverLink href={`/blogs/${post.slug}`}>
//                         {post.title}
//                       </HoverLink>
//                     </h2>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Center Carousel */}
//           <div className="post-carousel-wrap md:col-span-2 lg:col-span-6 relative order-first md:order-none mb-6 md:mb-0 h-full">
//             <div className="post-carousel h-full">
//               <div className="swiper-wrapper h-full">
//                 <div className="swiper-slide h-full">
//                   <div className="post-carousel-card card-2 text-center h-full rounded-xl overflow-hidden relative">
//                     <div className="post-carousel-thumb overflow-hidden relative h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
//                       <Image
//                         src={topPosts[0].image}
//                         alt={topPosts[0].title}
//                         width={1200}
//                         height={800}
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                         className="object-cover object-center w-full h-full transition-transform hover:scale-105 duration-300"
//                         style={{ objectFit: "cover", objectPosition: "center" }}
//                         priority
//                       />
//                     </div>
//                     <div className="post-carousel-content absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
//                       <span className="card-btn bg-red-500 inline-block px-3 py-1 text-xs font-semibold text-white rounded-sm">
//                         WAR
//                       </span>
//                       <h2 className="title text-xl sm:text-2xl md:text-3xl font-bold mt-2 md:mt-3">
//                         <HoverLink href={`/blogs/${topPosts[0].slug}`} className="text-white">
//                           {topPosts[0].title}
//                         </HoverLink>
//                       </h2>
//                       <ul className="post-list flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-2 md:mt-3 text-xs sm:text-sm">
//                         <li className="author">
//                           by <span><p className="font-medium">Amin Ahsan</p></span>
//                         </li>
//                         <li className="date">{topPosts[0].date}</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="post-area-right-2 md:col-span-1 lg:col-span-3">
//             <div className="post-card-wrap space-y-6">
//               {topPosts.slice(3, 5).map((post) => (
//                 <div className="post-card" key={post.id}>
//                   <div className="post-thumb rounded-md overflow-hidden aspect-[20/15]">
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       width={400}
//                       height={400}
//                       className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
//                     />
//                   </div>
//                   <div className="post-content mt-3">
//                     <h2 className="title text-base sm:text-lg font-bold mt-2">
//                       <HoverLink href={`/blogs/${post.slug}`}>
//                         {post.title}
//                       </HoverLink>
//                     </h2>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Other Blogs Section */}
//       <div className="mt-20 px-[30px]">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {otherPosts.map((post) => (
//             <Card key={post.id} className="p-2 hover:shadow-lg border-t-4 border-transparent hover:border-green-600 transition-all">
//               <Image
//                 src={post.image}
//                 alt={post.title}
//                 width={400}
//                 height={300}
//                 className="rounded-md w-full h-40 object-cover mb-2"
//               />
//               <div className="p-2 mt-[-30px]">
//                 <h2 className="text-md font-semibold text-green-700 mb-1">
//                   <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
//                 </h2>
//                 <div className="text-sm">
//                   <span className="font-medium">{post.date}</span>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
