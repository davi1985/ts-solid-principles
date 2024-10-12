import { TenPercentDiscount, WithoutDiscount } from "./classes/discount";
import { Order } from "./classes/order";
import { Product } from "./classes/Product";
import { ShoppingCart } from "./classes/shopping-cart";
import { Messaging } from "./infra/messaging";
import { Persistence } from "./infra/persistence";

const tenPercentDiscount = new TenPercentDiscount();
// const withoutDiscount = new WithoutDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);

shoppingCart.addItem(new Product("Item 1", 49.9));
shoppingCart.addItem(new Product("Item 2", 9.9));
shoppingCart.addItem(new Product("Item 4", 69.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(shoppingCart.items);
console.log(order.orderStatus);
