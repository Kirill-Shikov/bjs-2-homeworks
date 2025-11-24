// ЗАДАЧА 1
window.parseCount = function(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    return parsedValue;
};

window.validateCount = function(value) {
    try {
        return window.parseCount(value);
    } catch (error) {
        return error;
    }
};

// ЗАДАЧА 2
window.Triangle = class {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(area.toFixed(3));
    }
};

window.getTriangle = function(a, b, c) {
    try {
        return new window.Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
};