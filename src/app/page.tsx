import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://www.svgrepo.com/download/1699/web-development.svg"
          alt="Next.js logo"
          width={60}
          height={10}
          priority
        />
        <p className="text-lg text-center lg:text-left font-[family-name:var(--font-geist-mono)]">
          Derek Russell
        </p>
        <p className="text-lg text-center lg:text-left font-[family-name:var(--font-geist-mono)]">
          Web Developer, Cyber Security Enthusiast
        </p>
        <p className="text-lg lg:text-left font-[family-name:var(--font-geist-mono)]">
          Starting out, I was really only interested in cyber security,
          but eventually I became incredibly passionate about programming.
          My primary interest currently is with low level languages like
          Rust and C, though I have been dipping my toes into Web
          Development as well.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/drkrssll"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"My Github ->"}
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {"Download My Resume ->"}
        </a>
      </footer>
    </div>
  );
}
