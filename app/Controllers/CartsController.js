import { ProxyState } from "../AppState.js"
import { cartsService } from "../Services/CartsService.js"

function _draw() {
  document.getElementById('cartTotal').innerText = ProxyState.cart.length.toString()
  let price = 0
  ProxyState.cart.forEach(i => price += i.price)
  document.getElementById("price").innerText = price.toString()
}
export class CartsController {
  constructor() {
    ProxyState.on("cart", _draw)
  }
}