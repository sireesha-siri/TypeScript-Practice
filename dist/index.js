"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            return a % b;
            break;
    }
}
const additionResult = calculate(10, 5, '+');
const subtractionResult = calculate(10, 5, '-');
const multiplicationResult = calculate(10, 5, '*');
const divisionResult = calculate(10, 5, '/');
const invalidResult = calculate(10, 5, '%');
console.log('Addition:', additionResult);
console.log('Subtraction:', subtractionResult);
console.log('Multiplication:', multiplicationResult);
console.log('Division:', divisionResult);
console.log('Invalid Operation:', invalidResult);
exports.default = calculate;
