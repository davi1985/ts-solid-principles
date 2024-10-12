import { Order } from "./entities/order";
import { Product } from "./entities/Product";
import { Messaging } from "./infra/messaging";
import { Persistence } from "./infra/persistence";
import { ShoppingCart } from "./usecase/shopping-cart";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);

shoppingCart.addItem(new Product("Item 1", 49.9));
shoppingCart.addItem(new Product("Item 2", 9.9));
shoppingCart.addItem(new Product("Item 4", 69.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(shoppingCart.items);
console.log(order.orderStatus);
