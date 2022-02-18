import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


const fakeSport = new Item({

  imgUrl: "https://thiscatdoesnotexist.com/",
  item: "shoes",
  price: 3.99

})
class AppState extends EventEmitter {
  /** @type {import('./Models/Item').Item[]} */
  items = [fakeSport]

  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
