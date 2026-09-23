'use client'

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  delay?: number;
  pauseBetweenWords?: number;
  pauseBeforeRestart?: number;
  className?: string;
  style?: React.CSSProperties;
  highlightLastWord?: boolean;
}

export default function TypewriterText({ 
  words, 
  delay = 150, 
  pauseBetweenWords = 500,
  pauseBeforeRestart = 2000,
  className = '',
  style = {},
  highlightLastWord = false
}: TypewriterTextProps) {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (!isDeleting) {
      // Typing phase
      if (currentCharIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing current word
        if (currentWordIndex < words.length - 1) {
          // Move to next word
          const timeout = setTimeout(() => {
            setDisplayedWords(prev => [...prev, currentWord]);
            setCurrentWordIndex(prev => prev + 1);
            setCurrentCharIndex(0);
          }, pauseBetweenWords);
          return () => clearTimeout(timeout);
        } else {
          // Finished all words, pause before restarting
          const timeout = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setIsDeleting(true);
            }, 500); // Wait for fade out animation
          }, pauseBeforeRestart);
          return () => clearTimeout(timeout);
        }
      }
    } else {
      // Deleting phase - clear and restart
      const timeout = setTimeout(() => {
        setDisplayedWords([]);
        setCurrentWordIndex(0);
        setCurrentCharIndex(0);
        setIsDeleting(false);
        setFadeOut(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentWordIndex, isDeleting, words, delay, pauseBetweenWords, pauseBeforeRestart]);

  const currentTypingWord = !isDeleting ? words[currentWordIndex].slice(0, currentCharIndex) : '';

  return (
    <h3 
      className={`${className} transition-opacity duration-500 ease-in-out`} 
      style={{
        ...style,
        opacity: fadeOut ? 0 : 1
      }}
    >
      {displayedWords.map((word, idx) => (
        <span key={idx} className="inline-block animate-in fade-in duration-200">
          <span 
            className={highlightLastWord && idx === words.length - 1 ? 'text-pista' : ''}
            style={{
              ...(highlightLastWord && idx === words.length - 1 ? { 
                color: 'var(--color-pista)',
                fontSize: '1.3em',
                fontWeight: 500,
                fontFamily: 'var(--font-boska), serif',
                fontStyle: 'italic'
              } : {})
            }}
          >
            {word}
          </span>
          {idx < displayedWords.length - 1 || currentTypingWord ? ', ' : ''}
        </span>
      ))}
      <span 
        className={`inline-block ${highlightLastWord && currentWordIndex === words.length - 1 ? 'text-pista' : ''}`}
        style={{
          ...(highlightLastWord && currentWordIndex === words.length - 1 ? { 
            color: 'var(--color-pista)',
            fontSize: '1.2em',
            fontWeight: 500,
            fontFamily: 'var(--font-boska), serif',
            fontStyle: 'italic'
          } : {}),
          display: 'inline-block'
        }}
      >
        {currentTypingWord}
      </span>
      {!isDeleting && (
        <span 
          className="inline-block w-[3px] h-[0.8em] ml-1 transition-opacity duration-150" 
          style={{ 
            verticalAlign: 'middle',
            backgroundColor: highlightLastWord && currentWordIndex === words.length - 1 ? 'var(--color-pista)' : 'currentColor',
            animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }} 
        />
      )}
    </h3>
  );
}
