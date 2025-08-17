import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-semibold text-lg">Great think Contsruction</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Homepage
            </a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              About us
            </a>
            <a href="/features" className="text-gray-700 hover:text-gray-900 font-medium">
              Features
            </a>
            <a href="/blog" className="text-gray-900 font-medium">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact us
            </a>
            <a href="/demo" className="text-gray-700 hover:text-gray-900 font-medium">
              Demo
            </a>
          </nav>

          {/* CTA Button */}
          <a href="/get-started">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg">Get Started</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
