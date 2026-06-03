import { useState, useEffect } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Computer Engineer", "FrontEnd Developer", "React Specialist"];

  useEffect(() => {
    let currentIndex = 0;
    let currentWord = words[wordIndex];
    
    const interval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setText(currentWord.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setWordIndex((wordIndex + 1) % words.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [wordIndex]);

  return (
    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
      {text}
    </p>
  );
};

export default Typewriter;