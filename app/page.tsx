import Link from "next/link"
import { ArrowRight } from "lucide-react"
import TextGallery from "@/components/text-gallery"
import PageTransition from "@/components/page-transition"
import AnimatedLine from "@/components/animated-line"

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <header className="mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              <h1 className="text-2xl font-light tracking-wider text-neutral-800">AESTHETICA</h1>
              <nav className="w-full md:w-auto">
                <ul className="flex flex-row md:flex-row w-full space-y-0 md:space-y-0 md:space-x-8 items-center">
                  <li className="flex-1 md:flex-auto text-center">
                    <Link
                      href="#"
                      className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group inline-block"
                    >
                      Gallery
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li className="flex-1 md:flex-auto text-center">
                    <Link
                      href="#"
                      className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group inline-block"
                    >
                      About
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li className="flex-1 md:flex-auto text-center">
                    <Link
                      href="#"
                      className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group inline-block"
                    >
                      Contact
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div>
                <h2 className="text-5xl md:text-7xl font-extralight leading-tight text-neutral-800 mb-8">
                  Quiet
                  <br />
                  Beauty in
                  <br />
                  Words
                </h2>
                <AnimatedLine className="mb-8" />
                <p className="text-neutral-600 max-w-md leading-relaxed">
                  A minimalist space for artistic expression through text. Elegance in simplicity, sophistication in
                  restraint.
                </p>
                <div className="mt-8">
                  <Link
                    href="/explore"
                    className="inline-flex items-center text-sm uppercase tracking-widest text-neutral-800 hover:text-neutral-600 transition-colors group"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="lines-pattern absolute inset-0 opacity-20"></div>
                <div className="relative z-10">
                  <TextGallery />
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="featured-text p-8 border border-neutral-200 relative overflow-hidden group transition-all duration-500 hover:border-neutral-300">
              <div className="wave-pattern absolute bottom-0 left-0 right-0 h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-800 transition-all duration-700 group-hover:w-full"></div>
              <h3 className="text-xl font-light mb-4 tracking-wide">Essential Thoughts</h3>
              <p className="text-neutral-600 leading-relaxed">
                The beauty of simplicity lies not in what is added, but in what is left untouched.
              </p>
            </div>

            <div className="featured-text p-8 border border-neutral-200 relative overflow-hidden group transition-all duration-500 hover:border-neutral-300">
              <div className="linear-pattern absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-800 transition-all duration-700 group-hover:w-full"></div>
              <h3 className="text-xl font-light mb-4 tracking-wide">Quiet Reflections</h3>
              <p className="text-neutral-600 leading-relaxed">
                In the silence between words, we find the meaning that transcends language itself.
              </p>
            </div>

            <div className="featured-text p-8 border border-neutral-200 relative overflow-hidden group transition-all duration-500 hover:border-neutral-300">
              <div className="dots-pattern absolute bottom-0 right-0 w-40 h-40 opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-800 transition-all duration-700 group-hover:w-full"></div>
              <h3 className="text-xl font-light mb-4 tracking-wide">Elegant Expressions</h3>
              <p className="text-neutral-600 leading-relaxed">
                True sophistication emerges when complexity gives way to clarity.
              </p>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  )
}

