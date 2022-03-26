const recipe = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dostałem kebaba');
    }, 1500); //niższy czas wykonuje się pierwszy
    setTimeout(() => {
        reject('Oszukali mnie');
    }, 1000)
})

recipe
    .then((kebab) => {
        console.log(kebab)
    })
    .catch((fraud) => {
        console.log(fraud)
    });