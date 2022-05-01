let line = document.querySelectorAll('.line');
let audio = document.querySelectorAll('audio');

line.forEach((element) => {
	element.addEventListener('click', (event) => {
		for (let i = 0; i < line.length; i++) {
			if (event.target == line[i]) {
				audio[i].currentTime = 0;
				audio[i].play();
			}
		}
	});
});