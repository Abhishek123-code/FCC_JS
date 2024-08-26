const number = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

let result = "";
const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

const convertToRoman = (num) => {
    for (let i = 0; i < numbers.length; i++) {
        while (num - numbers[i] >= 0) {
            result = result + romans[i];
            console.log(result);
            num -= numbers[i];
        }
        if (num === 0) {
            break;
        }
    }
    return result;
}

const convert = () => {
    const intNum = parseInt(number.value);
    if (number.value === "") {
        output.classList.remove("hidden");
        output.setAttribute("class", "error");
        output.innerText = "Please enter a valid number"
    }
    else if (intNum <= 0 || intNum > 3999) {
        console.log("error part")
        output.classList.remove("hidden");
        output.setAttribute("class", "error");
        output.innerText = `Please enter a number ${intNum <= 0 ? "greater" : "less"} than or equal to ${intNum <= 0 ? "1" : "3999"}`
        console.log(output.innerText);
    } else {
        console.log("normal part");
        output.classList.remove("hidden");
        output.setAttribute("class", "output");
        output.innerText = `${convertToRoman(intNum)}`;
    }
    result = "";
};


button.addEventListener("click", convert);
number.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        convert();
});
