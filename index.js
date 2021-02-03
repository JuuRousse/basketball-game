const field = document.querySelector('.field');
const ball = document.querySelector('.ball');

let fieldCoordinates = field.getBoundingClientRect();

const HALF = 2;

const ballToCenter = () => {
    ball.style.left = fieldCoordinates.width / HALF - ball.clientWidth / HALF + 'px';
    ball.style.top = fieldCoordinates.height / HALF - ball.clientHeight / HALF + 'px';
}

ballToCenter();

field.addEventListener('click', (event) => {
    let ballCoordinates = {
        top: event.clientY - fieldCoordinates.top - field.clientTop - ball.clientHeight / HALF,
        left: event.clientX - fieldCoordinates.left - field.clientLeft - ball.clientWidth / HALF
    };

    if (ballCoordinates.top < 0) {
        ballCoordinates.top = 0;
    }

    if (ballCoordinates.left < 0) {
        ballCoordinates.left = 0;
    }

    if (ballCoordinates.left + ball.clientWidth > field.clientWidth) {
        ballCoordinates.left = field.clientWidth - ball.clientWidth;
    }

    if (ballCoordinates.top + ball.clientHeight > field.clientHeight) {
        ballCoordinates.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoordinates.left + 'px';
    ball.style.top = ballCoordinates.top + 'px';
})

let scoreA = 0;
let scoreB = 0;

const ONE_SECOND = 1000;
const TWO_SECONDS = 2000;

document.querySelector('.basket-zone-left').addEventListener('click', () => {
    scoreA += 1;
    setTimeout(() => {
        document.querySelector('.js-score-a').innerText = scoreA;
        document.querySelector('.score-for-team-a').classList.add('show');
        setTimeout(() => {
            document.querySelector('.score-for-team-a').classList.remove('show');
        }, TWO_SECONDS);
        ballToCenter();
    }, ONE_SECOND)
})

document.querySelector('.basket-zone-right').addEventListener('click', () => {
    scoreB += 1;
    setTimeout(() => {
        document.querySelector('.js-score-b').innerText = scoreB;
        document.querySelector('.score-for-team-b').classList.add('show');
        setTimeout(() => {
            document.querySelector('.score-for-team-b').classList.remove('show');
        }, TWO_SECONDS);
        ballToCenter();
    }, ONE_SECOND)
})
