/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

//var 1stCar = 'Doge'; variable names should not begin with numbers
var firstCar = 'Doge';
//var var = 'variable'; var is a reserved word
var varr = 'variable';
//var first name = 'Jerry'; no white spaces are permitted in variable names
var firstName = 'Jerry';
//var Sch00lName = 'MEST'; variables storing primitive data types do not start with uppercase
var sch00lName = 'MEST';
//var totalnumber = 100; camelCase should be used instead
var totalNumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */

//var greeting  =  'It's nice to me you today!'; use backslash to represent apostrophe
var greeting = 'It\'s nice to meet you today!';
//var response = "Ashwin said, "Yes Sir!""; use single quote to differentiate string from inner double quote
var response = 'Ashwin said, "Yes Sir!"';


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */

//Answer - This program checks to see if the type and value of 0.1 + 0.3 are equal and returns true

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */

//Method 1
var pizza = {
  brand: 'Dominos',
  size: 'Big',
  price: '$40',
  quantity: 8
};

//Method 2
function Pizza(brand, size, price, quantity) {
  this.brand = brand;
  this.size = size
  this.price = price
  this.quantity = quantity
};
var piz = new Pizza('Dominos', 5, '$40', 8);

//Method 3
var pizza = {
  brand: 'Dominos',
  size: 'Big',
  price: '$40',
  quantity: 8
};
var piz = Object.create(pizza);

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
var Animal = function(living, age, family) {
  this.living = living;
  this.age = age;
  this.family = family;
  this.getAge = function() {return this.age};
  this.isAlive = function() {return this.living};
};
var tiger = new Animal(true, 3, 'cat');
var rat = new Animal(false, 1, 'rodent'); 

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
function getMenu() {
  var number = parseInt(prompt("Enter a number between 1 and 5: "))
  if (number > 3) {
    console.log('Rice');
  } else if (number < 3) {
    console.log('Beans');
  } else {
    console.log('Snacks');
  };
};

function getMenu() {
  var number = parseInt(prompt("Enter a number between 1 and 3: "))
  switch (number) {
    case 1:
      console.log('Rice');
      break;
    case 2:
      console.log('Beans');
      break;
    case 3:
      console.log('Snacks');
      break;
    default:
      console.log('Enter appropriate number');
      break;
  };
};

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */

function getTens() {
  var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
  for (i = 0; i < studentScores.length; i++) {
    if (studentScores[i] % 10 == 0) {
      console.log(studentScores[i]);
    };
  };
};

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */

function getTens() {
  var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
  studentScores.forEach(function (item) {
    if (item % 10 == 0) {
      console.log(item)
    };
  });
};
