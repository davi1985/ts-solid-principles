type CartItem = { name: string; price: number };
type OrderStatus = "open" | "closed";

export class ShoppingCartBad {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.slice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus() {
    return this._orderStatus;
  }

  total(): number {
    return Number(
      this._items
        .reduce((total, accumulator) => total + accumulator.price, 0)
        .toFixed(2)
    );
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("Empty cart...");
    }

    this._orderStatus = "closed";
    this.sendMessage("Order received");
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return !!this._items.length;
  }

  clear() {
    this._items.length = 0;
  }

  saveOrder() {
    console.log("Order saved");
  }

  sendMessage(msg: string) {
    console.log("Send message: ", msg);
  }
}

const shoppingCart = new ShoppingCartBad();
shoppingCart.addItem({ name: "Item 1", price: 49.9 });
shoppingCart.addItem({ name: "Item 2", price: 9.9 });
shoppingCart.addItem({ name: "Item 4", price: 69.9 });

console.log(shoppingCart.items);
console.log(shoppingCart.total);
shoppingCart.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.orderStatus);
