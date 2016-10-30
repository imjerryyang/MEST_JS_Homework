/*
 * 1. explain the special meaning of the following special characters
 \0 the null character
  //This special character returns a character as null.
 \n new line
 // special character breaks a line and continues it on a new line.
 \r carriage return
 //This special character moves the cursor (or print head) to the beginning of the current line.
 \v vertical tab
 //This special character structures content so that it can be viewed one content at a time.
 \t

 \backspace
 This special character deletes the last letter which comes before the character.
 \f form feed
 This special character sends the cursor to the next page.
 */
 

/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
 var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 var arr2 = ['Thursday', 'Friday', 'Saturday']
 arr1.concat(arr2);

/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
 var arr1 = ['Sunday', 'Monday']
 var arr2 = ['Tuesday', 'Wednesday']
 var arr3 = ['Thursday', 'Friday', 'Saturday']
 arr1.concat(arr2, arr3)

//4.what is the result(output of following code):
     var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
     console.log(arr.sort());
     console.log(arr);
 //output:
 ["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]
 ["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]

// 5. what is the result(output of following code):
     var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
     console.log(arr.sort());
     console.log(arr);
//output:
 [1, 2, 3, "apple", "black", "orange", "test"]
 [1, 2, 3, "apple", "black", "orange", "test"]

/*
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
	console.log(arr.slice(2, 4))
	console.log(arr.slice(5, 6))
// 7. what is the result(output of following code):
     var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
     console.log(arr.slice(-3, -1));
     console.log(arr);
 //output:
 ["Yaw", "Enoch"]
 ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]


//8. what is the result(output of following code):
     var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
     console.log(arr.slice(2));
     console.log(arr);
//output:
 ["mike", "jerry", "Yaw", "Enoch", "lars"]
 ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]

/*
  9. what is the result(output of following code):*/
     var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
     console.log(arr.slice(-2));
     console.log(arr);
 //output:
 ["Enoch", "lars"]
 ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]

/*10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 */
 addTwoNumber();
 var addTwoNumber = function(num1, num2) {
 	console.log(num1 + num2);
 }
 //  and invoke the function expression to caluate the result of 256 + 532
 addTwoNumber(3,4)

/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */
 var liveLife = (function life() {
 	console.log('This is how you know you are living');
 })()


  //12. you have following objects:
      var person1 = {
           name: 'ashwin'
      };
 
      var person2 = {
           name: 'lars'
      };
 
     function namer() {
           return this.name;
     }
 
 //   use bind function here to make namer() function to call 'ashwin'
 //    and lars

 var nameBind = namer.bind(person1);
 console.log(nameBind());
 var nameBind = namer.bind(person2);
 console.log(nameBind());

// 13. you have following object:
      var number = {
           x: 22,
           y: 33
      };
 
     var count = function() {
           console.log(this.x + this.y);
     }
 //  a. what is the result when we invoke count()?(NaN)
 //  b. use bind on function expression to make this work.

 var numberBind = count.bind(number)
 console.log(numberBind())

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
  var personA = {
          firstName: 'ashwin',
          lastName: 'Yaw'
   };
 
    var personB = {
          firstName: 'lars',
          lastName: 'Mike'
     };
 
      function hello(greeting) {
           console.log(this.greeting + ' ' + this.firstName + ' ' + this.lastName);
     }

   hello.call(personA);
   hello.call (personB);

/*
 * 15. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
  var str = 'training, mentoring, and investing in world-class tech entrepreneurs in Africa.';

	function capitaliseFirstLetter(str) {
      console.log(str.replace(/\b\w/g, x => x.toUpperCase()));
 	}
    capitaliseFirstLetter(str);
