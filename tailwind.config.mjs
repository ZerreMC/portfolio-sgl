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
	  },
	},
	plugins: [],
  };
  