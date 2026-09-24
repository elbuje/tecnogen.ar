import React from 'react';

interface LogoProps {
  variant?: 'default' | 'studio' | 'icon-only';
  isDark?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  isDark = false,
  className = '',
  size = 'md',
}) => {
  // Height map for responsive rendering
  const heightMap = {
    sm: 'h-10 sm:h-12',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
  };

  const selectedSize = heightMap[size];

  if (variant === 'icon-only') {
    return (
      <img
        src="/brand/tecnogen-icon.png"
        alt="TecnoGen Isotipo"
        className={`object-contain h-10 w-10 ${className}`}
        loading="eager"
      />
    );
  }

  if (variant === 'studio') {
    return (
      <img
        src={isDark ? '/brand/tecnogen-studio-logo-white.png' : '/brand/tecnogen-studio-logo.png'}
        alt="TecnoGen Studio - Plataforma de Contenido con IA"
        className={`object-contain ${selectedSize} max-w-full ${className}`}
        loading="eager"
      />
    );
  }

  // Exact original TecnoGen brand logo (Image 1 uploaded by user)
  return (
    <img
      src={isDark ? '/brand/tecnogen-logo-white.png' : '/brand/tecnogen-logo.png'}
      alt="TecnoGen - Marketing + IA + Automatización"
      className={`object-contain ${selectedSize} max-w-full ${className}`}
      loading="eager"
    />
  );
};
