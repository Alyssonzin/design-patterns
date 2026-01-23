import { PaymentProcessor } from "./PaymentProcessor";

export class PixPayment extends PaymentProcessor {
  constructor(private pixKey: string) {
    super();
  }

  protected validatePayment(): void {
    const isPixKeyValid = this.validatePixKey();
    if (!isPixKeyValid) {
      throw new Error("Invalid Pix Key");
    }
  }

  protected executePayment(amount: number): void {
    console.log(`Processing Pix payment of $${amount.toFixed(2)}...`);
    const success = Math.random() > 0.05; // 95% de chance de sucesso

    if (!success) {
      throw new Error("Pix payment failed due to network error.");
    }
  }

  protected registerTransaction(): void {
    console.log("Registering Pix transaction on database...");
  }

  protected calculateTaxes(amount: number): number {
    return amount * 0.1; //10% taxa
  }

  public validatePixKey(): boolean {
    return this.pixKey.length > 0;
  }
}