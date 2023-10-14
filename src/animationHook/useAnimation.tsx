import React, { useEffect, useRef, useState } from "react";

export default function useAnimation() {
  const [inViewPort, setInViewPort] = useState<boolean>(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log(entry.isIntersecting, 'is this true?')
            setInViewPort(true);
          } else {
            setInViewPort(false);
            // console.log(entry.isIntersecting, 'is this false?')
          }
        });
      },
      { threshold: 0 }
    );

    const elementWeAreOn = ref.current;
    console.log(ref.current);
    if (elementWeAreOn) {
      observer.observe(elementWeAreOn);
    }

    return () => {
      if (elementWeAreOn) {
        observer.unobserve(elementWeAreOn);
      }
    };
  }, []);
  return { ref, inViewPort };
}
