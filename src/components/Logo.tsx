import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  isDark?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  isDark = false,
  className = '',
  size = 'md',
}) => {
  // Exact SVG vector representation of the TecnoGen Isotype from Brand Manual
  const Isotype = ({ dimension = 38 }: { dimension?: number }) => (
    <svg
      width={dimension}
      height={dimension}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <defs>
        <linearGradient id="tgLogoGrad" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#1E60ED" />
          <stop offset="60%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {/* Top T wing/bar */}
      <path
        d="M20 30 L42 16 H86 C89.3 16 92 18.7 92 22 V31 C92 34.3 89.3 37 86 37 H28 C23.5 37 20 34 20 30 Z"
        fill="url(#tgLogoGrad)"
      />

      {/* Main G curved loop */}
      <path
        d="M38 37 C34 37 31 40 31 44 V68 C31 81 41 90 55 90 H72 C83 90 92 82 92 70 V58 C92 54.7 89.3 52 86 52 H64 C60.7 52 58 54.7 58 58 V62 C58 64.2 59.8 66 62 66 H76 V70 C76 75 72 78 67 78 H55 C47 78 43 73 43 65 V46 C43 41 40 37 38 37 Z"
        fill="url(#tgLogoGrad)"
      />
    </svg>
  );

  const iconDim = size === 'sm' ? 32 : size === 'lg' ? 52 : 40;

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <Isotype dimension={iconDim} />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        <Isotype dimension={60} />
        <div className="mt-3">
          <span className={`font-montserrat font-extrabold text-3xl tracking-tight leading-none ${isDark ? 'text-white' : 'text-[#0B1F3B]'}`}>
            TecnoGen
          </span>
          <p className="text-[11px] font-medium tracking-wide text-gray-500 mt-1">
            Marketing + IA + Automatización
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <Isotype dimension={iconDim} />
      <div className="flex flex-col text-left">
        <span className={`font-montserrat font-extrabold text-2xl tracking-[-0.03em] leading-none ${isDark ? 'text-white' : 'text-[#0B1F3B]'}`}>
          TecnoGen
        </span>
        <span className={`text-[10px] font-medium tracking-[0.02em] mt-1 leading-none ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Marketing + IA + Automatización
        </span>
      </div>
    </div>
  );
};
