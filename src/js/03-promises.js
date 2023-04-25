// all modules
import Notiflix from 'notiflix';

function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    console.log(shouldResolve, position, delay)

    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)); 
      } else {
        reject(Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`));
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
  event.preventDefault();
  let step = Number(refs.delay.value);

  for (let i = 0; i < Number(refs.amount.value); i++) {
    
    let str = createPromise(i, step)
      .then(( i, step ) => {      })
      .catch(( i, step ) => {      });
      
    step += Number(refs.step.value)
  } 
}
