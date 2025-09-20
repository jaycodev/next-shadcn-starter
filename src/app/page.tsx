import { FileText } from 'lucide-react'
import Image from 'next/image'

import { LogoProgressive } from '@/components/logos/logo-cloud'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 gap-12 sm:px-20 overflow-x-hidden">
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8">
        <ModeToggle />
      </div>

      <div className="h-10"></div>

      <div className="flex flex-nowrap items-center justify-center gap-8 sm:gap-12">
        <Image
          className="h-16 w-16 sm:h-20 sm:w-20"
          src="/logos/next.svg"
          alt="Next.js icon"
          width={80}
          height={80}
          priority
        />

        <h6 className="text-3xl font-bold">+</h6>

        <Image
          className="h-16 w-16 sm:h-20 sm:w-20 dark:invert"
          src="/logos/shadcn.svg"
          alt="Shadcn UI icon"
          width={80}
          height={80}
          priority
        />
      </div>

      <ol className="list-inside list-decimal text-center sm:text-left font-mono text-sm sm:text-base max-w-xl mx-auto space-y-2">
        <li>
          Get started by editing{' '}
          <code className="rounded bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 font-semibold">
            app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        <Button asChild>
          <a
            href="https://github.com/jaycodev/next-shadcn-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.165c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3.003-.404c1.02.004 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.652.244 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.804 5.625-5.475 5.921.43.37.815 1.096.815 2.21v3.277c0 .32.218.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            GitHub
          </a>
        </Button>

        <Button variant="outline" asChild>
          <a
            href="https://github.com/jaycodev/next-shadcn-starter#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FileText />
            Readme
          </a>
        </Button>
      </div>

      <LogoProgressive />
    </main>
  )
}
