
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function ProductUpdatesSection() {
  return (
    <section className="w-full my-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground mb-8">Latest Articles</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main featured article */}
        <div className="lg:col-span-2">
          <Card className="relative overflow-hidden ">
              <Image
                src="/top-10-modern-construction.jfif"
                alt="Featured Article"
                width={800}
                height={400}
                className="w-full h-[200px] object-cover"
              />

            {/* Content overlay */}
            <div className="bottom-0 left-0 right-0 bg-white text-black p-6">
            
              <h2 className="text-2xl font-bold mb-3">Meet Co-Creator: Your New Creative Partner</h2>
              <p className="text-gray-600 mb-4">
                Say hello to Co-Creator. Your new creative partner for turning one video into prompts, clips, thumbnails
                and other endless content assets.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">R</span>
                </div>
                <span className="text-sm font-medium">Riverside team</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar updates */}
        <div className="space-y-6">
          <div className="border-b border-border pb-6">
            <h3 className="text-xl font-bold mb-2">Speed boosts and performance updates</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>May 13, 2024</span>
            </div>
          </div>

          <div className="border-b border-border pb-6">
            <h3 className="text-xl font-bold mb-2">Cut Your Editing Time with Riversides New Editor</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>Mar 5, 2024</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Riverside is now SOC 2 Type 2 Compliant!</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>Dec 26, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
