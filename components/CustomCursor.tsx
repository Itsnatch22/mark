'use client';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function SmartCursor() {
  const [cursorText, setCursorText] = useState('Scroll to explore');
  const [cursorVariant, setCursorVariant] = useState('default');
  const cursorRef = useRef(null);
  const pathname = usePathname();

  // Contextual text based on route
  useEffect(() => {
    switch(pathname) {
      case '/about':
        setCursorText('Discover more');
        break;
      case '/work':
        setCursorText('View project');
        break;
      case '/contact':
        setCursorText('Get in touch');
        break;
      default:
        setCursorText('Scroll to explore');
    }
  }, [pathname]);

  // Cursor states
  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;

    // Move cursor
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.7,
        ease: 'power2.out'
      });

      // Detect interactive elements
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      
      if (hoveredElement?.closest('a, button')) {
        setCursorVariant('action');
        setCursorText(hoveredElement.textContent?.trim() || 'Click me');
      } 
      else if (hoveredElement?.closest('video, .video-container')) {
        setCursorVariant('media');
        setCursorText((hoveredElement as HTMLVideoElement).paused ? 'Play' : 'Pause');
      }
      else if (hoveredElement?.closest('.draggable')) {
        setCursorVariant('drag');
        setCursorText('Drag');
      }
      else {
        setCursorVariant('default');
      }
    };

    // Click effect
    const onMouseDown = () => {
      gsap.to(cursor, { 
        scale: 0.8, 
        duration: 0.1 
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { 
        scale: 1, 
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)'
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Variant styles

  return (
    <div 
    ref={cursorRef}
    className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300
      ${cursorVariant !== 'default' ? 'px-4 py-2 bg-white/90 text-black shadow-xl border border-black/10 backdrop-blur-md rounded-md' : 'opacity-0'}
    `}
    style={{
      transform: 'translate(-50%, -50%)',
      willChange: 'transform'
    }}
  >
    {(cursorVariant !== 'default') && (
      <span className="text-sm font-medium whitespace-nowrap">
        {cursorText}
      </span>
    )}
  </div>
  );
}