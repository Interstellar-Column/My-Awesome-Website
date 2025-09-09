/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/**/layouts/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1e293b',
        darker: '#1c2431',
        darkest: '#0f172a',
        primary: '#1d4ed8',
        muted: '#64748b',
        accent: '#f59e0b',
      }
    }
  },
  plugins: [],
}

