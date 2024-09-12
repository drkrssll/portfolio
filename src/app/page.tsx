'use client';

import './styles.css'
import React, { useState } from 'react';
import Image from 'next/image';
import TypeWriterEffect from './TypeWriterEffect';

export default function Home() {
  const [typedText, setTypedText] = useState('');

  const bioText = `Starting out, I was really only interested in cyber security,
    but eventually I became incredibly passionate about programming.
    My primary interest currently is with low level languages like
    Rust and C, though I have been dipping my toes into Web
    Development as well.`

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-mono)]">
      <main className="mt-56 flex flex-grow flex-col max-w-2xl w-full space-y-8 text-center">
        <Image
          className="dark:invert"
          src="https://www.svgrepo.com/download/1699/web-development.svg"
          alt="logo"
          width={60}
          height={60}
          priority
        />
        <h1 className="text-2xl text-left font-bold font-[family-name:var(--font-geist-mono)]">
          Derek Russell
        </h1>
        <h2 className="text-xl text-left font-[family-name:var(--font-geist-mono)]">
          Web Developer, Cyber Security Enthusiast
        </h2>
        <div className="min-h-[200px] flex flex-col justify-between">
          <TypeWriterEffect
            text={bioText}
            speed={30}
            onComplete={setTypedText}
          />
          <div className={`transition-opacity duration-500 ${typedText.length === bioText.length ? 'opacity-100' : 'opacity-0'}`}>
            <a
              className="mt-8 inline-block rounded-full text-sm sm:text-base py-3 px-5 min-w-[176px] animated-border relative overflow-hidden"
              href="https://github.com/drkrssll"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10">My Github →</span>
            </a>
          </div>

        </div>
      </main>
      <footer className="mt-12">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/icons/file.svg"
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
          Download My Resume →
        </a>
      </footer>
    </div>
  );
}
