
function onStart() { 
  const body = document.body;
  const timer = 

  body.addEventListener('click', (event) => { 
    event.preventDefault();
    
    if (event.target.dataset.action === 'start') {
      body.style.backgroundColor = getRandomHexColor();
    } else if ((event.target.dataset.action === 'stop') )
      // stopTimer()
  })
}

onStart()

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}