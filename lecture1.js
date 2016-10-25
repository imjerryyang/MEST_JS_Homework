/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var firstCar = 'Porsche';
/*A number cannot start the name of a variable*/
var david = 'variable';
/*Two var cannot be used in naming a variable it has to be var and another variable name that is not  reserved word in javascript*/
var firstName = 'Jerry';
/*name spacing is not a valid convection in variable naming rather a camel-case is used*/
var schoolName = 'MEST';
//starting a variable with an upper case letter and having numbers in between is bad convection 
var totalNumber = 10;
// camel case should have a new word begin with an upper case

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It"s nice to me you today!';
// When there's an apostrophe in a string it should have a double quote wrapping it
var response = 'Ashwin said, "Yes Sir!"';


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
0.3 + 0.1 === 0.4 
// returns true because the result of the operation is the same as the value being checked

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

//Object literal notation:

var pizza = {
		type: 'hawaian',
		flavour: 'beef',
		sauce: 'bbq',
		cheese: 'cheeder'
}
	console.log(pizza.type);

//Object constructor function:
	
function Pizza(type, flavour, sauce, cheese){
	this.type = type;
	this.flavour = flavour;
	this.sauce = sauce;
	this.cheese = cheese;
}
var pizza = new Pizza('Mike', 'Jerry', 'Ashwin', 'Yaw');
	console.log(pizza.type);

//Object.create:
	
var pizzaExtra = {
	type: 'hawaian',
	flavour: 'Chicken',
	sauce: 'tomato',
	cheese: 'cheeder'
}

var pizzas = Object.create(pizzaExtra);
	console.log(pizzas.type);

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

function Animal(species){
		this.species = species;
	}
	Animal.prototype.eat = function(){
		console.log(this.species);
	}
	Animal.prototype.sleep = function(){
		console.log(this.species + ' has legs');
	}

	lion = new Animal('Lion');
	console.log(lion);
	console.log(lion.species);
	

	unicorn = new Animal('Spider');
	console.log(spider);
	console.log(spider.species);
	
/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
 var prompt = prompt('Please place your order here');
	if(prompt == '1')
		console.log('Kenkey');
	else if(prompt == '2')
		console.log('Rice');
	else if(prompt == '3')
		console.log('Fish');
	else if(prompt == '4')
		console.log('Sobolo');
	else if(prompt == '5')
		console.log('Fufu');
	else
		console.log('No Orders for the day!');


 switch(prompt('Please place your order here')){
		case '1':
			console.log('Kenkey');
			break;
		case '2':
			console.log('Rice');
			break;
		case '3':
			console.log('Fish');
			break;
		case '4':
			console.log('Sobolo');
			break;
		case '5':
			console.log('Fufu');
			break;
		default:
			console.log('No Orders for the day!');
			break;
	};

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]
 for (var i in studentScores) {
  			if (studentScores[count] % 10 == 0)
				console.log(studentScores[count])
			else 
				console.log('remainder')
			count++;
			
		};

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */ 
studentScores = [50, 67, 80, 90, 100, 30, 88, 68]
var count = 0;
//var inc = 0;

		studentScores.forEach(function(scores) {
			if (studentScores[count] % 10 == 0)
				console.log(studentScores[count])
			else 
				console.log('remainder')
			count++;	
		});