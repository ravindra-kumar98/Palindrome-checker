const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');


function regEx(str)
{
    return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}
function valid()
{
    const inputValue = textInput.value.trim();
    if (inputValue === "")
    {
        alert("Please input a value");
        return;
    }
    const cleanedValue = regEx(inputValue);
    const reversedValue = cleanedValue.split("").reverse().join("");
    if (cleanedValue === reversedValue)
    {
        result.innerText = `"${inputValue}" is a palindrome`;
    } else
    {
        result.innerText = `"${inputValue}" is not a palindrome`;
    }

}

checkBtn.addEventListener("click", valid);
