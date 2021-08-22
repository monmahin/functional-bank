function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue
}
function updateTotalField(totalFieldId, amount) {
    const updateTotal = document.getElementById(totalFieldId);
    const previousTotal = parseFloat(updateTotal.innerText)
    updateTotal.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const currentBalance = parseFloat(balanceTotal.innerText);
    if (isAdd == true) {
        balanceTotal.innerText = currentBalance + amount;
    }
    else {
        balanceTotal.innerText = currentBalance - amount;
    }
}

//....................... handle deposit button.................//
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    // update deposit and balance when deposit

    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    else {
        alert("You Dont have a permission to deposit")
    }
})


// ............handle withdraw  button............//

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input')
    const balanceTotal = document.getElementById('balance-total');
    const currentBalance = parseFloat(balanceTotal.innerText);
    // update withdraw and balance when withdraw
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    // if (withdrawAmount > currentBalance) {
    //     console.log('You can not withdraw more than what you have in your account');
    // }

    else {
        alert("You Dont have a permission to withdraw")
    }
})

