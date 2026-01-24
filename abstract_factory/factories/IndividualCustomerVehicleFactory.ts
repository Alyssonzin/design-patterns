import { Customer } from "../customer/Customer";
import { IndividualCustomer } from "../customer/IndividualCustomer";
import { IndividualCar } from "../vehicle/IndividualCar";
import { Vehicle } from "../vehicle/Vehicle";
import { CustomerVehicleFactory } from "./CustomerVehicleFactory";

export class IndividualCustomerVehicleFactory implements CustomerVehicleFactory {

  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer)
  }
}