const currencyCodeRef = document.querySelector('#currencyCode');
const btnRef = document.querySelector('form button[type="submit"]');
const responseRef = document.querySelector('#response');

const postData = (msg) => {
    fetch()

}


btnRef.addEventListener('click', (evt) => {
    evt.preventDefault();

    const response = fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currencyCodeRef.value}/?format=json`);
    response.then((data) => data.json()).then(data => {
        const msg = `Currency:${data.currency} , date:${data.rates[0].effectiveDate} , rate:${data.rates[0].mid} `
        responseRef.innerText = msg;
        // responseRef.innerText = JSON.stringify(data, null, 3);
    })
})

