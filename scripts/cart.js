


function getCart() {
    let cart;
    if (localStorage.getItem("cart") === null) {
        cart = {
            ids: [],
            amount: []
        }
    } else {
        cart = JSON.parse(localStorage.getItem("cart"))
    }

    return cart;
}
class Cart {

    getAmountOfProduct(){
        let amount = 0;
        if(localStorage.getItem("cart") === null){
            return amount
        }
        let cartAmount = JSON.parse(localStorage.getItem("cart")).amount
        for (let i = 0; i < cartAmount.length; i++) {
            amount += cartAmount[i]
        }
        return amount;
}

    addOneProductToCart(id){
        let cart = getCart()
        if(!cart.ids.includes(id)){
            cart.ids.push(id)
            cart.amount.push(1)
        }
        else{
            cart.amount[cart.ids.indexOf(id)]++
        }
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    removeOneProductFromCart(id){
        let cart = getCart()
        if(cart.amount[cart.ids.indexOf(id)] === 1){
                cart.amount.splice(cart.ids.indexOf(id),1)
                cart.ids.splice(cart.ids.indexOf(id),1)

        }
        else{
            cart.amount[cart.ids.indexOf(id)]--
        }
        localStorage.setItem("cart",JSON.stringify(cart))
    }




    }




export default Cart;