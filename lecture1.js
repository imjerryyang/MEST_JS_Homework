/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var 1stCar = 'Doge';

// This variable is not valid because a the variable name is a Javascript Keyword
var varName = 'variable'; 

// This variable is not valid because there is whitespace between the variable name
var firstName = 'Jerry';

//This variable is valid but does not follow best practice because the first letter is supposed to be lowercase not uppercase
var sch00lName = 'MEST';


//This variable is valid but does not follow best practice because it is not in camelcase
var totalNumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
 // This is variable is not valid because the quotation mark in the string was not escaped 
var greeting  =  'It\'s nice to me you today!';

//This variable is not valid because the quotation marks in the string was not escaped
var response = 'Ashwin said,' + '"Yes Sir!"';


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 *  This statement returned true because the the two values being 
 *  checked with the stric equality operator are of the same type and has the same value.
 */




/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

// First way to create an object
 var pizza = {
 	brand:'Pepperoni',
 	maker:'Papas',
 	buyer:'Joshua',
 	ingredient: 'Flour',
 };

// Second way to create an object
 function Pizza(brand, maker, buyer, ingredient){
 	this.brand = brand;
 	this.maker = maker;
 	this.buyer = buyer;
 	this.ingredient = ingredient;
 }

 var pepperoni = new Pizza('Pepperoni','Papas','Joshua','Flour');

// Third way to create an object
 var pizza = {
 	brand:'Pepperoni',
 	maker:'Papas',
 	buyer:'Joshua',
 	ingredient: 'Flour',
 };

 var pepperoni = object.create(pizza);

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

 function Animal(name, type){
 	this.name = name;
 	this.type = type;
 }

 Animal.move = function(){
 	return 'The animal is moving';
 }

 Animal.eat = function(){
 	return 'The animal is eating';
 }

 Animal.sleep = function(){
 	return 'The animal is sleeping';
 }

 var lion = new Animal('lion','Carnivore');
 var sheep = new Animal('sheep', 'Herbivore');

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */

 	//Using if-else
	function SelectMenu(input){
		if (input === 1) {
			return 'Breakfast is bread and butter';
		}
		else if(input === 2){
			return 'Lunch is kenkey';
		}
		else {
			return 'Dinner is Waakye';
		}
	}

	//Using switch
	function SelectMenu(input){
		switch(input){
			case 1:
			return 'Breakfast is bread and butter';
			break;
			case 2:
			return 'Lunch is kenkey';
			break;
			default:
			return 'Dinner is Waakye';
			break;

		}
	}
/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */

 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 for (var i = 0 ; i >= studentScores.length; i++) {
 	if (studentScores[i] >== 50) {
 		console.log(studentScores[i]);
 	}
 }

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 studentScores.forEach(function(item){
 	if (item <== 50) {
 		console.log(item);
 	}
 });
