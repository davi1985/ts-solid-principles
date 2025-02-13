import { CartItem } from "../protocols/cart-item";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

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

  isEmpty(): boolean {
    return !!this._items.length;
  }

  clear() {
    this._items.length = 0;
  }
}
