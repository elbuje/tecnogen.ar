import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon-only' | 'studio';
  isDark?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  isDark = false,
  className = '',
  size = 'md',
}) => {
  // Height map for responsive rendering
  const heightMap = {
    sm: { h: 'h-8', icon: 'h-8 w-8' },
    md: { h: 'h-10', icon: 'h-10 w-10' },
    lg: { h: 'h-14', icon: 'h-14 w-14' },
    xl: { h: 'h-20', icon: 'h-20 w-20' },
  };

  const selectedSize = heightMap[size];

  if (variant === 'icon-only') {
    return (
      <img
        src="/brand/tecnogen-icon.png"
        alt="TecnoGen Isotipo"
        className={`object-contain ${selectedSize.icon} ${className}`}
        loading="eager"
      />
    );
  }

  if (variant === 'studio') {
    return (
      <img
        src={isDark ? '/brand/tecnogen-studio-logo-white.png' : '/brand/tecnogen-studio-logo.png'}
        alt="TecnoGen Studio - Plataforma de Contenido con IA"
        className={`object-contain ${selectedSize.h} max-w-full ${className}`}
        loading="eager"
      />
    );
  }

  if (variant === 'vertical') {
    return (
      <img
        src={isDark ? '/brand/tecnogen-logo-white.png' : '/brand/tecnogen-logo.png'}
        alt="TecnoGen - Marketing + IA + Automatización"
        className={`object-contain ${size === 'lg' ? 'h-28' : size === 'xl' ? 'h-36' : 'h-20'} max-w-full ${className}`}
        loading="eager"
      />
    );
  }

  // Default horizontal
  return (
    <img
      src={isDark ? '/brand/tecnogen-logo-horizontal-white.png' : '/brand/tecnogen-logo-horizontal.png'}
      alt="TecnoGen - Marketing + IA + Automatización"
      className={`object-contain ${selectedSize.h} max-w-full ${className}`}
      loading="eager"
    />
  );
};
