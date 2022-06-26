const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#fdfdfd',
			black: '#000000',
			gray: {
				light: '#f6f6f6',
				base: '#434967',
				dark: '#272c47'
			},
			pink: {
				light: '#ffe0e8',
				base: '#f9a7bb',
				dark: '#f86ba8'
			},
			orange: {
				light: '#faede4',
				base: '#fddbc9',
				dark: '#e6a04d'
			},
			blue: {
				light: '#eaf8fb',
				dark: '#6989be'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Avenir Next', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	variants: {},
	plugins: []
};
