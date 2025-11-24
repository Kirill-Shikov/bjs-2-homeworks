// ЗАДАЧА 1
function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    return parsedValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

// ЗАДАЧА 2
function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    
    if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Треугольник с такими сторонами не существует");
    }
}

Triangle.prototype.perimeter = function() {
    return this.a + this.b + this.c;
};

Triangle.prototype.area = function() {
    const p = this.perimeter() / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(area.toFixed(3));
};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            area: function() {
                return "Ошибка! Треугольник не существует";
            },
            perimeter: function() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}