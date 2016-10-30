/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */
/*
 *You cannot start a variable name with a numeral
 */
var Car1st = 'Doge';
/*
 * You cannot name a variable with a reserved js name
 */
var Var = 'variable';
/*
 * You cannot use space when writing a variable name
 */
var firstName = 'Jerry';
/*
 * You should use camel case when naming variable
 */
var schoolName = 'MEST';
/*
 * Use camel case when naming variable
 */
var totalNumber = 100;



/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
/*
 * You must use backlash when writing and using quotation mark
 */
var greeting = 'It\'s nice to me you today!';
/*
 * You use a single quotation to make your words a string
 */

var response = 'Ashwin said, "Yes Sir!"';


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */

Its a boolean operation that prints out true

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
var pizza = {
    size: "large"
    type: "pepperonni"
    wieght: "flat"
};

function Animal(name) {
    this.name = name;
};

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function() {
    console.log(this.name + " can eat");
}
Animal.prototype.sleep = function() {
    console.log(this.name + " can sleep");
}

var lion = new Animal("Lion");
lion.eat();
var cat = new Animal("Cat");
cat.eat();
cat.sleep();
/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
var menu = input("") {
        console.log("")
    }
    /*
     * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
     */

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
