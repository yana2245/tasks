
function parseCount(value) {
    const parsed = Number.parseInt(value);
        if(Number.isNaN(parsed)) throw new Error('Невалидное значение');
            return parsed;
    }
    
    function validateCount(value) {
        try {
           return parseCount(value);
        } catch(err) {
            return ('Ошибка');
        }
    }



class Triangle{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        
       if(a + b < c || a + c < b || b + c < a) {
          throw new Error('Треугольник с такими сторонами не существует'); 
       } 
    }
    getPerimeter() {
        return this.a + this.b + this.c;

    }
    getArea() {
        const p =  (this.a + this.b + this.c) / 2; 
        const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return square.toFixed(3);
    }
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        let triangle = {
            getArea: () => 'Ошибка! Треугольник не существует',
            getPerimeter: () => 'Ошибка! Треугольник не существует'
        };
        return triangle;
    }
}

