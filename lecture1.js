/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var firstCar = 'Doge'; //1stCar has a number starting the variable name which is wrong and would not run.
var vari = 'variable'; //var cannot be used as a variable name because it is a keyword in javascript
var firstName = 'Jerry';// first name is not appropriate as a variable name because of the space between the words. The second word should start with a capital letter, thereby using the camel-case convention.
var SchoolName = 'MEST'; // Sch00l is accepted and a valid variable name, but not encouragd because of the numbers in between.
var totalnumber = 100; //totalnumber is accepted and valid. However, it does not follow thecamel-casing convention

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  "It's nice to me you today!"; //this is very wrong because of the wrong use of the quotation marks.
var response = "Ashwin said, Yes Sir!"; // this is also wrong due to the uneven nature of the quotation marks.


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here--//there was no type conversion before the comparison is made.
 */


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
	
	#1
 	var MyPizza = {
	flavor: 'Vegetarian',
	manufacturer: 'Papa's Pizza',
	numOfSlices: 8,
	expiryDate: 27/10/2016
 	}
	
	#2
 	function MyPizza(flavor, manufacturer, numOfSlices, expiryDate){
		this.flavor = flavor;
		this.manufacturer = manufacturer;
		this.numOfSlices = numOfSlices;
		this.expiryDate = expiryDate;
 	}

 	#3
 	var MyPizza = {}
 	MyPizza.flavor = 'Vegetarian';
 	MyPizza.manufacturer = 'Papa's Pizza'
	MyPizza.numOfSlices = 8;
	MyPizza.expiryDate = 27/10/2016
 	 */

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.

 	function Animal(name, color, food){
		this.name = name;
		this.color = color;
		this.food = food;
		this.talk = function(){ 
			return "I can ROAR"
			}
		this.eat = function(){
			return "I can have you for lunch"
			}
 	}

 	var lion = new Animal("Lion", "Yellow", "Meat")
 	var donkey = new Animal("Donkey", "Brown", "Grass")
 */

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 	#if-else

 	score=36

 	if(score>=70){
		console.log("Excellent")
 	}
 	else if(score>=50){
		console.log("Good")
 	}
 	else{
		console.log("Poor")
 	}

 	#switch case

 	switch(score):
 	case 70:
 		console.log("Excellent");
 		break;
 	case 50:
 		console.log("Good");
 		break;
 	case 30:
 		console.log("Poor");
 		break;
 	default:
 		console.log("No score");
 		break;
 */

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.

 	for(i=0; i<=studentScores.length; i++){
		if(i >50){
			console.log(i)
		}
 	}
 */

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 	studentScores.foreach(function(item){
 		if(item>50){
			console.log(item)
 		}
 	
 	});
 */