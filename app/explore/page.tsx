import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageTransition from "@/components/page-transition"
import AnimatedLine from "@/components/animated-line"

export default function ExplorePage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <header className="mb-16">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-light tracking-wider text-neutral-800">AESTHETICA</h1>
              <nav>
                <ul className="flex space-x-8">
                  <li>
                    <Link
                      href="/"
                      className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                    >
                      Home
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                    >
                      About
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                    >
                      Contact
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-sm uppercase tracking-widest text-neutral-800 hover:text-neutral-600 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" /> Back
              to Home
            </Link>
          </div>

          <section className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight leading-tight text-neutral-800 mb-6">
              Text Collection
            </h2>
            <AnimatedLine className="mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="text-entry p-8 border border-neutral-200 relative overflow-hidden group transition-all duration-500 hover:border-neutral-300 hover:shadow-[0_4px_20px_-12px_rgba(0,0,0,0.05)]"
                >
                  <div
                    className={`${i % 3 === 0 ? "lines-pattern" : i % 3 === 1 ? "wave-pattern" : "linear-pattern"} absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700`}
                  ></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-800 transition-all duration-700 group-hover:w-full"></div>
                  <div className="relative z-10">
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-widest text-neutral-400">
                        {i % 3 === 0 ? "Reflection" : i % 3 === 1 ? "Philosophy" : "Observation"}
                      </span>
                    </div>
                    <blockquote className="text-xl font-light leading-relaxed text-neutral-800 mb-4">
                      "
                      {i % 3 === 0
                        ? "The space between thoughts is where creativity resides, waiting to be discovered."
                        : i % 3 === 1
                          ? "Elegance is not about being noticed, but about being remembered."
                          : "In the quietest moments, we hear the truths that matter most."}
                      "
                    </blockquote>
                    <div className="text-sm text-neutral-500">—</div>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Link
                        href={`/text/${i + 1}`}
                        className="text-xs uppercase tracking-widest text-neutral-800 hover:text-neutral-600 transition-colors"
                      >
                        View Full Text
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="border-t border-neutral-200 pt-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-light mb-2 tracking-wide">Submit Your Text</h3>
                  <p className="text-neutral-600 max-w-md">
                    Share your artistic expressions, philosophical musings, or quiet reflections.
                  </p>
                </div>
                <div className="mt-6 md:mt-0">
                  <Link
                    href="/upload"
                    className="inline-block px-8 py-3 border border-neutral-800 text-sm uppercase tracking-widest text-neutral-800 hover:bg-neutral-800 hover:text-white transition-all duration-300"
                  >
                    Upload Text
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  )
}

