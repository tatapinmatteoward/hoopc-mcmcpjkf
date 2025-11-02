/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        accent: '#10b981',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
