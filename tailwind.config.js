/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tg: {
          dark: '#0B1F3B',      // Azul Profundo
          blue: '#2563EB',      // Azul Eléctrico
          cyan: '#06B6D4',      // Cian
          light: '#E5EAF0',     // Gris Claro
          carbon: '#1F2937',    // Gris Carbón
          purple: '#8B5CF6',    // Morado Acento
          green: '#10B981',     // Verde Resultados
          orange: '#F59E0B',    // Naranja
          softblue: '#DBEAFE',  // Azul Suave
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(11, 31, 59, 0.95) 0%, rgba(37, 99, 235, 0.88) 100%)',
        'tg-gradient': 'linear-gradient(135deg, #2563EB 0%, #06B6D4 100%)',
        'glow-gradient': 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, rgba(37, 99, 235, 0) 70%)',
      },
      boxShadow: {
        'tg-card': '0 4px 20px -2px rgba(11, 31, 59, 0.06), 0 2px 6px -1px rgba(11, 31, 59, 0.04)',
        'tg-hover': '0 20px 30px -4px rgba(37, 99, 235, 0.12), 0 8px 12px -2px rgba(11, 31, 59, 0.05)',
        'tg-glow': '0 0 30px rgba(6, 182, 212, 0.35)',
      }
    },
  },
  plugins: [],
}
