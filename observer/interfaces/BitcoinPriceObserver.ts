export interface BitcoinPriceObserver {
  update(oldPrice: number, newPrice: number): void;
}