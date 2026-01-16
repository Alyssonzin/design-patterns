import { BitcoinPriceObserver } from "../interfaces/BitcoinPriceObserver";

export class NewsPlatform implements BitcoinPriceObserver {

  update(price: number): void {
    // Envia notícia para a plataforma de notícias...

    console.log(`Breaking News: The Bitcoin price has changed to ${price}`);
  }
  
}