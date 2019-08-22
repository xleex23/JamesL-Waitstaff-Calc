'use strict';

function mealDetails(){
    let mealPrice=$('#price').val();
    let taxRate=$('#tax-rate').val();
    let tipPercent=$('#tip-percent').val();
    let subTotal= mealPrice * (1+ taxRate/100);
    let tip = mealPrice * (tipPercent/100);
    let total = subTotal + tip;
};

function handleMealInfo(){
  mealDetails();
  $(".meal-details").on('click', '.submitInfo', function(){
    return $('.js-customer').html(`
    <li>Subtotal: ${subTotal}</li>
    <li>Tip: ${tip}</li>
    <li>Total: ${total}</li>
    `)
  });
};

$(mealDetails);