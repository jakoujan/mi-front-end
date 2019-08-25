import { ICustomerCredit } from './customer-credit';

export interface ICustomer {
    id: number;
    customerUser: string;
    password: string;
    customerName: string;
    address: string;
    customerCredits: Array<ICustomerCredit>;
}
