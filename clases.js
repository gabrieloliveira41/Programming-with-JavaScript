class animals{
    legs(){
        console.log("the animal number of legs");
    }
}
class bird extends animals{
    legs(){
        console.log("this bird has:");
    }
}

class mamals extends animals{
    legs(){
        console.log("this mamal has:");
    }
}

class human extends mamals{
    legs(){
    super.legs();
        console.log("two legs and two arms!");
    }
}
class horse extends mamals{
    legs(){
        super.legs();
        console.log("four legs!");
    }
}
class penguin extends bird{
    legs(){
        super.legs();
        console.log("two legs and two wings!");
    }
}
var mathew= new human();
var stalion = new horse();
var happy = new penguin();
mathew.legs();
stalion.legs();
happy.legs();
