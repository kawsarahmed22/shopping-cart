function getInputValue(product, isIncreaseing){
    const productInput = document.getElementById(product+'-number')
    const productInputNumber = parseInt(productInput.value);
    if(isIncreaseing == true){
        productInput.value = productInputNumber +1
    }
    else if (productInputNumber > 0){
        productInput.value = productInputNumber -1
    }
}




// Increase Decrease Event Handler

document.getElementById('phone-plus').addEventListener('click', function(){
    getInputValue('phone', true)
    
})
document.getElementById('phone-minus').addEventListener('click', function(){
    getInputValue('phone', false)
    
})
document.getElementById('case-plus').addEventListener('click', function(){
    getInputValue('case', true)
    
})
document.getElementById('case-minus').addEventListener('click', function(){
    getInputValue('case', false)
    
})