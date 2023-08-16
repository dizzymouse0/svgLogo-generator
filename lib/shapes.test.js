const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('generate correct SVG for Circle', () => {
        const circle = new Circle('red');
        expect(circle.getSVG()).toEqual('<circle cx="150" cy="100" r="100"');
    });
});

describe('Triangle', () => {
    test('generate correct SVG for Triangle', () => {
        const triangle = new Triangle('blue');
        expect(triangle.getSVG()).toEqual('<polygon points="150,20 50,180 250,180" fill="blue" />');
    });
});
