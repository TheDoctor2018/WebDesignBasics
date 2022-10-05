//Example2
//Does the same as example1 but with this. which allows it to have its method used in multiple objects without issues.
var purchase1={
    shoes: 50,
    stateTax:1.2,
    totalPrice: function()
    {
        var calculation = this.shoes * this.stateTax;
        console.log('total price: ', calculation);
    }

}

purchase1.totalPrice();
