let quantia = document.querySelector(".quantia");
let botaoConverter = document.querySelector("button");
let resultado = document.querySelector(".resultado");

async function convverterMoeda() {
    requestURL = 'https://api.exchangerate.host/convert?from=USD&to=EUR&amout=${quantia.value}';
    let response = await fetch(requestURL);
    let data = response.json();
    resultado.textContent = data.result.topFixed(2);
}

botaoConverter.addEventListener("click", e => {
    e.preventDefault();
    convverterMoeda();
})