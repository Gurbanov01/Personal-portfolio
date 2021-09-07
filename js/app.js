const numbers = [
	{ title: "HTML", percentage: 90, element: null },
	{ title: "CSS", percentage: 80, element: null },
	{ title: "JS", percentage: 70, element: null },
	{ title: "VUE", percentage: 60, element: null },
];

for (let i = 0; i < numbers.length; i++) {
	numbers[i].element = document.getElementById(`number${i + 1}`);

	let counter = 0;

	setInterval(() => {
		if (counter >= numbers[i].percentage) {
			clearInterval();
		} else {
			counter++;
			numbers[i].element.innerHTML = `${numbers[i].title} ${counter}%`;
		}
	}, 15);
}
