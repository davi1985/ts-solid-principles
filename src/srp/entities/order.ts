import { Messaging } from "../infra/messaging";
import { Persistence } from "../infra/persistence";
import { OrderStatus } from "../protocols/order-status";
import { ShoppingCart } from "../usecase/shopping-cart";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistence: Persistence
  ) {}

  get orderStatus() {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Empty cart...");
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage("Order received");
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
