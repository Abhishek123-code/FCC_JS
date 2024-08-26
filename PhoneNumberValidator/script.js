const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const regex = /^1?\s?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;

const displayResult = (output, reslutClass) => {
    const results = document.createElement("p");
    results.textContent = output;
    results.className = reslutClass;
    result.appendChild(results);
}

const checkNumber = () => {
    const userInput = input.value;
    input.value = "";
    console.log(userInput)
    if (userInput === "") {
        alert("Please provide a phone Number");
        return;
    }
    if (regex.test(userInput)) {
        displayResult(`Valid US number: ${userInput}`, "valid");
    }
    else if (!regex.test(userInput)) {
        displayResult(`Invalid US number: ${userInput}`, "inValid");
    }

}
checkBtn.addEventListener("click", checkNumber);
clearBtn.addEventListener("click", () => result.textContent = "");