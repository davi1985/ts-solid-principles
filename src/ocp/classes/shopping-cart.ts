import { CartItem } from "../protocols/cart-item";
import { Discount } from "./discount";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discountStrategy: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.slice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return Number(
      this._items
        .reduce((total, accumulator) => total + accumulator.price, 0)
        .toFixed(2)
    );
  }

  totalWithDiscount() {
    return this.discountStrategy.calculate(this.total());
  }

  isEmpty(): boolean {
    return !!this._items.length;
  }

  clear() {
    this._items.length = 0;
  }
}
