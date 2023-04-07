
function init() { 
  const body = document.body;
  let timerId = null;

  body.addEventListener('click', (event) => { 

    if ('start' in event.target.dataset) {

      if (!timerId) {
        timerId = setInterval(onStart, 1000, body);
      }

    } else if ('stop' in event.target.dataset) {

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