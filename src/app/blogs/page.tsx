// app/blog/page.tsx

import BlogPage from '@/components/blog'
import SeoHead from '@/components/SeoHead'
import React from 'react'

// ✅ This is the correct way to add metadata
export const metadata = {
  title: 'ATAR Calculator Blogs | Learn About ATAR Calculators',
  alternates: {
  canonical: 'https://www.calculateatar.com/blogs',
  },
  description:
    'Explore our ATAR Calculator Blogs to learn everything about ATAR estimators, tips, and insights to help you succeed in your academic journey.',
}

const Page = () => {
  return (
    <div>
      
        <SeoHead/>
      <BlogPage />
    </div>
  )
}

export default Page