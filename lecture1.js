/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the best practise
 */

var firstCar = 'Doge';              //The variable name should not begin with a number
var varName = 'variable';           //You cannot use the var as a variable name because it is a keyword in javascript
var firstName = 'Jerry';            //The variable name should not have a space in between, and should also be in camelCase.
var schoolName = 'MEST';            //The variable name should be human readable, therefore the numbers '001' in between should not be included. camelCase is also best to use.
var totalNumber = 100;              //The variable name should be in camelCase


/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It\'s nice to me you today!';      //The apostrophe after the t should be escaped. There should be a backslash before the apostrophe.
var response = "Ashwin said, 'Yes Sir!'";            //If you begin with a double quote, quoted text should be in single quotes.


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
 		//The === operator makes sure it is a strict comparison. It is checking both the data type and the value at the same time.
 		// 0.3 + 0.1 === 0.4 evaluates to true.


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
 function Pizza (size, type, price, topping) {
 	this.size = size;
 	this.type = type;
 	this.price = price;
 	this.topping = topping;
 }

 var somePizza = new Pizza ('Large', 'Chicken', '10', 'cheese')


/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
 var animal = {name:'Elephant', habitat : 'Forest', feedingtype :'Herbivore'}
 

var animal = Object.create(animal);
function Animal (name, habitat, feedingtype) {
     this.name = name;
     this.habitat = habitat;
     this.feedingtype = feedingtype;
}

Animal.prototype.trait = function (){ console.log('Can really run') };
Animal.prototype.fur = function (){ console.log('Spotted skin')};

 function Leopard(name){
     this.name = name;
 }

 Leopard.prototype = new Animal();

var leop = new Leopard ('Leonard');


/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
function menu(selection) {
     var drink;
     switch(input){
     	case 0:
     		drink = 'Coke';
     		break;
     	case 1:
     		drink = 'Fanta';
     		break;
     	case 2:
     		drink = 'Sprite';
     		break;
     default:
     		drink = 'Please select any of the above orders';
     	}

}


/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 
 function theforloopscores(array) {
 	for (i = 0; i<=array.length-1; i++) {
 		console.log(array[i]);
 	}
 }

 theforloopscores(studentScores);


/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];

 function foreachScores(array) {
 	console.log(array);
 }

studentScores.forEach(foreachScores); 
