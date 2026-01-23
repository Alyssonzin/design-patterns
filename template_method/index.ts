import { CreditCardPayment } from "./service/CreditCardPayment";
import { PixPayment } from "./service/PixPayment";

const creditCard = new CreditCardPayment("1234567812345678", "450");

creditCard.processPayment(150.00);

const pix = new PixPayment("my-pix-key");
pix.processPayment(200.00);