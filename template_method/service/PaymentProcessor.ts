export abstract class PaymentProcessor {

  //Etapas do algoritmo que devem ser implementadas pelas subclasses
  protected abstract validatePayment(): void;
  protected abstract calculateTaxes(amount: number): number;
  protected abstract executePayment(amount: number): void;
  protected abstract registerTransaction(): void;

  //Hook method - pode ser sobrescrito pelas subclasses para alterar o comportamento padrão, se necessário
  protected needCalculateTaxes(): boolean {
    return false;
  }

  //Método template executado por todas as subclasses
  //As etapas do algoritmo são definidas aqui e NÃO podem ser alteradas pelas subclasses
  //Recomendado que este método seja final (readonly) para não ser sobrescrito
  readonly processPayment = (amount: number): void => {
    this.validatePayment();

    let tax = 0;
    if (this.needCalculateTaxes()) {
      tax = this.calculateTaxes(amount);
    }

    const totalAmount = amount + tax;
    this.executePayment(totalAmount);

    this.registerTransaction();
    this.logPaymentDetails();
  }

  private readonly logPaymentDetails = (): void => {
    console.log("Payment processed successfully.");
  }
}