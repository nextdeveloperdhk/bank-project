document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInputArea = document.getElementById('deposit-input-field');
    const newDepositAmount = parseFloat(depositInputArea.value);
    depositInputArea.value = '';

    // validation
    if(isNaN(newDepositAmount)){
        alert('Please input any amount.');
        return;
    }

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmount = parseFloat(depositTotal.innerText);
    const previousDepositAmount = depositTotalAmount + newDepositAmount;
    depositTotal.innerText = previousDepositAmount;


    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalance.innerText);
    const totalDepositBalanceAmount = totalBalanceAmount + newDepositAmount;
    totalBalance.innerText = totalDepositBalanceAmount;
    
})

// For Enter Button
document.getElementById('deposit-input-field').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        document.getElementById('deposit-btn').click();
    }
})