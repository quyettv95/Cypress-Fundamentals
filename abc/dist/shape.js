"use strict";
class Shape {
    showInfo() {
        console.log(`Area: ${this.getArea()}`);
        console.log(`Perimeter: ${this.getPerimeter()}`);
    }
}
class Square extends Shape {
    constructor(width) {
        super();
        this.width = width;
        this.showInfo();
    }
    getArea() {
        return this.width * this.width;
    }
    getPerimeter() {
        return 4 * this.width;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return Math.PI * this.radius * 2;
    }
}
let sq = new Square(10);
sq.showInfo();
