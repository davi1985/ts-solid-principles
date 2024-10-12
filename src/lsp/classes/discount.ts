export abstract class Discount {
  protected DISCOUNT = 0;

  calculate(price: number): number {
    return price - price * this.DISCOUNT;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly DISCOUNT = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly DISCOUNT = 0.1;
}

export class WithoutDiscount extends Discount {}
