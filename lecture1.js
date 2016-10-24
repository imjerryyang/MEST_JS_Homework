/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */
//By convention javascript variables are suspose to be in camelCase
var 1stCar = 'Doge';
var var = 'variable'; //var is a key word
var first name = 'Jerry'; //camelCase Please
var Sch00lName = 'MEST'; //camelCase
var totalnumber = 100; //camelCase



var firstCar = 'Doge';
var variable = 'variable'; 
var firstName = 'Jerry';
var schoolName = 'MEST'; 
var totalNumber = 100; 

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */

//you cannot put single quote in a single quote
var greeting  =  'It's nice to me you today!';
var response = "Ashwin said, "Yes Sir!""; //you cannot put double quote in a double quote

var greeting  =  "It's nice to me you today!";
var response = "Ashwin said, 'Yes Sir!'";


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 * returns True because they of the same type.
 */


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

var pizza = {
    flavor : "Chicken",
    size  : "Large",
    price : 50,
    brands  : "KFC"
};

function Pizza(flavor, size, price, brands) {
	this.flavor = flavor;
	this.size = size;
	this.price = price; 
	this.brands = brands;
};


var pizza = Object();
pizza.flavor = "Chicken";
pizza.size = "Large";
pizza.price = 50;
pizza.brands = "KFC";


/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */


function Animal (type, habitat, category, walk) {
	this.type = type;
	this.habitat = habitat;
	this.category = category;
	this.walk = walk;
}
​
Animal.prototype.run =  function () {
	console.log("I am runinig");
}
​
Animal.prototype.walk = function () {
	if (this.walk)
		console.log("I am walking!");
}
​
​function Duck (name) {
	this.name = name;
}
​
Duck.prototype = new Animal ();
​

​var duck = new Duck ("Yellow Duck");
​
​function Lizard (name) {
	this.name = name;
}

Lizard.prototype = new Animal ();
​

​var lizard = new Lizard ("Yellow Lizard");


/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
 var number;
 if (number === 1){
 	console.log("First Menu");
 }
 else{
 	console.log("second Menu");
 }


 switch (number) {
    case 1:
        console.log("First Menu");
        break;
    case 2:
        console.log("second Menu");
        break;
    default:
        default console.log("Stop Messing With The Menu");
}

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 for (i = 1; i < studentScores.length; i++) {
 	if ( i > 2 ) {
 		console.log(studentScores[i]);
 	}
 }

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */

var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]
studentScores.forEach(function(entry) {
    console.log(entry);
});