import { ICalculateSum } from "./ICalculateSum";
import { Invoice } from "./invoice";

export class SalesInvoice extends Invoice implements ICalculateSum {
    
    getTotal(): number {
        let total: number = 0;
        for (let product of this.products) {
            total += product.getPrice() * product.getQuantity();
        }

        return total;
    }
}