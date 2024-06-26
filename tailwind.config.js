/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'star': "url('/star.png')",
			},
			padding: {
				'5%': '5%'
			},
		screens: {
			'dsm': {'max':'640px'},
			'dmd': {'max':'768px'},
			'dlg': {'max':'1024px'},
			'dxl': {'max':'1280px'},
			'd2xl': {'max':'1536px'}
		},
		},
	},
	plugins: [
		//require('@tailwindcss/forms'),
		//require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		//require('@tailwindcss/container-queries'),
	],
	safelist: [
		'h-12',
		'w-12',
		'before:w-3',
		'before:w-4'
	]
}

