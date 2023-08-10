/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
		extend: {
			opacity: ['disabled'],
			ringColor: ['hover'],
		},
      screens: {
				'2xs': { max: '399px' },
				xs: { min: '400px', max: '639px' },
				'3xl': '1800px',
			},
			fontSize: {
				xs: ['12px', { lineHeight: '16px' }],
				sm: ['14px', { lineHeight: '20px' }],
				base: ['16px', { lineHeight: '28px' }],
				lg: ['18px', { lineHeight: '22px' }],
				xl: ['20px', { lineHeight: '24px' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['32px', { lineHeight: '48px' }],
				'5xl': ['48px', { lineHeight: '60px' }],
				'6xl': ['56px', { lineHeight: '60px' }],
				'7xl': ['72px', { lineHeight: '80px' }],
				'8xl': ['6rem', { lineHeight: '1.1' }],
				'9xl': ['8rem', { lineHeight: '1.1' }],
			}
    },
  },
  plugins: [],
}
