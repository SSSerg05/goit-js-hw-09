// all modules
import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Success ${shouldResolve}! Value ${position} passed to resolve function`);
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Error ${shouldResolve}! Error ${position} passed to reject function`);
        Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`)
         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  })
}

const form = document.querySelector('.form');
const refs = { 
  delay: form.elements.delay.value,
  step: form.elements.step.value,
  amount: form.elements.amount.value,
}
form.addEventListener("submit", onSubmitForm)
console.log(refs.delay, refs.step, refs.amount);
console.log(refs);

function onSubmitForm(event) { 
  for (const i = 0; i < refs.amount; i++) {
    createPromise(i, delay)
    console.log(i, delay);
  }
  console.log(refs);

    // createPromise(position, delay)
    //   .then(({ position, delay }) => {
    //     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    //   })
    //   .catch(({ position, delay }) => {
    //     Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`)
    //     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    //   });
  //}
  
}
