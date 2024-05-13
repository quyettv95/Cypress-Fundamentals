"use strict";
var Status;
(function (Status) {
    Status[Status["Available"] = 0] = "Available";
    Status[Status["UnAvailable"] = 1] = "UnAvailable";
    Status[Status["Ordered"] = 2] = "Ordered";
})(Status || (Status = {}));
class Book {
    constructor(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}
function getMin(numbers) {
    let min = numbers.shift();
    if (!min) {
        throw "Array is not valid";
    }
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(getMin([-1, 3, 5, 8, -2]));
class Main {
    static run() {
        let books = [];
        books.push(new Book('Tấm vải đỏ', 'Việt Anh', Status.Available));
        books.push(new Book('Tấm vải đỏ 1', 'Việt Anh', Status.Available));
        books.push(new Book('Tấm vải đỏ 2', 'Việt Anh', Status.Ordered));
        books.push(new Book('Tấm vải đỏ 3', 'Việt Anh', Status.UnAvailable));
        books.push(new Book('Tấm vải đỏ 4', 'Việt Anh', Status.UnAvailable));
        for (let book of books) {
            if (book.status == Status.Ordered) {
                console.log(book.title);
            }
        }
    }
    static printBooks(...books) {
        for (let book of books) {
            console.log(book.title);
        }
    }
}
//Main.run();
Main.printBooks(new Book('Tấm vải đỏ', 'Việt Anh', Status.Available), new Book('Tấm vải đỏ 2', 'Việt Anh', Status.Available));
