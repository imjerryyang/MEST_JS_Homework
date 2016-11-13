. explain the special meaning of the following special characters
 \0 the null character = used to terminate a string. null means 'nothing' that something doe not exist. In js the character is normally an object. You can use \0 to empty an object by setting it to null. eg.

 var person = {firstName: "Mary", lastName: "Doe", age: 50, skinColor: "purple"};
 var person = null;
 console.log(person);

 \n new line = starting a new line of code for best readability. The line should not be longer than 80 characters. The best place to break a line is after an operator or a comma.
 \r carriage return = returning to the begining line of a code
 \v vertical tab = 
 \t
 \backspace
 \f form feed
 */ = a multi-line comment used to block comment that explains a code for executing 
 thus ignoring the text in between the /* and */ signs. 

/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']

 var arr3 = arr1 + arr2
 console.log([arr3]);
 */

/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']

var arr = (arr1, arr2, arr3);
arr.concat(arr1, arr2, arr3);

 */

/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */

The output is a sorted array of the string in ascending alphabetical order with the index position included.
Array[7]
0
:
"ashwin"
1
:
"enoch"
2
:
"jerry"
3
:
"lars"
4
:
"mike"
5
:
"todd"
6
:
"yaw"
length
:
7

The second output is just an array of the string with ther index but not in any particular order.
Array[7]
0
:
"ashwin"
1
:
"todd"
2
:
"mike"
3
:
"jerry"
4
:
"yaw"
5
:
"enoch"
6
:
"lars"
length
:
7

/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
Function one gives a sorted array. [1, 2, 3, "apple", "black", "orange", "test"]
Function two gives an unsorted array [1, 3, "apple", "orange", "black", "test", 2]

/*
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */

arr.slice(2,4);
arr.slice(5, 6);

/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */

1. ["yaw", "enoch"]
2. Array[7]
0
:
"ashwin"
1
:
"todd"
2
:
"mike"
3
:
"jerry"
4
:
"yaw"
5
:
"enoch"
6
:
"lars"
length
:
7


/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */

1. ["enoch", "lars"]
2. Array[7]
0
:
"ashwin"
1
:
"todd"
2
:
"mike"
3
:
"jerry"
4
:
"yaw"
5
:
"enoch"
6
:
"lars"
length
:
7

/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */

1. ["enoch", "lars"]
2. Array[7]
0
:
"ashwin"
1
:
"todd"
2
:
"mike"
3
:
"jerry"
4
:
"yaw"
5
:
"enoch"
6
:
"lars"
length
:
7

/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */


var num1 = 256
undefined
var num2 = 532
undefined
function addTwoNumber(num1, num2){return num1 + num2;}
undefined
console.log(num1 + num2);
VM2180:1 788


/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
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
 */





/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
