

const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

// SVG generating fuction dependent on input
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


  // creates SVG content based on user input
  const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="225">
        ${shapeEl.getSVG()}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="${textColor}">${text}</text>
      </svg>
    `;
    // saves SVG to logo.svg filepath
    fs.writeFileSync("logo.svg", svgContent);
}

// prompting user with inquirer package
function promptUser() {
    inquirer
        .prompt([
            {
                name: "text",
                message: "Enter up to three characters for text:",
                validate: (input) => {
                    return input.length > 0 && input.length <= 3;
                },
            },
            {
                name: "textColor",
                message: "Enter text color:",
            },
            {
                type: "list",
                name: "shape",
                message: "Select shape:",
                choices: ["circle", "triangle", "square"],
            },
            {
                name: "shapeColor",
                message: "Enter shape color:",
            },
            
        ])
        .then((answers) => {
            // generates logo based on user choices
            genLogo(
                answers.text,
                answers.textColor,
                answers.shape,
                answers.shapeColor
            );
            console.log("Generated logo.svg");
        });
}

// initializing the app
promptUser();