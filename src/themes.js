export default function getTheme(theme) {
	const themes = {
		warm: {color: "black", backgroundColor: "darkorange", borderColor: "black"},
		dimwarm: {color: "black", backgroundColor: "orangered", borderColor: "black"},
		cold: {color: "black", backgroundColor: "azure", borderColor: "black"},
		purple: {color: "white", backgroundColor: "purple", borderColor: "white"},
		light: {color: "black", backgroundColor: "darkorange", borderColor: "black"},
		dark: {color: 'white', backgroundColor: "darkgrey", borderColor: "white"},
	}
	return themes[theme]
}