//Example 1
//Shoes
var purchase1={
    shoes: 100,
    stateTax:1.2,
    totalPrice: function()
    {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('total price: ', calculation);
    }

}
purchase1.totalPrice();
