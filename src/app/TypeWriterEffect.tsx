'use client';

import React, { useState, useEffect } from 'react';

type TWProps = {
  text: string;
  speed: number;
  onComplete?: React.Dispatch<React.SetStateAction<string>>;
};

const TypeWriterEffect = ({ text, speed, onComplete }: TWProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prevText) => {
          const newText = prevText + text[currentIndex];

          if (onComplete) {
            onComplete(newText);
          }

          return newText;
        });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <p className="text-lg text-left font-[family-name:var(--font-geist-mono)]">
      {displayedText}
    </p>
  );
};

export default TypeWriterEffect;
