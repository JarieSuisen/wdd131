const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


const productSet = document.querySelector('#productList');

function setProducts() {
    products.forEach(i => {
        let productID = i.id;
        let productName = i.name;

        let item = `<option value="${productID}">${productName.toUpperCase()}</option>`;
        productSet.innerHTML += item;
    })




};

setProducts();

let submitCount = Number(window.localStorage.getItem("submitCount-ls")) || 0;

let submitButton = document.querySelector('input[type="submit"]');

function storeLocal() {

    submitCount++;
    localStorage.setItem("submitCount-ls", submitCount);



};

submitButton.addEventListener('click', storeLocal);