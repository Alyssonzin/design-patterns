import { PaymentProcessor } from "./PaymentProcessor";

export class CreditCardPayment extends PaymentProcessor {

  constructor(private number: string, private cvv: string) {
    super();
  }

  protected validatePayment(): void {
    const isCardNumberValid = this.validateCardNumber();
    const isCvvValid = this.validateCVV();

    if (!isCardNumberValid) {
      throw new Error("Invalid Credit Card Number");
    }

    if (!isCvvValid) {
      throw new Error("Invalid CVV");
    }
  }

  protected calculateTaxes(amount: number): number {
    return amount * 0.05; // 5% taxa
  }

  protected executePayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount.toFixed(2)}...`);
    const sucess = Math.random() > 0.1; // 90% de chance de sucesso

    if (!sucess) {
      throw new Error("Credit Card payment failed due to network error.");
    }
  }

  protected registerTransaction(): void {
    console.log("Registering credit card transaction on database...");
  }

  public validateCardNumber(): boolean {
    return this.number.length === 16;
  }

  public validateCVV(): boolean {
    return this.cvv.length === 3;
  }

}