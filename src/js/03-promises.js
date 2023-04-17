// all modules
import Notiflix from 'notiflix';

function createPromise(position, delay) {
  ()
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      } else {
        reject(Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`))
      }
    }, delay);
  })
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
    createPromise(i, Number(delay.value))
    console.log(i, Number(delay.value));
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
