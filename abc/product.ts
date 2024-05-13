export class Product {
    private id: number;
    private name: string;
    private price: number;
    private quantity: number;
    private description: string;

    constructor (id: number, name: string, price: number, quantity: number, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }

    public getPrice() {
        return this.price;
    }

    public getQuantity() {
        return this.quantity;
    }
}