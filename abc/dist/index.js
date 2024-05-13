"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const PurchaseInvoice_1 = require("./PurchaseInvoice");
const SalesInvoice_1 = require("./SalesInvoice");
class Program {
    static run() {
        let invoices = [];
        invoices.push(new SalesInvoice_1.SalesInvoice([
            new product_1.Product(1, "Iphone", 10000000, 1, "This is Iphone Description"),
            new product_1.Product(2, "Macbook", 20000000, 2, "This is Macbook Description"),
        ], "Viet Anh", "08/05/2024"));
        invoices.push(new SalesInvoice_1.SalesInvoice([
            new product_1.Product(1, "Iphone", 20000000, 1, "This is Iphone Description"),
            new product_1.Product(2, "Macbook", 20000000, 10, "This is Macbook Description"),
        ], "Viet Anh", "08/05/2024"));
        invoices.push(new PurchaseInvoice_1.PurchaseInvoice([
            new product_1.Product(1, "Iphone", 10000000, 1, "This is Iphone Description"),
            new product_1.Product(2, "Macbook", 50000000, 2, "This is Macbook Description"),
        ], "Viet Anh", "08/05/2024"));
        let profit = 0;
        for (let invoice of invoices) {
            profit += invoice.getTotal();
        }
        console.log(`Profit: ${profit}`);
    }
}
Program.run();
