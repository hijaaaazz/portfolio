import React, { useEffect, useRef, useState } from 'react';

/**
 * WordReveal - splits text and elements into words and reveals them one-by-one
 * with a buttery smooth blur-fade upward animation as the user scrolls into view.
 * 
 * Supports:
 * - Plain strings
 * - Nested spans/elements (like badges, pills, colored spans)
 * - Custom tag type (h1, h2, h3, h4, p, div)
 * - Preserves spacing, line breaks, and responsive layouts
 */
export default function WordReveal({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  stagger = 0.04,
  duration = 0.8,
  threshold = 0.15,
  ...props
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  // Flatten and parse child elements and text into individual animated word tokens
  let wordIndex = 0;

  const processNode = (node, keyPrefix = 'node') => {
    if (typeof node === 'string') {
      const parts = node.split(/(\s+)/);
      return parts.map((part, i) => {
        if (!part) return null;
        if (/^\s+$/.test(part)) {
          return <span key={`${keyPrefix}-space-${i}`}> </span>;
        }
        const currentIdx = wordIndex++;
        const wordDelay = delay + currentIdx * stagger;
        return (
          <span
            key={`${keyPrefix}-w-${i}`}
            className={`word-reveal-token ${isVisible ? 'is-revealed' : ''}`}
            style={{
              transitionDelay: `${wordDelay}s`,
              transitionDuration: `${duration}s`,
            }}
          >
            {part}
          </span>
        );
      });
    }

    if (React.isValidElement(node)) {
      if (node.type === 'br') {
        return React.cloneElement(node, { key: `${keyPrefix}-br` });
      }

      // If it's a pill or atomic inline badge
      if (node.props?.className && (node.props.className.includes('pill') || node.props.className.includes('badge'))) {
        const currentIdx = wordIndex++;
        const wordDelay = delay + currentIdx * stagger;
        return (
          <span
            key={`${keyPrefix}-pill`}
            className={`word-reveal-token word-reveal-badge ${isVisible ? 'is-revealed' : ''}`}
            style={{
              transitionDelay: `${wordDelay}s`,
              transitionDuration: `${duration}s`,
            }}
          >
            {node}
          </span>
        );
      }

      // If it has children, recurse
      if (node.props && node.props.children) {
        return React.cloneElement(
          node,
          { key: `${keyPrefix}-elem` },
          React.Children.map(node.props.children, (child, cIdx) =>
            processNode(child, `${keyPrefix}-${cIdx}`)
          )
        );
      }

      // Fallback single element token
      const currentIdx = wordIndex++;
      const wordDelay = delay + currentIdx * stagger;
      return (
        <span
          key={`${keyPrefix}-elem`}
          className={`word-reveal-token ${isVisible ? 'is-revealed' : ''}`}
          style={{
            transitionDelay: `${wordDelay}s`,
            transitionDuration: `${duration}s`,
          }}
        >
          {node}
        </span>
      );
    }

    return node;
  };

  const content = React.Children.map(children, (child, idx) =>
    processNode(child, `c-${idx}`)
  );

  return (
    <Component
      ref={containerRef}
      className={`word-reveal-container ${isVisible ? 'is-active' : ''} ${className}`}
      {...props}
    >
      {content}
    </Component>
  );
}
