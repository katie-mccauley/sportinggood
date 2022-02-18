import { generateId } from "../Utils/generateId.js";


export class Item {
  constructor({ imgUrl, item, price }) {
    this.id = generateId(),
      this.imgUrl = imgUrl,
      this.item = item,
      this.price = price
  }

  get Template() {
    return `
    <div class="col-12">
    <div>
  
      <img class="img-fluid" src="${this.imgUrl}" onclick="app.sportsController.addCart('${this.id}')" alt="img broke">
      <div class="col-3 card p-3">
        <h2>${this.item}</h2>
        <h2>${this.price}</h2>
  
      </div>
  
    </div>
  </div>`
  }


}

