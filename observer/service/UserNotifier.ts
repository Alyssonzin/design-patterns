import { BitcoinPriceObserver } from "../interfaces/BitcoinPriceObserver";

export class UserNotifier implements BitcoinPriceObserver {

  update(oldPrice: number, newPrice: number): void {
    // Notifica o usuário sobre a mudança de preço somente se a variação for de 10%...
    const variationPrice = Math.abs(newPrice - oldPrice);
    const variationPercent = (variationPrice / oldPrice) * 100;

    if (variationPercent < 10) return;

    console.log(`User Notification: The Bitcoin price is now ${newPrice}`);
  }
}