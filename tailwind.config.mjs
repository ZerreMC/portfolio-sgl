/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  whiteDark: '#F7F7F7',
		  black: '#000000',
		  greenBright: '#09FF00',
		  greenPrimary: '#00FF50',
		  gray: '#3E3E3E',
		  grayDark: '#111111',
		  grayMedium: '#2E2E2E',
		  grayLight: '#D9D9D9',
		  blueBright: '#0011FF',
		  blueDark: '#004482',
		  blueMedium: '#00599C',
		  greenDark: '#006A21',
		  cyanBright: '#00D8FF',
		  greenSoft: '#09B004',
		  blueSoft: '#659AD2',
		  grayVeryLight: '#E1E0E0',
		  yellowLight: '#F0DB4F',
		  redMedium: '#F1502F',
		  redBright: '#FF4000',
		},
		animation: {
		  'fade-in': 'fadeIn 1.5s ease-out',
		  'fade-in-up': 'fadeInUp 1.5s ease-out',
		  'float': 'float 3s ease-in-out infinite',
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  fadeInUp: {
			'0%': { opacity: '0', transform: 'translateY(20px)' },
			'100%': { opacity: '1', transform: 'translateY(0)' },
		  },
		  float: {
			'0%, 100%': { transform: 'translateY(0)' },
			'50%': { transform: 'translateY(-10px)' },
		  },
		},
	  },
	},
	plugins: [],
  };
  