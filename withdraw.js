document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputArea = document.getElementById('withdraw-input-field');
    const newWithdrawAmount = parseFloat(withdrawInputArea.value);
    withdrawInputArea.value = '';

    // validation
    if(isNaN(newWithdrawAmount)){
        alert('Please input any amount.');
        return;
    }
    

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);
    const previousWithdrawAmount = withdrawTotalAmount + newWithdrawAmount;
    withdrawTotal.innerText = previousWithdrawAmount ;

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalance.innerText);
    const totalWithdrawBalanceAmount = totalBalanceAmount - newWithdrawAmount;
    totalBalance.innerText = totalWithdrawBalanceAmount;
})

// For Enter Button
document.getElementById('withdraw-input-field').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        document.getElementById('withdraw-btn').click();
    }
})