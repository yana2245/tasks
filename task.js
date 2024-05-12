function parseCount(value) {
    const parsed = Number.parseFloat(value); // int to float
    if (Number.isNaN(parsed)) throw new Error('Невалидное значение');
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return err; // возвращать ошибку, а не сообщение
    }
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;

    }

    get area() {
        const p = (this.a + this.b + this.c) / 2;
        const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number.parseFloat(square.toFixed(3)); // return str to float
    }
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            get area() { return 'Ошибка! Треугольник не существует' }, // function to get func
            get perimeter() { return 'Ошибка! Треугольник не существует' } // function to get func
        };
    }
}
