const currencyCodeRef = document.querySelector('#currencyCode');
const btnRef = document.querySelector('form button[type="submit"]');
const responseRef = document.querySelector('#response');


btnRef.addEventListener('click', (evt) => {
    event.preventDefault();
    console.log('it works')
})