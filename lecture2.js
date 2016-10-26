/*
 * 1. explain the special meaning of the following special characters
 
 \0 the null character - it comments out all the text after it
 \n new line - writes all statements following it to the mext line
 \r carriage return - moves the cursor down and to the first column
 \v vertical tab - creates vertical space between two lines
 \t - creates a horizontal tab or paragraph
 \backspace - it matches a backspace character
 \f form feed - advance to the next page
 */

/*
 *  2.Please combine those two array together as one array by using concat:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
arr1.concat(arr2); //['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
arr1.concat(arr2, arr3); //['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort()); 
 *    console.log(arr); // Logs the sorted array. Same as above.
 */
console.log(arr.sort()); //This sorts first based on UPPER CASE then on the alphabetical order 
                         //["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]
console.log(arr); // Logs the sorted array. Same as above.


/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());    
 *    console.log(arr); //Logs the sorted array
 */
console.log(arr.sort()); //Sorts by number first and then by alphabets [1, 2, 3, "apple", "black", "orange", "test"]
console.log(arr); //Logs the sorted array


/*
 * 6. Please remove mike, jerry, and Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
arr.slice(2, 3); // returns ['mike']
arr.slice(3, 4); // returns ['jerry']
arr.slice(5, 6); // returns ['Enoch']
arr.slice(2, 4); // returns ['mike', 'jerry']


/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1)); // Logs ['Yaw', 'Enoch']
 *    console.log(arr); // The main array doesn't change
 */
console.log(arr.slice(-3, -1)); // Logs ['Yaw', 'Enoch']
console.log(arr); // The main array doesn't change


/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */
console.log(arr.slice(2)); // ['mike', 'jerry', 'Yaw', 'Enoch', 'lars']
console.log(arr); // ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']


/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */
console.log(arr.slice(-2)); // ['Enoch', 'lars']
console.log(arr); // ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']


/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */
var addTwoNumber = function (num1, num2) { return num1 + num2; }
addTwoNumber(256, 432); // 688


/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */
var welcome = function () { console.log('Welcome to Agape House'); }
welcome();


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
var person1 = {
     name: 'ashwin',
     namer: function() { return this.name } 
};

var person2 = {
     name: 'lars',
     namer: function() { return this.name } 
};


/*
 * 13. you have following object:
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
console.log(this.x + this.y); //NaN - not a number. This function is not bound to any method
var counter = count.bind(number); //calling counter(); returns 55


/*
 * 14. you have following objects:
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
function hello(greeting) {
     console.log(greeting + ' ' + this.firstName + '' + lastName);
}
var person1Greeting = hello.call(person1, 'Good Morning'); 


/*
 * 15. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */

//Regular Expression method
function capitalize(str) {
     console.log(str.replace(/\b\w/g, l => l.toUpperCase()));
}

//Full function
function capitalize (str) {     
     var wordsArray = str.split(' ');
     var newWordsArray = [];
     wordsArray.forEach (function (word) {
            newWord = word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
            newWordsArray.push(newWord); //return an array of the words in Title Case
     });
     return newWordsArray.join(' '); //
}
