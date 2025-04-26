import { useState, useEffect } from 'react';

export default function useScrollDirection(threshold = 0) {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > threshold) {
        const newDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        setScrollDirection(newDirection);
        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      }
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [threshold]);

  return scrollDirection;
}
