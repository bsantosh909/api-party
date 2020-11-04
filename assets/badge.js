const colors = {
	games: 'bg-gradient-to-tr from-pink-300 via-orange-400 to-red-400',
	social: 'bg-gradient-to-bl from-teal-300 to-blue-400',
	entertainment: 'bg-gradient-to-tl from-yellow-300 to-green-400',
}

export const getColor = (category) => {
	const cat = colors[category.toLowerCase()];
	return cat ? cat : 'bg-yellow-300';
};
