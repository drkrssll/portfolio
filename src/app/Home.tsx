'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import TypeWriterEffect from './components/TypeWriterEffect';
import Corner from './components/Corner';
import { FaArrowDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { MousePosition } from './components/MouseGlow';

type HomeProps = {
  title: string,
  summary?: string,
  body: string,
  button?: string,
  firstCard?: ReactNode,
  secondCard?: ReactNode,
  thirdCard?: ReactNode,
  fourthCard?: ReactNode,
  fifthCard?: ReactNode,
}

const HomePage = ({ title, summary, body, button, firstCard, secondCard, thirdCard, fourthCard, fifthCard }: HomeProps) => {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const isTypewriterFinished = typedText.length === body.length;
  const pathName = usePathname();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

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
      <div className="fixed inset-0 z-20 pointer-events-none">
        <div
          className="absolute inset-0 bg-white"
          style={{
            mask: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 10%)`,
            WebkitMask: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 5%)`
          }}
        >
          <div className="pt-20 text-center">
            <p className="text-black text-xl text-bold">( ͡° ͜ʖ ͡°)</p>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(255, 255, 255, 0.15) -5%,
            rgba(255, 255, 255, 0.05) 5%,
            transparent 15%
          )`
        }}
      />

      <main className="pt-3 flex flex-grow flex-col max-w-3xl w-full space-y-8 text-center">
        <img
          src="https://utfs.io/f/PoxZDyeHhCta8kRNkL1IdBNITK5CJfSZH0v7MuzEQnsDry14"
          alt="logo"
          width={60}
          height={60}
          className="dark:invert"
        />
        <h1 className="text-2xl text-left font-bold font-[family-name:var(--font-geist-mono)]">
          {title}
        </h1>
        {summary && (
          < h2 className="text-xl text-left font-[family-name:var(--font-geist-mono)]">
            {summary}
          </h2>
        )}

        {(firstCard || secondCard) && (
          <div className="pt-2 pb-2 columns-1 md:columns-2 gap-4">
            {firstCard && <div className="mb-4 break-inside-avoid">{firstCard}</div>}
            {secondCard && <div className="mb-4 break-inside-avoid">{secondCard}</div>}
            {thirdCard && <div className="mb-4 break-inside-avoid">{thirdCard}</div>}
            {fourthCard && <div className="mb-4 break-inside-avoid">{fourthCard}</div>}
            {fifthCard && <div className="mb-4 break-inside-avoid">{fifthCard}</div>}
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
