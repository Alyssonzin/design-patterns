import { Customer } from "../customer/Customer";
import { Vehicle } from "../vehicle/Vehicle";

export interface CustomerVehicleFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}