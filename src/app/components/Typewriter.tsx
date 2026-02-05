import React, { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}

export function Typewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1500,
  className = "",
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    let timeout: number;

    if (!isDeleting && subIndex === texts[index].length) {
      // Pause at end
      timeout = window.setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && subIndex === 0) {
      // Move to next text
      timeout = window.setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 200);
    } else {
      timeout = window.setTimeout(() => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, texts, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {texts[index].slice(0, subIndex)}
      <span className="typewriter-cursor" aria-hidden />
    </span>
  );
}

export default Typewriter;
