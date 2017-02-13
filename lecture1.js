/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */
//variable names can not start with number
//var 1stCar = 'Doge';
var firstCar = 'Doge';
//no keywords as variable names
//var var = 'variable';
var variableName = 'variable';
//variable names must be one word
//var first name = 'Jerry';
var firstName = 'Jerry';
//variable names should be human readable and should be camelCase
//var Sch00lName = 'MEST';
var schoolName = 'MEST';
//variable names should be in camelCase
//var totalnumber = 100;
var totalNumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
 //Add escape sequence to special characters
//var greeting  =  'It's nice to me you today!';
var greeting  =  'It\'s nice to me you today!';

//Add escape sequence to special characters
var response = "Ashwin said, "Yes Sir!"";
var response = "Ashwin said, \"Yes Sir!\"";


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 
 */
 //0.3 + 0.1 === 0.4
//true
//The operants on each side of the strict equality are equal and the same data type

/*
  * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
Object constructor function:
function pizza(taste, colour, sizes, weight) {
  this.taste = taste;
  this.colour = colour;
  this.sizes = sizes;
  this.weight = weight;
}
var pizza = new Pizza(restaurent)
/*Object literal notation*/
var pizza = {
  taste: 'sour',
  colour: 'brown',
  sizes: 30,
  weight: 'heavy'

};
/*Oject.create*/
var pizza = Pizza.create();
var pizza = {
  taste: 'sour',
  colour: 'yellow',
  sizes: 48,
  weight: heavy
};
var pizza1 = Pizza.create(pizza)

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
function Animal (nameOfDog){
  this.nameOfDog = nameOfDog;
}
Animal.prototype.walk = function(){
  console.log(this.nameOfDog + "can walk");
}
Animal.prototype.shit = function(){
  console.log(this.nameOfDog + "can shit");
}
var cat = new Animal("Cat"),
console.log(cat);
console.log(cat.nameOfDog);
console.log(cat.shit());
console.log(cat.walk());

var goat = new Animal("Goat");
console.log(goat);
console.log(goat.nameOfDog);
console.log(goat.shit)
console.log(goat.walk)
/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
 /*if-else*/
var menu = (prompt("Enter your favourite menu"));
if (menu = '1');
  console.log("You ordered for Banku");
  else if (menu = '2');
    console.log("You ordered for Jollop Rice");
  else if (menu = '3');
    console.log("You ordered for Kokonte");
  else if (menu = '4');
    console.log("You ordered for plain rice");
  else
    console.log("We don;t have such menu")

/*switch*/
switch (prompt("Enter your favourite menu")) {
  case "1":
            console.log("You ordered for Banku");
    break;
  case "2":
            console.log("You ordered for Jollop Rice");
    break;
  case "3":
            console.log("You ordered for kokonte");
    break;
  case "4":
            console.log("You ordered plain rice");
    default:
            console.log("We don't have such menu");
}

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
 var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
 var aboveA = 0;
 var belowA = 0;
 for(var count = 0; count < studentScores.length; count++){
   if(studentScores[count] < 70)
     aboveA++;
   else
     belowA++;
 }
 console.log(aboveA + " scored above 70, while " + belowA + " scored below 70");
/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
 var studentScores =[50,67,80,90,100,30,88,68];
 var pass = 70;
 var fail = 49;
 var count = 0;
 studentScores.forEach(function(score)){
   if (count >= 70){
     console.log('You had' + pass + ' and above');
     else if (count <= 49){
       console.log('You had' + fail + 'and below');
  else
      console.log('You are average student');
     }
   }
 }