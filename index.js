const checkedBox = document.getElementById("my-checkbox-Subsrcibe-button")
const visaBtn = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("mastercardBtn")
const PaypalBtn = document.getElementById("PaypalBtn")
const submitBtn = document.getElementById("submit")
const subResultTEXT = document.getElementById("subResult")
const paymentResultTEXT = document.getElementById("paymentResult")


submitBtn.onclick = function(){
    if(checkedBox.checked){
        subResultTEXT.textContent = ("YOU are Subrcibed!")
    }

    else{
        subResultTEXT.textContent = ("YOU are not Subrcibed, you must Subrcibe!")
    }

    if(visaBtn.checked){
        paymentResultTEXT.textContent = ("You are paying with Visa!")
    }
    
    else if( mastercardBtn.checked){
        paymentResultTEXT.textContent = ("You are paying with MasterCard!")
    }
    else if( PaypalBtn.checked){
        paymentResultTEXT.textContent = ("You are paying with PayPal!")
    }

    else{
        paymentResultTEXT.textContent = ("You must select a payment method!")
    }
}