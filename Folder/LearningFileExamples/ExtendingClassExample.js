//How to exted dog calss to catdogs so catdogs have the same methods and properties as dogs,
// even changing the methods as well

//Note, you can extend from the same file.
class trucks extends Car
{

    constructor(color, speed, horsepower,carryingCapacity){
        super(color,speed,horsepower)//Inherits from car
        //New property
        this.carryingCapacity = carryingCapacity;
    }

    //new methods only available to the truck
    limitWeight(){
        console.log("Put less weigth before you breake the suspension, you dummy!")
    }

    //old Method modified for the truck
    turboOn(){
        super.turboOn();//inherits from car
        console.log("Now Dummy!")
        
    }


}

var newTruck = new trucks(blue,20,100,500);
newTruck.turboOn();
newTruck.limitWeight();