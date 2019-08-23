'use strict';

// function mealDetails(){
//     let mealPrice=$('#price').val();
//     let taxRate=$('#tax-rate').val();
//     let tipPercent=$('#tip-percent').val();
//     let subTotal= mealPrice * (1+ taxRate/100);
//     let tip = mealPrice * (tipPercent/100);
//     let total = subTotal + tip;
// };

function handleMealInfo(){
  // mealDetails();
  const mealPrice=$('#price').val();
  console.log(mealPrice)
  const taxRate=$('#tax-rate').val();
  const tipPercent=$('#tip-percent').val();
  const subTotal= mealPrice * (1+ taxRate/100);
  const tip = mealPrice * (tipPercent/100);
  const total = subTotal + tip;

  $('.meal-details').on('click', '.submitInfo', function(event){
    event.preventDefault();

    $('.js-customer').html(`
    <li>Subtotal: $${subTotal}</li>
    <li>Tip: $${tip}</li>
    <li>Total: $${total}</li>
    `)
  });
};

$(handleMealInfo);