import { portfolioContent } from '../content';

/**
 * Brand logo component — rendered from portfolioContent.brand.logo
 * Adapts blend mode for dark vs light sidebar backgrounds.
 */
export default function HLogo({ size = 60, className = "", theme = 'dark' }) {
  const isLight = theme === 'light';
  const logoSrc = portfolioContent?.brand?.logo || '/images/hijaz-h-logo.png';
  const brandName = portfolioContent?.brand?.name || 'Brand Logo';

  return (
    <div
      className={`h-logo ${className}`}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        verticalAlign: 'middle',
      }}
    >
      <img
        src={logoSrc}
        alt={brandName}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          // 'screen' mode: white logo visible on dark background
          // 'multiply' mode: dark logo visible on light/grey background
          mixBlendMode: isLight ? 'multiply' : 'screen',
          filter: isLight
            ? 'brightness(0.2) contrast(1.4) invert(0)'
            : 'brightness(1.1) contrast(1.1)',
          transition: 'filter 0.4s ease',
        }}
      />
    </div>
  );
}
