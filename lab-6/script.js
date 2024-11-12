// JavaScript Function to Check Even or Odd
function checkEvenOdd() {
    const input = document.getElementById('numberInput').value;
    const number = parseInt(input);

    if (isNaN(number)) {
        alert("Please enter a valid number.");
    } else if (number % 2 === 0) {
        alert("The entered number is even.");
    } else {
        alert("The entered number is odd.");
    }
}
