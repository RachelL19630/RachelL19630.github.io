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
	waitThenCall(death);		
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
waitForInput(processInput);
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
		waitThenCall(winningdrive);
	}
	else{
		waitThenCall(carAccident);
	}

waitForInput(processInput);
}
function carAccident(){
	clear();
	print("\nYou get into your car, the seats are nice a plush.");
	print("\nThey");
	print("\nfeel");
	print("\nso");
	print("\ncomforting");
	print("\nYour eyes close and head droops");
	print("\nSuddenly! Your car swerves and you slam into a metal pole");
	waitThenCall(death);
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
		else{
			stayHere();
			waitThenCall(winningdrive);
		}
}
waitforInput(processInput);
}
function meadow() {
    clear();
    print("\nYou are in the meadow");
    print("\nWhere do you want to go next? Type one of these choices:" +
        "\n\tHome" +"\n\tBonfire" + "\n\tGo for a Walk");
    
    function processInput(input){
        if (input.toLowerCase() === "home") {
            home();
        } 
	    else if (input.toLowerCase() === "bonfire"){
		bonfire();
	}
	    else if (input.toLowerCase() === "go for a walk"){
		    walk();
	    }
	    else {
            stayHere();
            waitThenCall(meadow);
        }
    }
    waitForInput(processInput);
}
function walk(){
	clear();
	print("\nYou walk further into the meadow and come across a hiking trail in the forest.");
	print("\nYou decide to continue down it");
	print("Suddenly! A bear comes out of the woods!");
	if (havemeat === true){
		waitThenCall(niceBear);
	}
	else{
		waitThenCall(bearAttack);
	}
}
function niceBear(){
	clear();
	print("\nRemembering the meat you took from the bonfire, you shove the meat in the bears face.");
	print("\nThe bear sniffs it and gestures at you to follow him");
	print("\nYou follow the bear down a winding path, before stumbling upon the garage again.");
	print("\nThe bear nod towards the Dark Corridor. Following his instructions, you head down the corridor.");
	waitThenCall(darkCorridor);
}
function bearAttack(){
	print("\nThe bear sniffs you, and decides you smell like food");
	waitThenCall(death);
}
function bonfire() {
    clear();
    print("\nYou are at the Bonfire");
    print("\nWhere do you want to go next? Type one of these choices:" +
        "\n\tBack to the Meadow" + "\n\tSit at the fire");
   havemeat = true
    function processInput(input){
        if (input.toLowerCase() === "back to the meadow") {
            meadow();
        } else if (input.toLowerCase() === "sit at  the fire"){
		burnedAlive();
	}else{
            stayHere();
            waitThenCall(bonfire);
        }
    }
    waitForInput(processInput);
}
function burnedAlive(){
	clear();
	print("\nYou walk over and sit at the fire. The fire is warm and comforting");
	print("\nSUDDENLY a lightning strike hit the bonfire and the bonfire explodes outwards hitting you!");
	waitThenCall(death);
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
	clear();
	haveskis = false
	havemeat = false
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            home();
    }
    waitForInput(processInput);
}
