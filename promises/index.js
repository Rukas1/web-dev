const promesse1 = new Promise((resolve, reject) => {
    const aleatoire = Math.trunc(Math.random() * 10 +1); // 1 -> 10
    if (aleatoire <= 5) {
        resolve("Entre 5 et 1");
    } else {
        reject("Entre 6 et 10");
    }
})
.then((txt) => {
    console.log(txt);
})
.then(() => {
    console.log("hello depuis le dexieme then");
})
.catch((txt) => {
    console.log(txt);
})

/* -------------- */

function retournePromesse() {
    return new Promise((resolve) => {
        if(true) {
            resolve("ok");
        }
    })
}

async function operationAsync() {
    const attenteAsync = await retournePromesse(); 
    console.log(attenteAsync);
}

operationAsync()

/* -------------- */

async function waifuAsync() {
    let response = await fetch("https://api.waifu.pics/sfw/waifu");
    let data = await response.json();
    console.log(data);
    document.body.insertAdjacentHTML("beforeend", `<img src="${data.url}" width="200">`)
}

waifuAsync();
