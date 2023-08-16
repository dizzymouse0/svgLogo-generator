const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('generate correct SVG for Circle', () => {
        const circle = new Circle('red');
        expect(circle.getSVG()).toEqual('<circle cx="150" cy="100" r="100"');
    });
});