
function getInputValue (inputId){

    const inputFiled = document.getElementById(inputId);
    const inputValue = inputFiled.value;
    const  inpuAmmount = parseFloat(inputValue);
    inputFiled.value='';
    return inpuAmmount;

    
}

function updateTotalFiled (totalFiledId,ammount){
    const totalElement = document.getElementById(totalFiledId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + ammount;
}



function updateBalance(ammount,isAdd){

    const blanceTotal = document.getElementById('total-balance');
    const blanceTotalText = blanceTotal.innerText;
    const previousTotalBlance= parseFloat(blanceTotalText);

if(isAdd == true){
    blanceTotal.innerText = previousTotalBlance + ammount;

}
else{

    blanceTotal.innerText = previousTotalBlance - ammount;
}




}

document.getElementById('deposit-button').addEventListener('click',function(){
      const depositAmmount = getInputValue('deposit-input');
     if(depositAmmount > 0){
        updateTotalFiled('deposit-total',depositAmmount);
        updateBalance(depositAmmount,true);
      
     }

  
    


    
});


// total withdrawblance


document.getElementById('Withdraw-button').addEventListener('click', function(){
    // upadate total withdraw
    const withdrawAmmount = getInputValue('Withdraw-input');
    if(withdrawAmmount>0){
        updateTotalFiled('total-withdraw', withdrawAmmount);
        updateBalance(withdrawAmmount,false);
    }
   
 
})