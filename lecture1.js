/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

///var 1stCar = 'Doge';wrong: variables should not start with a number
var firstCar = 'Doge';

///var var = 'variable';wrong: variables should not contain a reserved word
var variable = 'variable';

///var first name = 'Jerry';wrong: variables should not contain spaces
var firstName = 'Jerry';

///var Sch00lName = 'MEST';correct but not a good practice. Use camelCase for human readability
var sch00lName = 'MEST';
var sch00lName = 'MEST';

///var totalnumber = 100;//correct but not a good practice. Use camelCase for human readability
var totalNumber = 100;




/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
///var greeting  =  'It's nice to me you today!'; variable name is valid but its value is not. 
//The use of single quotes inside another single quotes makes the variable's value invalid.
//So, make use of either double quotes with single quotes within OR make use of the escape sequence \'
// if you must maintain single quotes within single quotes.
var greeting  =  "It's nice to me you today!"; 
var greeting  =  'It\'s nice to me you today!'; 

///var response = "Ashwin said, "Yes Sir!"";variable name is valid but its value is not.
//Similar to what was explained above, the use of a double quote within a double quote is wrong except one uses the 
//escape sequence \" OR one uses a single quote, with double quotes within.
var response = "Ashwin said, \"Yes Sir!\"";
var response = 'Ashwin said, "Yes Sir!"';

/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
/*
CODE SNIPPET:
if(0.3 + 0.1 === 0.4)
	console.log("YEA");
else
	console.log("NAH");

OUTPUT:
YEA

EXPLANATION:
=== checks if the type of 0.3 + 0.1 is the same type as the type of 0.4.
The type of 0.3 + 0.1  and 0.4 is number. Hence, they equate each other.
*/



/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
	//1.
	var pizzaFirst = {
		"type" : "kenyan",
		"size" : "small",
		"flavour" : "strawberry",
		"anything" : "something"
	}
	console.log(pizzaOne.size);
	
	//2.
	function Pizza(type, size, flavour, anything){
		this.type = type;
		this.size = size;
		this.flavour = flavour;
		this.anything = anything;
	}
	var pizzaSecond = new Pizza("kenyan", "large", "vanilla", "anythingHere");
	console.log(pizzaTwo.size);
	
	//3.
	var pizza = {
		"type" : "kenyan",
		"size" : "medium",
		"flavour" : "blueberry",
		"anything" : "any"
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
	Animal.prototype.eat = function(){
		console.log(this.name + " can eat");
	}
	Animal.prototype.sleep = function(){
		console.log(this.name + " can sleep");
	}

	dog = new Animal("Dog");
	console.log(dog);
	console.log(dog.name);
	console.log(dog.eat());
	console.log(dog.sleep());

	cat = new Animal("Cat");
	console.log(cat);
	console.log(cat.name);
	console.log(cat.eat());
	console.log(cat.sleep());


/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
 switch(prompt("Enter a menu number")){
		case "1":
			console.log("You ordered for White Rice");
			break;
		case "2":
			console.log("You ordered for Jollof Rice");
			break;
		case "3":
			console.log("You ordered for Ofada Rice");
			break;
		case "4":
			console.log("You ordered for Coconut Rice");
			break;
		default:
			console.log("Unknown Rice");
			break;
	}
	var prompt = prompt("Enter a menu number");
	if(prompt == "1")
		console.log("You ordered for White Rice");
	else if(prompt == "2")
		console.log("You ordered for Jollof Rice");
	else if(prompt == "3")
		console.log("You ordered for Ofada Rice");
	else if(prompt == "2")
		console.log("You ordered for Coconut Rice");
	else
		console.log("Unknown Rice");

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