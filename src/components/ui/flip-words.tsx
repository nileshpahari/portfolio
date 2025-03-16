"use client";
import React, { useCallback, useEffect, useState, memo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePerformanceMode } from "@/hooks/usePerformanceMode";

const FlipWordsComponent = ({
  words,
  duration = 500,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const isLowPerformance = usePerformanceMode();

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (!isAnimating) {
      timeoutId = setTimeout(startAnimation, duration);
    }
    return () => clearTimeout(timeoutId);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: isLowPerformance ? 50 : 100,
          damping: isLowPerformance ? 15 : 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 font-bold inline-block relative text-left px-2 text-3xl text-orange-400",
          className
        )}
        key={currentWord}
      >
        {isLowPerformance ? (
          // Simple animation for mobile
          <span className="inline-block whitespace-nowrap">{currentWord}</span>
        ) : (
          // Full animation for desktop
          currentWord.split(" ").map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * 0.3,
                duration: 0.3,
              }}
              className="inline-block whitespace-nowrap"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                    duration: 0.2,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))
        )}
      </motion.div>
    </AnimatePresence>
  );
};

FlipWordsComponent.displayName = 'FlipWordsComponent';

export const FlipWords = memo(FlipWordsComponent);
FlipWords.displayName = 'FlipWords';
