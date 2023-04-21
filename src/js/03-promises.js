// all modules
import Notiflix from 'notiflix';

function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    console.log(shouldResolve, position, delay)

    setTimeout(() => {
      if (shouldResolve) {
        resolve('yes'); //Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)); 
      } else {
        reject('no'); //Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`));
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
    
    createPromise(i, step)
      .then(({ i, step }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${step}ms`)
        console.log(`✅ Fulfilled promise ${i} in ${step}ms`);
      })
      .catch(({ i, step }) => {
        Notiflix.Notify.warning(`❌ Rejected promise ${i} in ${step}ms`)
        console.log(`❌ Rejected promise ${i} in ${step}ms`);
      });
    step += Number(refs.step.value)
  } 
}
