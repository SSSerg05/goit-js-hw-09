// all modules
import Notiflix from 'notiflix';

function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    console.log(shouldResolve, position, delay)

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`); //Notiflix.Notify.success
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);  //Notiflix.Notify.warning
      }
    }, delay);

  })

   return promise;
}

const form = document.querySelector('.form');
const refs = { 
   delay: form.elements.delay,
   step: form.elements.step,
   amount: form.elements.amount,
}
form.addEventListener("submit", onSubmitForm)

function onSubmitForm(event) { 

  for (const i = 0; i < Number(refs.amount.value); i++) {
    
    Notiflix.Notify.success(`✅ Start promise ${position} in ${delay}ms`)

    createPromise(i, Number(delay.value))
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
