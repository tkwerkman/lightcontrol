export default function Button({text, style, onClick}) {

	return (
		<div 
			className="flex w-full justify-center items-center p-2 border border-white rounded-xl hover:ring-2 hover:ring-black transition-all cursor-pointer"
			style={style}
			onClick={onClick}
		>
			{text}
		</div>
	)
}
