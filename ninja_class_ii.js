function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!")
    }

    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }

    this.drinkSake = function(){
        this.health += 10;
    }

    this.punch = function(other_ninja){
        if(!(other_ninja instanceof Ninja)){
            console.log(other_ninja + " is not a Ninja!");
        }
        else{
            other_ninja.health -= 5;
            console.log(other_ninja.name + " was punched by " + this.name + " and lost 5 Health!")
        }
    }

    this.kick = function(other_ninja){
        if(!(other_ninja instanceof Ninja)){
            console.log(other_ninja + " is not a Ninja!");
        }
        else{
            lose_hp = strength * 15;
            other_ninja.health -= lose_hp;
            console.log(other_ninja.name + " was kicked by " + this.name + " and lost " + lose_hp + " Health!")
        }
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
