import { Customer } from "../customer/Customer";
import { Vehicle } from "./Vehicle";

export class EnterpriseCar implements Vehicle {

  constructor(public name: string, private readonly customer: Customer) {

  }

  pickUp(): void {
    console.log(`${this.name} is picking up ${this.customer.name}`);
  }
}