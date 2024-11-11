// Abstract Shape class
abstract class Shape {
    // Abstract methods to be implemented by derived classes
    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;

    // Optional method that can be inherited as-is
    describe(): string {
        return `This is a shape with area ${this.calculateArea()} and perimeter ${this.calculatePerimeter()}.`;
    }
}

// Circle class extending Shape
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    // Implementing the abstract method
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Rectangle class extending Shape
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    // Implementing the abstract method
    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Usage
const myCircle = new Circle(5);
console.log(myCircle.describe()); // This is a shape with area 78.54 and perimeter 31.42.

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.describe()); // This is a shape with area 50 and perimeter 30.
