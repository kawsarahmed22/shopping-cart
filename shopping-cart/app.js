function updateProduct(product, price, isIncreaseing){
    const productInput = document.getElementById(product+'-number')
    let productInputNumber = productInput.value;

    if(isIncreaseing == true){
        productInputNumber = parseInt(productInputNumber) +1;
    }
    else if (productInputNumber > 0){
        productInputNumber = parseInt(productInputNumber) -1;
    }
    productInput.value = productInputNumber;


    const phoneTotal = document.getElementById(product+'-total');
    const phoneTotalNumber = phoneTotal.innerText;
    phoneTotal.innerText = productInputNumber * price;
    calculateTotal();

}
function getInputValue(product){
    const productInput = document.getElementById(product+'-number');
    const productInputNumber = parseInt(productInput.value);
    return productInputNumber;
}


function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const casseTotal = getInputValue('case') * 59;
    document.getElementById('sub-total').innerText = phoneTotal + casseTotal;
}


// Increase Decrease Event Handler

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct('phone', 1219, true)
    
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProduct('phone', 1219, false)
    
})
document.getElementById('case-plus').addEventListener('click', function(){
    updateProduct('case', 59, true)
    
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProduct('case', 59, false)
    
})