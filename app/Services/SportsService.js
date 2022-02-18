import { ProxyState } from "../AppState.js"

class SportsService {
  addCart(id) {
    const foundItem = ProxyState.items.find(i => i.id == id)
    console.log(foundItem)
    ProxyState.cart = [...ProxyState.cart, foundItem]
  }

  constructor() {

    console.log("hello this id the services")
  }
}

export const sportsService = new SportsService()