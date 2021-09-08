module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"chocolate-b": "#814721",
				"chocolate-lb": "#b26910",
				"chocolate-ho": "#97502c",
				"chocolate-pu": "#833f0a",
			},
		},
		fontFamily: {
			LondrinaShadow: ["'Londrina Shadow', sans-serif"],
			Chango: ["'Chango', sans-serif"],
		},
		container: {
			center: true,
			padding: "1rem",
			screens: {
				lg: "1124px",
				xl: "1124px",
				"2xl": "1124px",
			},
		},
	},
	variants: {
		extend: {},
		backgroundColor: ["hover", "active"],
	},
	plugins: [],
};
