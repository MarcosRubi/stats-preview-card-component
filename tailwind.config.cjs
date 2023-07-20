/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			'main': 'hsl(233, 47%, 7%)',
			'dark-blue' : 'hsl(244, 38%, 16%)',
			'soft-violet': 'hsl(277, 64%, 61%)',
			'parahgraph': 'hsla(0, 0%, 100%, 0.75)',
			'stats-heading': 'hsla(0, 0%, 100%, 0.6)',
		},
		fontFamily: {
			'inter': ['Inter', 'system-ui'],
			'lexend-deca': ['Lexend Deca', 'system-ui'],
		},
		extend: {
			
		},
	},
	plugins: [],
}
