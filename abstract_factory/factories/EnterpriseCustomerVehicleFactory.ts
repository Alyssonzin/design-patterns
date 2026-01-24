import { Customer } from "../customer/Customer";
import { EnterpriseCustomer } from "../customer/EnterpriseCustomer";
import { EnterpriseCar } from "../vehicle/EnterpriseCar";
import { Vehicle } from "../vehicle/Vehicle";
import { CustomerVehicleFactory } from "./CustomerVehicleFactory";

export class EnterpriseCustomerVehicleFactory implements CustomerVehicleFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}