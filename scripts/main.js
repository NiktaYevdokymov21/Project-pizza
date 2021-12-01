

import TemplateProcessor from "./templateProccesor.js";
import Router from "./router.js";
import Client from "./client.js";
import Cart from "./cart.js";
import Spinner from "./spinner.js"

const router = new Router()
const templateProcessor = new TemplateProcessor()
const client = new Client()
const cart = new Cart();
const spinner = new Spinner()

// Shown Status flag
let statusShow = true;

export function getStatusShown(){
    return statusShow;
}

export function changeStatus(status){
    statusShow = status

}

// Manipulation with prices in cart and amount of products

async function changeAllPrice(){
    const price = (await getSum()).toPrecision().split(".")
    let allPrice;
    if(price[1] === undefined) {
        allPrice = price[0]  + " грн"
    }
    else {
        allPrice = price[0] + "." + price[1].substr(0, 2) + " грн"
    }
    document.querySelector(".order__all-price").textContent = allPrice
    document.getElementById("price-par").textContent = allPrice
}

export async function getSum(){
    let prices = []
    let amounts = []
    let sum = 0;
    document.querySelectorAll(".order__price").forEach(element => prices.push(element.textContent.split(" ")[0]))
    document.querySelectorAll(".order__amount").forEach(amount => amounts.push(amount.textContent))

    for (let i = 0; i <prices.length ; i++) {
        sum += parseFloat(prices[i]) * parseFloat(amounts[i])
    }
    return sum
}

async function minusProduct(){
    const id = this.parentElement.parentElement.id;

    const cartObj = JSON.parse(localStorage.getItem("cart"))

    if(cartObj.amount[cartObj.ids.indexOf(id)] === 1){
        this.parentElement.parentElement.parentElement.parentElement.remove()
        cart.removeOneProductFromCart(id)
    }
    else{
        cart.removeOneProductFromCart(id)
        this.nextElementSibling.textContent = cartObj.amount[cartObj.ids.indexOf(id)] - 1
    }
    await changeAllPrice()
    document.querySelector(".header__amount-of-products").textContent = cart.getAmountOfProduct().toString()
}

async function addProduct() {

    const id = this.parentElement.parentElement.id;
    const cartObj = JSON.parse(localStorage.getItem("cart"))
    cart.addOneProductToCart(id)
    this.previousElementSibling.textContent = cartObj.amount[cartObj.ids.indexOf(id)] + 1
    await changeAllPrice()
    document.querySelector(".header__amount-of-products").textContent = cart.getAmountOfProduct().toString()

}

//
//
//

// Adding all event listeners on page
const headerLinks = ['#sales','#pizzas','#drinks','#sides','#deserts']

function addAllEventListeners(catalog,fileName){
    document.querySelector('.logo img').addEventListener('click',() => {
        window.location.hash = "";
    })
    document.querySelector('.logo__text').addEventListener('click',() => {
        window.location.hash = "";
    })
    for (let i = 0; i < headerLinks.length; i++) {
        document.querySelectorAll('.nav__link')[i].addEventListener('click',() => {
            window.location.hash = headerLinks[i]
        })
    }
    document.querySelector('.header__cart').addEventListener('click',() => {
        if(localStorage.getItem("cart") !== null && JSON.parse(localStorage.getItem("cart")).ids.length !== 0) {
            window.location.hash = "#cart";
        }
        else{
            window.location.hash = ""
        }
    })

    if(catalog === "db"){
        document.querySelectorAll(".element__cart").forEach(element => element.addEventListener('click',() => {
            cart.addOneProductToCart(element.parentElement.parentElement.id)
            document.querySelector(".header__amount-of-products").textContent = cart.getAmountOfProduct().toString()
        }))
    }
    else {
        document.querySelectorAll(".element__cart").forEach(element => element.addEventListener('click', () => {
            cart.addOneProductToCart(catalog + "." + element.parentElement.parentElement.id)
            document.querySelector(".header__amount-of-products").textContent = cart.getAmountOfProduct().toString()
        }))
    }
    if(fileName === "cart"){


        document.querySelectorAll(".order__amount-minus").forEach(element => element.addEventListener("click",minusProduct))
        document.querySelectorAll(".order__amount-plus").forEach(element => element.addEventListener("click",addProduct))


        document.querySelector(".order__registration-blank").addEventListener("submit",async (event) =>{
            event.preventDefault()
            let order = {
                name: document.getElementById("name").value,
                number: document.getElementById("number").value,
                email: document.getElementById("email").value,
                city: document.getElementById("city").value,
                street: document.getElementById("street").value,
                house: document.getElementById("house").value,
                flat: document.getElementById("flat").value,
                entrance: document.getElementById("entrance").value,
                date: document.getElementById("date").value,
                time: document.getElementById("time").value,
                payment: document.getElementById("payment").value,
            }

            changeStatus(false)
            let id = Object.values(await client.setData(order))[0]
            localStorage.clear()
            window.location.hash = "status/" + id


        })
    }
}

// Function to change the content of page due to it`s hash

let view;
async function change(fileName,catalogName,id) {
    spinner.showSpinner()
    await import(`./views/${fileName}Page.js`).then((viewModule) => {
        view = viewModule.default;

        return client.getDataCatalog(catalogName);
    })
        .then((data) => {
            spinner.hideSpinner();
            if(id !== undefined) {
                templateProcessor.render(view(data,id-1))
            }
            else{
                templateProcessor.render(view(data));
            }
        })

}

// Function that loads everything

async function load(){
    let {fileName,catalogName,id} = await router.getCurrentState()
    await change(fileName,catalogName,id)
    await addAllEventListeners(catalogName,fileName)
    if(fileName === "cart"){
        await changeAllPrice()
    }
    window.scroll(0,0);
    document.querySelector(".header__amount-of-products").textContent = cart.getAmountOfProduct().toString()

}



window.onhashchange = load
load()