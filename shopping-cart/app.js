function getInputValue(product, isIncreaseing){
    const phoneInput = document.getElementById(product+'-number')
    const phoneInputNumber = parseInt(phoneInput.value);
    if(isIncreaseing == true){
        phoneInput.value = phoneInputNumber +1
    }
    else if (phoneInputNumber > 0){
        phoneInput.value = phoneInputNumber -1
    }
}





// Increase Decrease Event Handler

document.getElementById('phone-plus').addEventListener('click', function(){
    getInputValue('phone', true)
    
})
document.getElementById('phone-minus').addEventListener('click', function(){
    getInputValue('phone', false)
    
})