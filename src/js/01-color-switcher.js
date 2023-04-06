
function init() { 
  const body = document.body;
  const timer = 

  body.addEventListener('click', (event) => { 
    event.preventDefault();
    let timerId;
    if (event.target.dataset.action === 'start') {
      timerId = setInterval(onStart, 1000, body);
    } else if ((event.target.dataset.action === 'stop'))
      timerId = clearInterval();
  })
}

init()

function onStart(teg) { 
  teg.style.backgroundColor = getRandomHexColor();
}
function onStop() { 
  
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}