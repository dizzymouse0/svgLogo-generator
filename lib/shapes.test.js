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
            break
    }
}