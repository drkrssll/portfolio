'use client';

import React, { ReactNode, useState } from 'react';
import TypeWriterEffect from './components/TypeWriterEffect';
import Corner from './components/Corner';
import { FaArrowDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

type HomeProps = {
  title: string,
  summary?: string,
  body: string,
  button?: string,
  primaryCard?: ReactNode,
  secondaryCard?: ReactNode,
  infoCard?: ReactNode,
}

const HomePage = ({ title, summary, body, button, primaryCard, secondaryCard, infoCard }: HomeProps) => {
  const [typedText, setTypedText] = useState('');
  const isTypewriterFinished = typedText.length === body.length;

  const pathName = usePathname();

  let buttonText = '';
  let buttonHref = '';
  let borderButtonHref = '';

  if (pathName === '/contact') {
    buttonText = 'Download My Resume';
    buttonHref = 'https://utfs.io/f/PoxZDyeHhCtaXbzl5NkhxOLHSZcRmn6vCTUlY1u7A2JiV845';
  } else {
    buttonText = 'Contact Me';
    buttonHref = '/contact';

    if (pathName === '/about') {
      borderButtonHref = 'https://github.com/drkrssll';
    } else if (pathName === '/') {
      borderButtonHref = '/about';
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 font-[family-name:var(--font-geist-mono)]">
      <main className="pt-3 flex flex-grow flex-col max-w-3xl w-full space-y-8 text-center">
        <Image
          className="dark:invert"
          src="https://utfs.io/f/PoxZDyeHhCta8kRNkL1IdBNITK5CJfSZH0v7MuzEQnsDry14"
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
          <div className="pt-2 pb-2 columns-1 md:columns-2 gap-4">
            {infoCard && <div className="mb-4 break-inside-avoid">{infoCard}</div>}
            {primaryCard && <div className="mb-4 break-inside-avoid">{primaryCard}</div>}
            {secondaryCard && <div className="mb-4 break-inside-avoid">{secondaryCard}</div>}
          </div>
        )}

        <div className={'min-h-[200px] flex flex-col'}>
          <TypeWriterEffect
            text={body}
            speed={30}
            onComplete={setTypedText}
          />

          {button && (
            <div
              className={`transition-opacity duration-500 ${isTypewriterFinished ? 'opacity-100' : 'opacity-0'}`}
            >
              <a
                className="mt-8 inline-block rounded-full text-sm sm:text-base py-3 px-5 min-w-[176px] animated-border relative overflow-hidden"
                href={borderButtonHref}
                target={pathName === '/about' ? '_blank' : '_self'}
                rel={pathName === '/about' ? 'noopener noreferrer' : undefined}
              >
                <span className="relative z-10">{button}</span>
              </a>
            </div>
          )}

          {isTypewriterFinished && pathName === "/contact" && (
            <div className="pt-14 flex flex-col items-center justify-center">
              <h2 className="pb-5 text-xl text-left font-[family-name:var(--font-geist-mono)]">
                My Resume
              </h2>

              <FaArrowDown
                size={32}
                className="text-white-500 animate-bounce"
              />
            </div>
          )}
          <Corner />
        </div>
      </main >
      <footer className="mt-12">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={buttonHref}
          target={pathName === '/contact' ? '_blank' : '_self'}
          rel={pathName === '/contact' ? 'noopener noreferrer' : undefined}
          download={pathName === '/contact' ? true : undefined}
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {buttonText} →
        </a>
      </footer>
    </div >
  );
}

export default HomePage
