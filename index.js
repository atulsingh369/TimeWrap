let seconds = 0;
var time = [];

const disp = () => {
	let t = 0;
	time[0] = Math.floor(seconds / 3600);
	time[1] = Math.floor((seconds % 3600) / 60);
	time[2] = Math.floor(seconds % 3600 % 60);
	for (i = 0; i < 3; i++) {
		if (Math.floor(time[i] / 10) == 0) {
			time[i].toString();
			time[i] = t.toString() + time[i];
		}
	}
	const idS = ["hrs", "min", "sec"];
	for (i = 0; i < 3; i++) {
		document.getElementById(idS[i]).textContent = time[i];
	}
}

const start = () => {
	id = window.setInterval(function () {
		seconds++;
		disp();
	}, 1000);
}

const stop = () => {
	clearInterval(id);
}