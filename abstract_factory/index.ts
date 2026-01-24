import { EnterpriseCustomerVehicleFactory } from "./factories/EnterpriseCustomerVehicleFactory";
import { IndividualCustomerVehicleFactory } from "./factories/IndividualCustomerVehicleFactory";

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle("Fusca", "João");
const car2 = individualFactory.createVehicle("Gol", "Maria");

car1.pickUp();
car2.pickUp();