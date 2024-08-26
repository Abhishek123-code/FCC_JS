const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")
const input=document.querySelector(`#text-input`)

const filter = (str) => {
    const regex = /[_+\W+_+]/g;
    return str.replace(regex,"").toLowerCase();
}

const check = (input) => {
    const filterInput = filter(input)
    const reverseString = filterInput.split('').reverse().join('');
    console.log(filterInput)
    console.log(reverseString)
    const resultMsg =`<strong>${input}</strong> ${filterInput === reverseString? "is":"is not"} a palindrome`
    result.innerHTML=resultMsg;

}

function palindrome()
{
    const input=document.querySelector(`#text-input`).value;
    if(input.trim()===""){
        alert("Please input a value")
    }
    else{
        check(input)
        textInput.value=''
    }
}
checkBtn.addEventListener("submit",palindrome);