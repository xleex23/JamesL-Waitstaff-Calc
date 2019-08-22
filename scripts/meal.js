'use strict';

function mealDetails(){
    let mealPrice=$('#price').val();
    let taxRate=$('#tax-rate').val();
    let tipPercent=$('#tip-percent').val();
    let subTotal= mealPrice * (1+ taxRate/100);
    let tip = mealPrice * (tipPercent/100);
    total = subTotal + tip;
};

function handleMealInfo(){
  $()
}