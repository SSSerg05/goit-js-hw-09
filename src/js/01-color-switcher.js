
function init() { 
  const body = document.body;
  let timerId = null;
  const btnStart = body.querySelector('button[data-start]');
  const btnStop = body.querySelector('button[data-stop]');

  btnStop.disabled = true;

  body.addEventListener('click', (event) => { 

    if ('start' in event.target.dataset) {
      btnStop.disabled = false;
      btnStart.disabled = true;

      if (!timerId) {
        timerId = setInterval(onStart, 1000, body);
      }

    } else if ('stop' in event.target.dataset) {
      btnStop.disabled = true;
      btnStart.disabled = false;

      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }

    }
  })
}

init()

function onStart(teg) { 
  teg.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}