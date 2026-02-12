/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5',
          dark: '#8B5CF6',
        },
        secondary: {
          light: '#7C3AED',
          dark: '#EC4899',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0F172A',
        },
        surface: {
          light: '#F9FAFB',
          dark: '#1E293B',
        },
        text: {
          primary: {
            light: '#111827',
            dark: '#F1F5F9',
          },
          secondary: {
            light: '#6B7280',
            dark: '#94A3B8',
          },
        },
        border: {
          light: '#E5E7EB',
          dark: '#334155',
        },
        success: {
          light: '#10B981',
          dark: '#34D399',
        },
        warning: {
          light: '#F59E0B',
          dark: '#FBBF24',
        },
        error: {
          light: '#EF4444',
          dark: '#F87171',
        },
      },
    },
  },
  plugins: [],
}
