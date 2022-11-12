
function navigateToCheckoutFormPage(billingCycle){
    if(billingCycle===1){
        sessionStorage.setItem('pricing', "Monthly");
         
    }
    if(billingCycle===2){
        sessionStorage.setItem('pricing', "Yearly");
    }
    document.location.href = 'checkout_form.html';
}

function navigateToThankYouPage(){
    document.location.href = 'thank_you.html';
}

function getPlanName(){
    let data = sessionStorage.getItem('planName');
    return data;
}

function getPlanMonthlySubPrice(){
    let data = sessionStorage.getItem('planMonthlySubPrice');
    return data;
}

function getPlanYearlySubPrice(){
    let data = sessionStorage.getItem('planYearlySubPrice');
    return data;
}

function getPlanYearlyTotalPrice(){
    let data = sessionStorage.getItem('planYearlySubPrice');
    return data*12;
}
function getMonthlyOrYearly(){
   
    if(sessionStorage.getItem('pricing')==="Monthly"){
    return "Monthly";
    }
    if(sessionStorage.getItem('pricing')==="Yearly"){
       return "Yearly";
    }
   
}
function getprice(){
   let data;
    if(sessionStorage.getItem('pricing')==="Monthly"){
    data=getPlanMonthlySubPrice();
    }
    if(sessionStorage.getItem('pricing')==="Yearly"){
       data=getPlanYearlyTotalPrice();
    }
    return data;
   
}
function getpriceCycle(){
    let data;
     if(sessionStorage.getItem('pricing')==="Monthly"){
        data=getPlanMonthlySubPrice();
     }
     if(sessionStorage.getItem('pricing')==="Yearly"){
        data=getPlanYearlySubPrice();
     }
     return data;
 }

