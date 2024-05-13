abstract class Shape {
    abstract getArea(): number;
    abstract getPerimeter(): number;

    public showInfo(): void {
        console.log(`Area: ${this.getArea()}`);
        console.log(`Perimeter: ${this.getPerimeter()}`);
    }
}


class Square extends Shape {
    private width;
    constructor(width: number) {
        super();
        this.width = width;
        this.showInfo();
    }

    getArea(): number {
        return this.width * this.width;
    }

    getPerimeter(): number {
        return 4 * this.width;
    }
}

class Circle extends Shape {
    private radius;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter(): number {
        return Math.PI * this.radius * 2;
    }

}

let sq = new Square(10);
sq.showInfo();
