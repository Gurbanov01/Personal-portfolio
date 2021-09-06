let number = document.getElementById("number1");
let counter = 0;
setInterval(() => {
	if (counter == 90) {
		clearInterval();
	} else {
		counter += 1;
		number.innerHTML = "HTML " + counter + "%";
	}
}, 30);

let number2 = document.getElementById("number2");
let counter = 0;
setInterval(() => {
	if (counter == 90) {
		clearInterval();
	} else {
		counter += 1;
		number.innerHTML = "CSS " + counter + "%";
	}
}, 30);


let number3 = document.getElementById("number3");
let counter = 0;
setInterval(() => {
	if (counter == 70) {
		clearInterval();
	} else {
		counter += 1;
		number.innerHTML = "JavaScript " + counter + "%";
	}
}, 30);


let number4 = document.getElementById("number4");
let counter = 0;
setInterval(() => {
	if (counter == 75) {
		clearInterval();
	} else {
		counter += 1;
		number.innerHTML = "Vue.js " + counter + "%";
	}
}, 30);



