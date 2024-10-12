import { Customer } from "../protocols/customer";

export class IndividualCustomer implements Customer {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
}

export class EnterpriseCustomer implements Customer {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
}
