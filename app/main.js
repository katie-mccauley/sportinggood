import { CartsController } from "./Controllers/CartsController.js";
import { SportsController } from "./Controllers/SportsController.js";

class App {
  sportsController = new SportsController()
  cartsController = new CartsController()
}

window["app"] = new App();
