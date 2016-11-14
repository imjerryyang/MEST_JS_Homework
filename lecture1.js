/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the best practise
 */

// var 1stCar = 'Doge';
// invalid: Variable names cannot start with  a number
var firstCar = 'Doge';

// var var = 'variable';
// invalid: Can't use keywords as variable names
var variable = 'variable';

// var first name = 'Jerry';
// invalid: Can't have a space in a variable name
var firstName = 'Jerry';

// var Sch00lName = 'MEST';
// valid but doesn't follow convention: variable names should start with a small letter
var sch00lName = 'MEST';

// var totalnumber = 100;
// valid but doesn't follow convention: variable names should be camel-cased
var totalnumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
// var greeting  =  'It's nice to me you today!';
// invalid: quotes in a string should be escaped
var greeting  =  'It\'s nice to me you today!';

// var response = "Ashwin said, "Yes Sir!"";
// invalid: quotes in a string should be escaped
var response = 'Ashwin said, \"Yes Sir!\"';


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
// The expression evaluates to true because 0.3 + 0.1 evaluates to 0.4 which is equal to 0.4
 console.log(0.3 + 0.1 === 0.4);


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

 function Pizza(type) {
 	this.type = type;
 }

 pizza1 = new Pizza("hawaiian");
 pizza2 = {
 	type: "beef bbq"
 }
 pizza3 = Object();
 pizza3.type = "chicken tikka"

 console.log(pizza1)
 console.log(pizza2)
 console.log(pizza3)


/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

 function Animal(name) {
 	this.name = name;
 	this.age = 0;
 	this.position_x = 0;
 	this.position_y = 0;
 }

 Animal.prototype.grow = function() {
 	this.age += 1;
 }

 Animal.prototype.walk = function() {
 	this.position_x += 1;
 }


 dog = new Animal("dog")
 dog.grow()
 dog.grow()
 console.log(dog)

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */

console.log("What would you like do: ");
console.log("1: Say Hello");
console.log("2: Hi");
console.log("3: Good morning");
console.log("4: Good afternoon");
console.log("5: Good evening");
console.log("any other key: to exit");

selection = 3;

 switch (selection) {
 	case 1:
 		console.log("Hello");
 		break;
 	case 2:
 		console.log("Hi");
 		break;
 	case 3:
 		console.log("Good morning");
 		break;
 	case 4:
 		console.log("Good afternoon");
 		break;
 	case 5:
 		console.log("Good evening");
 		break;
 	default:
 		console.log("Exiting...");
 		break;
 }

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */

var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
console.log("Scores above 50%");

for (var i = 0; i < studentScores.length; i++) {
	element = 	studentScores[i];
	if (element > 50) {
		console.log(element)
	}
}

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */

var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
console.log("Scores above 50%");
 
studentScores.forEach(function(element, index, array) {
 	if (element > 50) {
 		console.log(element)
 	}
});