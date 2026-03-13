let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
let haveskis = false;
let havemeat = false;
//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function home() {
    clear();
    print("\nYou are at Home!");
    print("\nWhere do you want to go next? Type one of these choices:" +
        "\n\tGarage" + "\n\tCar" + "\n\tMeadow");
    
    function processInput(input){
        if (input.toLowerCase() === "garage") {
            garage();
        } 
	    else if (input.toLowerCase() === "car"){
		car();
	}
	    else if (input.toLowerCase() === "meadow"){
		meadow();
	}
	    else {
            stayHere();
            waitThenCall(home);
        }
    }
    waitForInput(processInput);
}

function garage() {
    clear();
    print("\nYou are in the Garage!");
	print("\nYou see big open Garage with what looks like a treadmill and weights on one side, and a dark coordidor on the other");
    print("\nWhere do you want to go next? Type one of these choices:" +
        "\n\tHome" + "\n\tWorkout Equipment" + "\n\tDark Corridor");
    
    function processInput(input){
        if (input.toLowerCase() === "home") {
            home();
        } 
	    else if(input.toLowerCase() === "workout equipment"){
		workoutEquipment();
	}
	    else if (input.toLowerCase() === "dark corridor"){
		darkCorridor();
	}
	    else {
            stayHere();
            waitThenCall(garage);
        }
    }
    waitForInput(processInput);
}
function workoutEquipment(){
	clear();
	print("\nYou step closer to the workout equipment and notice that it is all stacked on top of each other");
  setTimeout(function() {
                print("...");
                setTimeout(function() {
                    print("...");
		})
  })
	print("\nSuddenly the equipment shudders and falls, crushing you beneath it!");
	print("\nPress Go to continue")
	function processInput(input){
	if (input.toLowerCase() === "go"){
	death();		
}
}
waitForInput(processInput);
}
function death(){
	clear();
print("\nYou died");

        print("\nwould you like to try again? Say yes or no");
        function processInput(input){
            if (input.toLowerCase() === "yes") {
                haveskis = false;
                havemeat = false;
                start();
            } else if (input.toLowerCase() === "no") {
                print("\nok, better luck next time!");
                gameActive = false;
            } else {
                print("Please type 'yes' or 'no'");
            }
        }

}
function darkCorridor(){
	clear();
	print("\nYou enter the Corridor, seeing nothing, you continue down the corridor");
  setTimeout(function() {
                print("...");
                setTimeout(function() {
                    print("...");
		})
  })
	print("\nAt the end of the corridor, you stumble upon a rack of Skis!");
	haveskis = true;
	print("\nYou collect your skis and are ready to go to the ski hill. Now return home" + "\n\tType Go Back Home");
	function processInput(input){
		if(input.toLowerCase() === "go back home"){
			home();
		}
		else{
			stayHere();
			waitThenCall(darkCorridor);
		}
	}
waitForInput(processInput);
}
	
function car() {
    clear();
    print("\nYou are at the Car");
    print("\nWhere do you want to go next? Type one of these choices:" +
        "\n\tGo Back Home" + "\n\tGo for a Ride");
    
    function processInput(input){
        if (input.toLowerCase() === "go back home") {
            home();
        } else if (input.toLowerCase() === "go for a ride"){
		ride();
	}else{
            stayHere();
            waitThenCall(car);
        }
    }
    waitForInput(processInput);
}
function ride() {
	clear();
	if (haveskis === true){
		winningdrive();
	}
	else{
		carAccident();
	}

waitForInput(processInput);
}
function carAccident(){
	clear();
	print("\nYou get into your car, the seats are nice a plush.");
	print("\nThey");
	print("\n...");
	print("\nfeel");
	print("\n...");
	print("\nso");
	print("\n...");
	print("\ncomforting");
	print("\nYour eyes close and head droops");
	print("\nSuddenly! Your car swerves and you slam into a metal pole");
	death();
}
function winningdrive(){
	clear();
	print("\nYou get into your car and drive off");
	print("\nYou arrive at the ski hill and have a fun day of skiing.");
	print("\nCONGRATS ON SURVIVING!");
	print("\nType yes to start over");
	function processInput(input){
		if (input.toLowerCase() === "yes"){
			start();
		}
}
waitforInput(processInput);
}
function meadow() {
    clear();
    print("\nYou are in the meadow");
    print("\nWhere do you want to go next? Type one of these choices:" +
        "\n\tHome" +"\n\tBonfire");
    
    function processInput(input){
        if (input.toLowerCase() === "home") {
            home();
        } 
	    else if (input.toLowerCase() === "bonfire"){
		bonfire();
	}
	    else {
            stayHere();
            waitThenCall(meadow);
        }
    }
    waitForInput(processInput);
}
function bonfire() {
    clear();
    print("\nYou are at the Bonfire");
    print("\nWhere do you want to go next? Type one of these choices:" +
        "\n\tBack to the Meadow");
    
    function processInput(input){
        if (input.toLowerCase() === "back to the meadow") {
            meadow();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            home();
    }
    waitForInput(processInput);
}
