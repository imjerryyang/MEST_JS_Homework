//hazel
/*
  1. Are the following variable valid? If it is not please explain it and correct them using the best practise.
 */

var firstCar = 'Doge';   //Variable names begin with a letter.
var newVar = 'variable';  //Var is a JS reserved word so we cannot use it to name our variable.
var firstName = 'Jerry';   //Names cannot contain whitespace. Also camelCase is the best practise.
var schoolName = 'MEST';   //camelCase is the best practise.
var totalNumber = 100;    //camelCase is the  best practise.

/*
  2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */

var greeting = "It's nice to me you today!"; //Since we're using an apostrophe in the string, we have to include our entire string in double quotation marks.
var response = "Ashwin said, 'Yes Sir!'";  //We have to quote the statement in the string with a single quotation so the entire string is encapsulated in double quotation.

/*
  3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */

0.3 + 0.1 === 0.4  //This arithmetic calculation returns true. We are checking if 0.3 plus 0.1 is strictly equal to 0.4, which is very true


/*
  4. Build a pizza object by using all three object creation method, it must have at least 4 properties
 */

//1. Object literal notation

 var pizza = {
 	size: 'large',
 	topping: 'meat',
 	crust: 'brown',
 	price: '$20'
 };

//To call out our object
 pizza.size = 'large'
 pizza.topping = 'meat'
 pizza.crust = 'brown'
 pizza.price = '$20'

 //2. Object constructor function

 function Pizza(size, topping, crust, price) {
 	this.size = size;
 	this.topping = topping;
 	this.crust = crust;
 	this.price = price
 }

 var pizza1 = new Pizza('large','meat','brown','$20');
 var pizza2 = new Pizza('medium','meat','brown','$10');
 var pizza3 = new Pizza('small','meat','brown','$5');
 
//3.Object.create

var pizza = {
	size: 'large',
 	topping: 'meat',
 	crust: 'brown',
 	price: '$20'
}

var pizza1 = Object.create(pizza);


/*
   5. Build a Animal object by using object constructor function, and add at least two method to prototype,
      create two animals from it.
 */

function Animal(species, size, habitat){
	this.species = 'Homo sapiens' ; 
	this.size = 'large';
	this.habitat = 'jungle'
}


Animal.prototype.femme = function(){
console.log('Is a ' + this.gender + ' animal that lives in the ' + this.habitat);
}

Animal.prototype.insect = function(){
	console.log('Is a ' + this.color + this.spine + ' bug.')
}

function Vertebrate(gender, habitat){
	this.gender = gender;
	this.habitat = habitat;
}

function Invertebrate(color, spine){
	this.color = color;
	this.spine = spine;
}

Vertebrate.prototype = new Animal()
Invertebrate.prototype = new Animal()

var chihuahua = new Vertebrate('female','surbubs');
var racoon = new Vertebrate('male','jungle');
var scorpion = new Invertebrate('blue','spineless')

console.log(chihuahua.femme());
console.log(racoon.femme());
console.log(scorpion.insect());

/*
  6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
number = 5;
if(number < 10){
	console.log('One plate of ugali coming up ' + '.' + ' This will cost you only $12.' )

}

else if (number > 9){
	console.log('One bowl of pilau coming up ' + '.' + ' This will cost you only $14.' )

}
else{
	console.log('Please top up your credit card')
}


//using switch

value = 15;

switch(value){
	case 5:
		'ugali';
		break;

	case 12:
		'pilau';
		break;

	case 15:
	    'macaroni';
	    break;

	default:
		'no selection made';
		break;		
}



/*
  7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */

var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];

 for (var i = 0; i < 8; i++){
 	console.log(studentScores[i]);
 }



/*
  8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */

var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];

	studentScores.forEach(function(s){
		console.log(s)
	});

