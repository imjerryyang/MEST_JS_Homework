/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var car = 'Doge'; /* variable name should not start with a number */
var variable = 'variable'; /* change the variable name, var is a reserved JS word */
var firstName = 'Jerry'; /* get rid of spacing of variable name */
var schoolName = 'MEST';
var totalNumber = 100; /* camelCase */

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  "It's nice to me you today!"; /* use double quotes */
var response = 'Ashwin said, "Yes Sir!"';/* use single quotes */


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 Returns true 
 */

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

 var pizza = {
 	name: 'chicken bbq',
 	price: 30,
 	size: '35 inch'
 	topping: 'with'
 };

 function pizza(name,price,size,topping){
 	this.name = name;
 	this.price = price;
 	this.size = size;
 	this.topping = topping
 }

 var pizza = Object.create();
 var pizza = {
 	name: 'Beef bbq',
 	price: 40,
 	size: '45 inches'
 	topping: 'without'
 };
/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
 function animal(name,reproduction,feedingHabit,species,bloodTemparature){
 	this.name = name;
 	this.reproduction = reproduction;
 	this.feedingHabit = feedingHabit;
 	this.species = species;
 	this.bloodTemparature = bloodTemparature
 	this.prototype = {
 		getName: function(){
 			return this.name
 		}
 	}
 	this.prototype = {
 		speciesTemparature: function(){
 			return this.species + "" + this.bloodTemparature
 		}
 	}
 }

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
 function functionMenu(number) {
 	if (number = 1) {
 		console.log("Kenkey and fish");
 	}
 	else if (number = 2) {
 		console.log("Fried rice and chicken");
 	}
 	else if (number = 3) {
 		console.log("Fries and Salad");
 	}
 	else {
 		console.log("Food not available");
 	}

 }
 /* switch*/
 switch(number) {
 	case 1:
 		order = "Kenkey and fish";
 		break;
 	case 2:
 		order = "Fried rice and chicken";
 		break;
 	case 3:
 		order = "Fries and Salad";
 		break;
 	default:
 		order = "Does not exist in the menu";
 		break;
 }
/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 var text = "";
 var i;
 for (i = 0; i < studentScores.length; i++) {
 	if (i >== 70 && i <== 100) {
 		console.log("Grade A");
 	}
 	else if (i >== 45 && i < 70) {
 		console.log("Grade B");
 	}
 	else if (i >== 0 && i > 45) {
 		console.log("Repeat course");
 	}
 	else {
 		console.log("Out of range");
 	}
 	/*text += "The student Score is " + studentScores[i] + "<br>";*/
 }

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 studentScores.forEach(function(item)) {
 	if (item >== 70) {
 		console.log(item);
 	};

 }
 	
