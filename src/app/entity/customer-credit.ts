import { IProduct } from './product';

export interface ICustomerCredit {
    id: number;
    product: IProduct;
    plan: string;
    paymentType: string;
    totalPayments: number;
    payments: number;
}
