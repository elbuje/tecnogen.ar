import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon-only' | 'footer';
  isDark?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  isDark = false,
  className = '',
}) => {
  // Isotype SVG (Stylized TG interconnected monogram)
  const Isotype = ({ size = 40 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
    >
      <defs>
        <linearGradient id="tgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <filter id="tgGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#06B6D4" floodOpacity="0.25" />
        </filter>
      </defs>
      
      {/* Top T-bar with sharp sleek cut */}
      <path
        d="M16 28 C16 23.5817 19.5817 20 24 20 H100 C104.418 20 108 23.5817 108 28 V38 C108 42.4183 104.418 46 100 46 H76 V100 C76 104.418 72.4183 108 68 108 H52 C47.5817 108 44 104.418 44 100 V46 H24 C19.5817 46 16 42.4183 16 38 V28 Z"
        fill="url(#tgGradient)"
        filter="url(#tgGlow)"
      />
      
      {/* Dynamic G loop wrap connecting seamlessly */}
      <path
        d="M52 56 H96 C100.418 56 104 59.5817 104 64 V92 C104 96.4183 100.418 100 96 100 H52 C47.5817 100 44 96.4183 44 92 V76 C44 71.5817 47.5817 68 52 68 H80 V84 H64 V84 H56 V88 H92 V72 H52 V56 Z"
        fill="url(#tgGradient)"
      />
      
      {/* Accent dot / spark indicator */}
      <circle cx="88" cy="33" r="4" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <Isotype size={44} />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        <Isotype size={56} />
        <div className="mt-3">
          <span className={`font-montserrat font-extrabold text-2xl tracking-tight ${isDark ? 'text-white' : 'text-tg-dark'}`}>
            Tecno<span className="text-tg-blue">Gen</span>
          </span>
          <p className="text-[10px] tracking-wider uppercase font-semibold text-tg-cyan mt-0.5">
            Marketing + IA + Automatización
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <Isotype size={variant === 'footer' ? 38 : 42} />
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className={`font-montserrat font-extrabold text-2xl tracking-tight leading-none ${isDark ? 'text-white' : 'text-tg-dark'}`}>
            Tecno<span className="text-tg-blue">Gen</span>
          </span>
        </div>
        <span className={`text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase mt-1 leading-none ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>
          Marketing <span className="text-tg-blue">+</span> IA <span className="text-tg-cyan">+</span> Automatización
        </span>
      </div>
    </div>
  );
};
