const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

function genLogo(text, textColor, shape, shapeColor) {
    let shapeEl;

    switch (shape) {
        case "circle":
            shapeEl = new Circle(shapeColor);
            break;
        case "triangle":
            shapeEl = new Triangle(shapeColor);
            break;
        case "square":
            shapeEl = new Square(shapeColor);
            break;
        default:
            throw new Error("Invalid shape");
    }
}

const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg width="300" height="300">
        ${shapeEl.getSVG()}
        <text x="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${textColor}">${text}</text>
    </svg>
    `;