const currencyCodeRef = document.querySelector('#currencyCode');
const btnRef = document.querySelector('form button[type="submit"]');
const responseRef = document.querySelector('#response');


btnRef.addEventListener('click', (evt) => {
    evt.preventDefault();

    const response = fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currencyCodeRef.value}/?format=json`);
    response.then((data) => data.json()).then(data => {
        const msg = `Currency:${data.currency} , date:${data.rates[].effectiveDate} , rate:${data.rates.mid} `
        console.log(msg)
        responseRef.innerText = JSON.stringify(data, null, 3);
    })

    console.log(currencyCodeRef.value);

})