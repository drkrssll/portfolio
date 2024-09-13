'use client';

import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import TypeWriterEffect from './TypeWriterEffect';
import Corner from './Corner';
import { CardProps } from 'react-bootstrap';

type HomeProps = {
  title: string,
  summary?: string,
  body: string,
  alignType?: string,
  button?: string,
  primaryCard?: ReactNode,
  secondaryCard?: ReactNode,
}

export const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="border p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p>{content}</p>
  </div>
);

const HomePage = ({ title, summary, body, alignType, button, primaryCard, secondaryCard, }: HomeProps) => {
  const [typedText, setTypedText] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-mono)]">
      <main className="mt-12 flex flex-grow flex-col max-w-3xl w-full space-y-8 text-center">
        <Image
          className="dark:invert"
          src="https://www.svgrepo.com/download/1699/web-development.svg"
          alt="logo"
          width={60}
          height={60}
          priority
        />
        <h1 className="text-2xl text-left font-bold font-[family-name:var(--font-geist-mono)]">
          {title}
        </h1>
        {summary && (
          < h2 className="text-xl text-left font-[family-name:var(--font-geist-mono)]">
            {summary}
          </h2>
        )}

        {(primaryCard || secondaryCard) && (
          <div className="pt-4 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {primaryCard && <div>{primaryCard}</div>}
            {secondaryCard && <div>{secondaryCard}</div>}
          </div>
        )}

        <div className={`min-h-[200px] flex flex-col ${alignType}`}>
          <TypeWriterEffect
            text={body}
            speed={30}
            onComplete={setTypedText}
          />
          {button && (
            < div className={`transition-opacity duration-500 ${typedText.length === body.length ? 'opacity-100' : 'opacity-0'}`}>
              <a
                className="mt-8 inline-block rounded-full text-sm sm:text-base py-3 px-5 min-w-[176px] animated-border relative overflow-hidden"
                href="about"
              >
                <span className="relative z-10">{button}</span>
              </a>
            </div>
          )}
          <Corner />
        </div>
      </main >
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
    </div >
  );
}

export default HomePage
