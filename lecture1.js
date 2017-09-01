/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var firstCar = 'Doge'; // Not valid. Variable should not start with numbers
var v = 'variable';// Not valid. Variable should not use js keywords
var first_name = 'Jerry'; //Not valid. If spaces are required use underscore 
var SchoolName = 'MEST'; // It will work. However, it is not correct because it is not that clear.
var TotalNumber = 100; // Valid. however using best practice it requires using camel case

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It \'s nice to meet you today!'; //Invalid as it will print It only.
var response = 'Ashwin said, \"Yes Sir!\"'; // Invalid. using the \ means we escape the characters


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
		The === is the strict operator. It checks the values and the data type at the same time
 */


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

 // Dot notation for object pizza
 var pizza = {};
 pizza.size = '20\"';
 pizza.type = 'Meat Eater';
 pizza.price = '23 GHc';
 pizza.toppings = 'Pepperoni';

 //Bracket notation for pizza

var pizza = {
	size :'20\"',
 	type : 'Meat Eater',
 	price : '23 GHc',
 	toppings :'Pepperoni'}

//Function for pizza object
function Pizza (type, size, price, toppings){
	this.type = type;
	this.size = size;
	this.price = price;
	this.toppings = toppings;
}

var myPizza = new Pizza('Meat Eater', '20\"','23 GHc','Extra Cheese');

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
 
 var animal = {name:'Cheetah', habitat : 'Savannah', diet :'carnivore'}
 

var anima1 = Object.create(animal);
function Animal (name, habitat, diet){
     this.name = name;
     this.habitat = habitat;
     this.diet = diet;
}
Animal.prototype.trait = function (){ console.log('Faster than a speeding bullet')};
 Animal.prototype.fur = function (){ console.log('Spotted')};
 Animal.prototype.difference = function () {console.log('Looks like leopard but taller and slender')};

 function Cheetah(name){
     this.name = name;
 }

 Cheetah.prototype = new Animal();

 var cheet = new Cheetah ('Duma');
/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
  function menu(input){
     var meal;
     switch(input){
     	case 0:
     		meal = 'KenKey';
     		break;
     	case 1:
     		meal = 'Banku';
     		break;
     	case 2:
     		meal = 'Jollof';
     		break;
     	case 3:
     		meal = 'plantain';
     		break;
     default:
     		meal = 'Dude, you are screwed!';
     	}

     }

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
 
 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 
 function scores(array){
 	for(i = 0; i<=array.length-1; i++){
 		console.log(array[i]);
 	}
 }
 scores(studentScores);

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];

 function forScores(array){
 	console.log(array);



 }
studentScores.forEach(forScores); 





