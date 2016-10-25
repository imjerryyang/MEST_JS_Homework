/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

var 1stCar = 'Doge';
// not valid. Variable names should not begin with numbers.
var firstCar = 'Doge';

var var = 'variable';
//not valid. Variable names should not be keywords.
var variable = 'variable'

var first name = 'Jerry';
//not valid. Variable names cannot have whitespace.
var firstName = 'Jerry'

var Sch00lName = 'MEST';
//valid, but not following best practices
var schoolName = 'MEST';

var totalnumber = 100;
//valid but not following best practices
var totalNumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */

var greeting  =  'It's nice to me you today!';
//Invalid. The first apostrophe after 'it' broke the sentence.
var greeting = "It's nice to me you today!";
var greeting = 'It\'s nice to me you today!';

var response = "Ashwin said, "Yes Sir!"";
//invalid. The string value has an extra quote
var response = "Ashwin said, "Yes Sir!";

/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
// Returns true. This is because in Javascript 0.3 + 0.1 is equal to 0.4

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
 var menuSelection = function() {
	var inputNumber = prompt("What is your number?");
	var outputNumber = 0;

	if(outputNumber > 2) {
		return "Doing good";
	}
	else {
		return "Not too good";
	}

	switch(inputNumber) {
		case 1:
			return '1';
			break;
		case 2:
			return '2';
			break;
		case 3:
			return '3';
			break;
		case 4:
			return '4';
			break;		
	}
 }

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
 
/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */