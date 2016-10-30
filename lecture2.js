/*
 * 1. explain the special meaning of the following special characters
 \0 the null character- inserts 0 as a character in a string
 \n new line - takes the cursor to a newline
 \r carriage return -  returns the cursor to the beginning of the same line 
 \v vertical tab - is for line tabulation
 \t - gives tab spaces (horizontal tab for character tabulation)
 \backspace - goes one character backwards
 \f form feed - takes the cursor to the next page
 */

/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 ANSWER:
 arr1.concat(arr2);
 */

/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 ANSWER:
 arr1.concat(arr2.arr3);
 */

/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort()); - ["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]
 *    console.log(arr); - same as above
 */

/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort()); - [1, 2, 3, "apple", "black", "orange", "test"]
 *    console.log(arr); - same as above
 */

/*		
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 	  ANSWER:
 	  console.log(arr.slice(0,2) + "," +  arr.slice(4,5) + "," +  arr.slice(6));
 */	  

/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 ANSWER:
 -["Yaw", "Enoch"]
 -["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]
 */


/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 ANSWER:
 -["mike", "jerry", "Yaw", "Enoch", "lars"]
 -['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']
 */

/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']
 *    console.log(arr.slice(-2));-
 *    console.log(arr);
 ANSWER:
-['Enoch', 'lars']
-['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']
 */

/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *   and invoke the function expression to caluate the result of 256 + 532
 ANSWER:
 var addTwoNumber = function(num1, num2){
	return num1 + num2;
 }
 console.log(addTwoNumber(256,532));
 */

/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 ANSWER:
 (function Minc(){
	console.log("Hello MINC");
 })();
 */

/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
ANSWER:
var person1 = {
	name: 'ashwin'
};
console.log(namer.bind(person1)());
 */

/*
 * 12. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 ANSWER:
 count.bind(number)();
 */

/*
 * 13. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 ANSWER:
   hello.bind(person1)("hi");
 */

/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.

 	   ANSWER:
 	   	input = "Training, mentoring, and investing in world-class tech entrepreneurs in Africa.";
		input = input.split(" ");
		for(var i = 0; i < input.length; i++){
			console.log(input[i].slice(0,1).toUpperCase() + input[i].slice(1));
		}
 *//*
 * 1. explain the special meaning of the following special characters
 \0 the null character
 \n new line
 \r carriage return
 \v vertical tab
 \t
 \backspace
 \f form feed
 */
