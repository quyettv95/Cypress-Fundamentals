"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(products, customerName, createdAt) {
        this.products = products;
        this.customerName = customerName;
        this.createdAt = createdAt;
    }
    getTotal() {
        let total = 0;
        for (let product of this.products) {
            total += product.getPrice() * product.getQuantity();
        }
        return total;
    }
}
exports.Invoice = Invoice;
