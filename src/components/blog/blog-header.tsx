import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-semibold text-lg">Great think Contsruction</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Homepage
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              About us
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-gray-900 font-medium">
              Features
            </Link>
            <Link href="/blog" className="text-gray-900 font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact us
            </Link>
            <Link href="/demo" className="text-gray-700 hover:text-gray-900 font-medium">
              Demo
            </Link>
          </nav>

          {/* CTA Button */}
          <Link href="/get-started">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
