const add = (num1, num2) => {
    const sum = num1 + num2

    return sum
}

const divide = (num1, num2) => {
    const divided = num1 / num2

    return divided
}

const subtract = (num1, num2) => {
    const subtracted = num1 - num2

    return subtracted
}

const multiply = (num1, num2) => {
    const multiplied = num1 * num2

    return multiplied
}

const square = (num1) => {
    const root = num1 * num1

    return root
}

const calculator = (operation, num1, num2) => {
    switch (operation) {
        case 'add':
            console.log(add(num1, num2));
            break;
        case 'divide':
            console.log(divide(num1, num2));
            break;
        case 'subtract':
            console.log(subtract(num1, num2));
            break;
        case 'multiply':
            console.log(multiply(num1, num2));
            break;
        case 'square':
                console.log(square(num1, num2));
                break;
        default: 
            console.log(`Please enter a different value.`);
    }
}

calculator('add', 10, 20);
calculator('subtract', 30, 15)
calculator('square', 5)