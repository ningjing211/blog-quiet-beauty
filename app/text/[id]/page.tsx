import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PageTransition from "@/components/page-transition"
import AnimatedLine from "@/components/animated-line"

// This would normally come from a database or API
const getTextById = (id: string) => {
  const texts = [
    {
      id: "1",
      title: "The Space Between",
      content:
        "The space between thoughts is where creativity resides, waiting to be discovered. In this liminal space, we find the essence of artistic expression—not in the words themselves, but in what remains unsaid. The negative space defines the form, just as silence defines sound. This paradox is the foundation of all aesthetic experience: what we remove is often more important than what we add. The restraint of the artist creates room for the imagination of the viewer, allowing meaning to emerge in the quiet contemplation of form and absence.",
      author: "—",
      category: "Reflection",
      date: "March 29, 2025",
    },
    {
      id: "2",
      title: "Elegance in Restraint",
      content:
        "Elegance is not about being noticed, but about being remembered. It whispers rather than shouts, suggests rather than declares. True sophistication lies in the careful curation of elements, where each word carries precise intention and nothing superfluous remains. This economy of expression creates a clarity that resonates deeply, cutting through noise to reach the essential. In our age of excess, the most revolutionary act may be simplicity—the courage to present only what matters, stripped of ornament and distraction.",
      author: "—",
      category: "Philosophy",
      date: "March 28, 2025",
    },
    {
      id: "3",
      title: "Quiet Truths",
      content:
        "In the quietest moments, we hear the truths that matter most. The world speaks in whispers that are easily drowned by the clamor of daily life, yet these subtle communications contain the wisdom we seek. Beauty reveals itself in fleeting glimpses—the play of light across a surface, the perfect arrangement of lines in space, the rhythm of words that suddenly align into meaning. These moments of recognition require attention and patience, a willingness to wait and observe without expectation. The reward is a deeper connection to the underlying patterns that unite all aesthetic experience.",
      author: "—",
      category: "Observation",
      date: "March 27, 2025",
    },
  ]

  return texts.find((text) => text.id === id) || texts[0]
}

export default function TextPage({ params }: { params: { id: string } }) {
  const text = getTextById(params.id)

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
                      href="/explore"
                      className="text-sm uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors relative group"
                    >
                      Gallery
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
                </ul>
              </nav>
            </div>
          </header>

          <div className="mb-12">
            <Link
              href="/explore"
              className="inline-flex items-center text-sm uppercase tracking-widest text-neutral-800 hover:text-neutral-600 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" /> Back
              to Collection
            </Link>
          </div>

          <article className="max-w-2xl mx-auto">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-neutral-400">{text.category}</span>
              <h2 className="text-3xl md:text-4xl font-light mt-2 mb-4 text-neutral-800">{text.title}</h2>
              <div className="text-sm text-neutral-500">{text.date}</div>
            </div>

            <AnimatedLine className="mb-12" />

            <div className="relative">
              <div className="lines-pattern absolute top-0 left-0 w-full h-32 opacity-5"></div>
              <div className="relative z-10 pt-16">
                <div className="prose prose-neutral max-w-none">
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-800 mb-8">{text.content}</p>
                  <div className="text-right text-sm text-neutral-500 mt-12">{text.author}</div>
                </div>
              </div>
            </div>

            <div className="mt-24 border-t border-neutral-200 pt-12">
              <div className="flex justify-between items-center">
                <Link
                  href={`/text/${Number.parseInt(params.id) - 1 || 3}`}
                  className="text-sm uppercase tracking-widest text-neutral-800 hover:text-neutral-600 transition-colors group"
                >
                  <span className="inline-flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    Previous
                  </span>
                </Link>
                <Link
                  href={`/text/${(Number.parseInt(params.id) % 3) + 1}`}
                  className="text-sm uppercase tracking-widest text-neutral-800 hover:text-neutral-600 transition-colors group"
                >
                  <span className="inline-flex items-center">
                    Next
                    <svg
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </PageTransition>
  )
}

