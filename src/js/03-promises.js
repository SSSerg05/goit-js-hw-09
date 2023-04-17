// all modules
import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const form = document.querySelector('.form');
const refs = { 
  delay: form.elements.delay,
  step: form.elements.step,
  amount: form.elements.amount,
}
form.addEventListener("submit", onSubmitForm)

function onSubmitForm(event) { 
  for (const position in refs.amount) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`)
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  
}
