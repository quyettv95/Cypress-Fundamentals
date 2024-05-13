"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseInvoice = void 0;
const invoice_1 = require("./invoice");
class PurchaseInvoice extends invoice_1.Invoice {
    getTotal() {
        let total = 0;
        for (let product of this.products) {
            total += product.getPrice() * product.getQuantity();
        }
        return -total;
    }
}
exports.PurchaseInvoice = PurchaseInvoice;
