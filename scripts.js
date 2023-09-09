let quantia = document.querySelector(".quantia");
let botaoConverter = document.querySelector("button");
let resultado = document.querySelector(".resultado");

async function convverterMoeda() {
    const requestURL = `https://api.exchangerate.host/convert?from=USD&to=EUR&amount=${quantia.value}`;
    let response = await fetch(requestURL);
    let data = await response.json(); 
    resultado.textContent = data.result.toFixed(2); 
}

botaoConverter.addEventListener("click", async (e) => { 
    e.preventDefault();
    await convverterMoeda(); 
});
