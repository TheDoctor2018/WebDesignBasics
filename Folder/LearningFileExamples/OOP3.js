//Exmple3
var purchase1={
    shoes: 100,
    stateTax:1.2,
    totalPrice: function()
    {
        var calculation = this.shoes * this.stateTax;
        console.log('total price: ', calculation);
    }

}
purchase1.totalPrice();

var purchase1={
    shoes: 50,
    stateTax:1.2,
    totalPrice: function()
    {
        var calculation = this.shoes * this.stateTax;
        //var calculation = purchase1.shoes * purchase1.stateTax;
        //If both parts had the same naming convention error would occur, 
        //this i needed for both to have the same method
        console.log('total price: ', calculation);
    }

}
purchase1.totalPrice();