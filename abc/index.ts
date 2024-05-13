import { Invoice } from "./invoice";
import { Product } from "./product";
import { PurchaseInvoice } from "./PurchaseInvoice";
import { SalesInvoice } from "./SalesInvoice";

class Program {
    static run() {
        let invoices: SalesInvoice[] = [];
        invoices.push(
            new SalesInvoice(
                [
                    new Product(1, "Iphone", 10000000, 1, "This is Iphone Description"),
                    new Product(2, "Macbook", 20000000, 2, "This is Macbook Description"),
                ],
                "Viet Anh",
                "08/05/2024"
            )
        );
        invoices.push(
            new SalesInvoice(
                [
                    new Product(1, "Iphone", 20000000, 1, "This is Iphone Description"),
                    new Product(2, "Macbook", 20000000, 10, "This is Macbook Description"),
                ],
                "Viet Anh",
                "08/05/2024"
            )
        );
        invoices.push(
            new PurchaseInvoice(
                [
                    new Product(1, "Iphone", 10000000, 1, "This is Iphone Description"),
                    new Product(2, "Macbook", 50000000, 2, "This is Macbook Description"),
                ],
                "Viet Anh",
                "08/05/2024"
            )
        );

        let profit = 0;


        for (let invoice of invoices) {
            profit += invoice.getTotal();
        }

        console.log(`Profit: ${profit}`)
    }
}


Program.run();