class VendingMachine {
  protected static instance: VendingMachine;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  static getInstance(name: string): VendingMachine {
    if (VendingMachine.instance) {
      return VendingMachine.instance;
    }
    this.instance = new VendingMachine(name);
    return this.instance;
  }
}

class Product {
  protected name: string;
  protected price: string;

  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }

  get getName(): string {
    return this.name;
  }

  get getPrice(): string {
    return this.price;
  }
}

abstract class CurrencyAbstract {
  value: string;
  type: "coin" | "note";
  label: string;

  constructor(label: string, value: string, type: "coin" | "note") {
    this.label = label;
    this.value = value;
    this.type = type;
  }

  get getValue(): string {
    return this.value;
  }
}

class Coin extends CurrencyAbstract {
  constructor(value: string, label: string) {
    super(value, label, "coin");
  }
}

class Note extends CurrencyAbstract {
  constructor(value: string, label: string) {
    super(value, label, "note");
  }
}
