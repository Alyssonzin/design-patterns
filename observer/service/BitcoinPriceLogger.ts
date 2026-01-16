import { BitcoinPriceObserver } from "../interfaces/BitcoinPriceObserver";

export class BitcoinPriceLogger implements BitcoinPriceObserver {

  update(price: number): void {
    // Envia log para o console ou outro sistema de logging...

    console.log(`The current Bitcoin price is ${price}`);
  }

}