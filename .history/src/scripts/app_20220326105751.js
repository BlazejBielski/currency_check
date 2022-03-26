const currencyCodeRef = document.querySelector('#currencyCode');
const btnRef = document.querySelector('form button[type="submit"]');
const responseRef = document.querySelector('#response');


btnRef.addEventListener('click', (evt) => {
    evt.preventDefault();

    const respone = fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currencyCodeRef.value}/?format=json`)
    response.then(())
    console.log(d);


    console.log(currencyCodeRef.value)
})