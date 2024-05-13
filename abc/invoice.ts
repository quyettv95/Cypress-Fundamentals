import { Product } from "./product";

export abstract class Invoice {
    protected products: Product[];
    protected customerName: string;
    protected createdAt: string;

    constructor(products: Product[], customerName: string, createdAt: string) {
        this.products = products;
        this.customerName = customerName;
        this.createdAt = createdAt;
    }

    getTotal(): number {
        let total: number = 0;
        for (let product of this.products) {
            total += product.getPrice() * product.getQuantity();
        }

        return total;
    }

}