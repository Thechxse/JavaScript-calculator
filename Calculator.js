function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function division(num1, num2) {
    return num1 / num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter first number"));
let choice = Number(
    prompt(
        "What operation would you \n 1. Addition \n 2. Subtraction \n 3.Division \n 4. Multiplication"
    )
);

if (choice == 1) {
    console.log(addition(num1, num2));
} else if (choice == 2) {
    console.log(subtraction(num1, num2));
} else if (choice == 3) {
    console.log(division(num1, num2));
} else if (choice == 4) {
    console.log(multiplication(num1, num2));
} else {
    console.log("Wrong input");
}
