/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

//var 1stCar = 'Doge'; wrong because variables numbers don't start varaibles
var firstCar = 'Doge';

//var var = 'variable'; wrong because reserved words can not be used as variable names
var variable = 'variable';

//var first name = 'Jerry'; wrong because variables do not contain space
var firstName = 'Jerry';

//var Sch00lName = 'MEST'; correct but the variable is not named with good practice
var sch001Name = 'MEST';

//var totalnumber = 100; correct but variable is not named with a good practice
var totalNumber = 100;
/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
//var greeting  =  'It's nice to me you today!'; wrong because of the use of single quotes within single quotes
var greeting  =  "It's nice to me you today!";

//var response = "Ashwin said, "Yes Sir!""; wrong use because of the use of double quotes within double quotes
var response = 'Ashwin said, "Yes Sir!"';


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
 /*
CODE SNIPPET:
if((0.3 + 0.1) === 0.4)
	console.log("it is the same");
else 
	console.log("it is not correct");

console.log(typeof (0.3 + 0.3));
console.log(typeof 0.4)

OUTPUT:
it is the same
number
number

EXPLANATION:
From the output above, the operator, ===, comapares the datatype of the operands.
The datatype is number. Hence, they equate each other

 */


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

var pizzaOne = {
	"type" : "italian",
	"flavour" : "vanilla",
	"size" : "small",
	"something" : "something"
}
console.log(pizzaOne.flavour);

function Pizza(type, flavour, size, something){
	this.type = type;
	this.flavour = flavour;
	this.size = size;
	this.something = something;
}
var pizzaTwo = new Pizza("Ghanian", "strawberry", "large", "any");
console.log(pizzaTwo.size);

var pizza = {
	"type" : "kenyan",
	"flavour" : "blueberry",
	"size" : "extra-large",
	"something" : "something"
}
var pizzaThree = Object.create(pizza);
console.log(pizzaThree.size);

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
 function Animal(name){
		this.name = name;
	}
	Animal.prototype.breath = function(){
		console.log(this.name + " can breath");
	}
	Animal.prototype.move = function(){
		console.log(this.name + " can move");
	}

	dog = new Animal("Dog");
	console.log(dog);
	console.log(dog.name);
	console.log(dog.breath());
	console.log(dog.move());

	cat = new Animal("Cat");
	console.log(cat);
	console.log(cat.name);
	console.log(cat.breath());
	console.log(cat.move());

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
switch(prompt("Enter a menu number")){
		case "1":
			console.log("You ordered for Kenke");
			break;
		case "2":
			console.log("You ordered for Kokonte");
			break;
		case "3":
			console.log("You ordered for Wache");
			break;
		case "4":
			console.log("You ordered for Banku");
			break;
		default:
			console.log("Unknown Food");
			break;
	}
	var prompt = prompt("Enter a menu number");
	if(prompt == "1")
		console.log("You ordered for Kenke");
	else if(prompt == "2")
		console.log("You ordered for Kokonte");
	else if(prompt == "3")
		console.log("You ordered for Wache");
	else if(prompt == "2")
		console.log("You ordered for Banku");
	else
		console.log("Unknown Food");

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
	var aboveA = 0;
	var belowA = 0;
	for(var count = 0; count < studentScores.length; count++){
		if(studentScores[count] < 70)
			aboveA++;
		else
			belowA++;
	}
	console.log(aboveA + " scored above 70, while " + belowA + " scored below 70");
/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
	var aboveA = 0;
	var belowA = 0;
	var count = 0;
	studentScores.forEach(function(score){
		if(studentScores[count] < 70)
			aboveA++;
		else
			belowA++;

		count++;
	});
	console.log(aboveA + " scored above 70, while " + belowA + " scored below 70");