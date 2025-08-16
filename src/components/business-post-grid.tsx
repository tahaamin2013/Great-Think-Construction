// export default function BusinessPostGrid() {
//   // Sample data for business posts with Unsplash images
//   const businessPosts = [
//     {
//       id: 1,
//       title: 'Business Post',
//       postCount: 3,
//       image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
//       alt: 'Two business people discussing at a laptop'
//     },
//     {
//       id: 2,
//       title: 'Business Post',
//       postCount: 3,
//       image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
//       alt: 'People with orange car by the lake'
//     },
//     {
//       id: 3,
//       title: 'Business Post',
//       postCount: 3,
//       image: 'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80',
//       alt: 'Person with hat against purple background'
//     },
//     {
//       id: 4,
//       title: 'Business Post',
//       postCount: 3,
//       image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
//       alt: 'Desk with notebook and glasses'
//     }
//   ]

//   return (
//     <div className="p-4 md:p-8 mx-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {businessPosts.map((post) => (
//           <div key={post.id} className="group">
//             <BusinessPostCard post={post} />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // Types for our props
// type BusinessPost = {
//   id: number
//   title: string
//   postCount: number
//   image: string
//   alt: string
// }

// type BusinessPostCardProps = {
//   post: BusinessPost
// }

// function BusinessPostCard({ post }: BusinessPostCardProps) {
//   return (
//     <div className="relative overflow-hidden aspect-square rounded-lg shadow-lg group">
//       {/* Base overlay that darkens on hover */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 
//         transition-opacity duration-700 ease-in-out opacity-60 group-hover:opacity-90"></div>
      
//       {/* Colored overlay that appears on hover */}
//       <div className="absolute inset-0 bg-gradient-to-br from-green-500/50 to-orange-600/50 z-20 
//         transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-70"></div>
      
//       {/* Image with parallax effect */}
//       <img 
//         src={post.image} 
//         alt={post.alt}
//         className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-100 group-hover:scale-110"
//       />
      
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-30 pointer-events-none">
//         <div className="absolute -top-16 -left-16 w-32 h-32 border-8 border-white/20 rounded-full 
//           transition-all duration-1000 ease-in-out group-hover:translate-x-8 group-hover:translate-y-8"></div>
//         <div className="absolute -bottom-16 -right-16 w-32 h-32 border-8 border-white/20 rounded-full 
//           transition-all duration-1000 ease-in-out group-hover:translate-x-8 group-hover:translate-y-8"></div>
//       </div>
      
//       {/* Content with slide-up effect */}
//       <div className="absolute inset-x-0 bottom-0 p-6 z-40 transition-all duration-700 ease-in-out 
//         translate-y-8 opacity-80 group-hover:translate-y-0 group-hover:opacity-100">
        
//         {/* Post count badge */}
//         <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium 
//           text-white mb-3 transition-all duration-500 ease-in-out translate-y-4 opacity-0 
//           group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-100">
//           {post.postCount} Post
//         </div>
        
//         {/* Title with staggered animation */}
//         <h3 className="text-2xl font-bold text-white transition-all duration-500 ease-in-out 
//           translate-y-4 group-hover:translate-y-0 group-hover:delay-200">
//           {post.title}
//         </h3>
        
//         {/* Button with delayed appearance */}
//         <button className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/30 
//           text-white text-sm rounded-md transform transition-all duration-500 ease-in-out 
//           translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-300
//           hover:bg-white/20">
//           See All Posts
//         </button>
//       </div>
//     </div>
//   )
// }
import React from 'react'

const b = () => {
  return (
    <div>
      
    </div>
  )
}

export default b
