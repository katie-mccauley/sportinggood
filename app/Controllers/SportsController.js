import { ProxyState } from "../AppState.js"
import { sportsService } from "../Services/SportsService.js"

function _draw() {
  let template = ""
  ProxyState.items.forEach(i => template += i.Template)
  document.getElementById("marketplace").innerHTML = template
}

export class SportsController {

  constructor() {
    console.log("hello this is the controller")
    ProxyState.on("items", _draw)
    _draw()
  }

  addCart(id) {
    console.log("this is the id", id)
    sportsService.addCart(id)
  }

}