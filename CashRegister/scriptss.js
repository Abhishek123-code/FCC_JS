let price = 3.26;
const cid = [
    ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const register = document.getElementById("register-body");
const totalPrice = document.getElementById("total-price").textContent;
const dueChange = document.getElementById("change-due");

const MoneyInRegister = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

let totalMoney = cid.reduce((ar, el) => ar + el[1], 0).toFixed(2);

const displayChange = (arr) => {
    dueChange.insertAdjacentHTML("beforeend", "<p>status: OPEN</p>");
    arr.forEach(el => {
        const list = `<p>${el[0]}: ${el[1]}</p>`;
        dueChange.insertAdjacentHTML("beforeend", list);
    });
};

const RegisterDisplay = (amountTotal) => {
    amountTotal.forEach(el => {
        const list = `<p>${el[0]}: ${el[1]}</p>`;
        register.insertAdjacentHTML("beforeend", list);
    });
};
RegisterDisplay(cid);

const restoreDefault = () => {
    cash.value = "";
    dueChange.innerHTML = "";
};

const moneyReturned = (num) => {
    let sum = 0;
    let val = 0, rem = 0;
    let reversedMoney = [...cid].reverse();
    console.log(reversedMoney);
    const displayArr = [];

    for (let i = 0; i < reversedMoney.length; i++) { // Changed loop to iterate over reversedMoney
        if (num != 0 && MoneyInRegister[i] <= num && val * MoneyInRegister[i] <= reversedMoney[i][1]) {
            if (Math.floor(num / MoneyInRegister[i]) * MoneyInRegister[i] <= reversedMoney[i][1]) {
                val = Math.floor(num / MoneyInRegister[i]);
                displayArr[i] = [reversedMoney[i][0], val * MoneyInRegister[i]];
                sum += val * MoneyInRegister[i];
                rem = (num % MoneyInRegister[i]).toFixed(2);
            } else {
                val = Math.floor(num / reversedMoney[i][1]);
                displayArr[i] = [reversedMoney[i][0], val * reversedMoney[i][1]];
                sum += val * reversedMoney[i][1];
                rem = (num % reversedMoney[i][1]).toFixed(2);
            }
            num = rem;
        }
    }
    console.log(displayArr);
    displayChange(displayArr);
    for (let i = 0; i < reversedMoney.length; i++) {
        if (displayArr[i]) {
            reversedMoney[i][1] = reversedMoney[i][1] - (displayArr[i][1] || 0);
        }
    }
    console.log(reversedMoney);
    console.log(sum.toFixed(2));
};

purchaseBtn.addEventListener("click", () => {
    const returnMoney = cash.value - price;
    console.log(returnMoney);
    if (cash.value === "") {
        return;
    }
    if (cash.value < price) {
        alert("Customer does not have enough money to purchase the item");
        cash.value = "";
        return;
    }
    if (cash.value > totalMoney) {
        dueChange.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }
    if (Number(cash.value) === price) {
        dueChange.textContent = "No change due - customer paid with exact cash";
        cash.value = "";
        return;
    }
    restoreDefault();
    moneyReturned(returnMoney.toFixed(2));
    totalMoney=totalMoney-returnMoney;
});