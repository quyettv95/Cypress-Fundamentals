"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, quantity, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
    getPrice() {
        return this.price;
    }
    getQuantity() {
        return this.quantity;
    }
}
exports.Product = Product;
