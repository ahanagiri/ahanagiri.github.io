const gameBoard = document.getElementById('game-board');
let score = 0;

function createBubble() {
	const bubble = document.createElement('div');
	bubble.classList.add('bubble');
	bubble.style.top = `${Math.random() * 450}px`;
	bubble.style.left = `${Math.random() * 450}px`;

	bubble.addEventListener('click', () => {
		bubble.pop();
		score++;
		document.getElementById('score').innerText = `Score: ${score}`;
	});

	bubble.pop = function() {
		bubble.removeEventListener('click', () => {
			bubble.pop();
			score++;
			document.getElementById('score').innerText = `Score: ${score}`;
		});
		bubble.style.opacity = 0;
		setTimeout(() => {
			gameBoard.removeChild(bubble);
		}, 500);
	}

	gameBoard.appendChild(bubble);
}

setInterval(createBubble, 1000);