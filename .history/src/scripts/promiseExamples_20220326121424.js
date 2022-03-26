// const recipe = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Dostałem kebaba');
//     }, 1500); //niższy czas wykonuje się pierwszy
//     setTimeout(() => {
//         reject('Oszukali mnie');
//     }, 1000)
// })

// recipe
//     .then((kebab) => {
//         console.log(kebab)
//     })
//     .catch((fraud) => {
//         console.log(fraud)
//     });

    // ajax - asynchronous js and xml - XMLHTTPRequest

const myFetch = (url) => {
    const req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send(null);

    if(req.status === 200) {
        resolve(req.response);
    } else

    
    return new Promise((resolve, reject) => {

    })
}