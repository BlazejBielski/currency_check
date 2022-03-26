const kebab = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('')
    }, 1000);
    setTimeout(() => {
        reject('Oszukali mnie')
    }, 1000)
})