const currencyCodeRef = document.querySelector('#currencyCode');
const btnRef = document.querySelector('form button[type="submit"]');
const responseRef = document.querySelector('#response');


btnRef.addEventListener('click', (evt) => {
    evt.preventDefault();

    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currencyCodeRef.va/?format=json`)


    // console.log(currencyCodeRef.value)
})