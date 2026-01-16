import { BitcoinPriceObserver } from "../interfaces/BitcoinPriceObserver";

export class Bitcoin {
  private price: number;

  //A classe observada mantém uma lista de observadores e fornece métodos para adicioná-los.
  private observers: BitcoinPriceObserver[];

  constructor() {
    this.price = 0;
    this.observers = [];
  }

  //Método para notificar todos os observadores sobre mudanças no preço do Bitcoin.
  private notifyObservers(oldPrice: number, newPrice: number): void {
    this.observers.map(observer => observer.update(oldPrice, newPrice));
  }

  public setPrice(newPrice: number): void {

    if (this.price !== newPrice) {
      const oldPrice = this.price;
      this.price = newPrice;
      this.notifyObservers(oldPrice, newPrice);
    }
  }

  public getPrice(): number {
    return this.price;
  }

  public addObserver(observer: BitcoinPriceObserver): void {
    this.observers.push(observer);
  }
}