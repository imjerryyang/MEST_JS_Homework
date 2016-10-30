/* 1. explain the special meaning of the following special characters

 * \0 the null character

 The null character is used to end or terminate a string.

 * \n new line

 The newline character creates line breaks within the output of  a string. It signifies the end of  a line.

 * \r carriage return

 The carriage return goes to the beginning of a line. It signifies going back leftwards until we get to the left-most stop.

 * \v vertical tab

 Vertical tab positions the form at the next line tab stop.


 * \t

 Used to find a tab character. It return s the position where the tab character was found.


 * \backspace

 Backspace moves the cursor one position leftwards.


 * \f form feed

 Form feed loads the next page on printers. It clears the screen in some terminal emulators.

 */


/*  2.Please combine those two array together as one array by using concate: */

  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
  var arr2 = ['Thursday', 'Friday', 'Saturday']

  arr1.concat(arr2)


/*   3.Please combine those three array together as one array by only using concate() function once: */

 var arr1 = ['Sunday', 'Monday']
 var arr2 = ['Tuesday', 'Wednesday']
 var arr3 = ['Thursday', 'Friday', 'Saturday']

 arr1.concat(arr2,arr3);


/* 4. what is the result(output of following code): */

 	var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
    console.log(arr.sort());
    console.log(arr);

    // We get the array sorted in ascending order alphabetically. Since uppercase letters come before lowercase, we sort the uppercases first then the lowercases.
    // This is our output for both cases: ["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]



/* 5. what is the result(output of following code): */

 var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 console.log(arr.sort());
 console.log(arr);

 // The ouptut for the first and second case is: [1, 2, 3, "apple", "black", "orange", "test"]. Which is the information sorted in ascending order. Numbers come before alphabets.
 

/* 6. Please remove mike, jerry, adn Enoch from the following array by using slice */

  var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];

/* 7. what is the result(output of following code): */

 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 console.log(arr.slice(-3, -1));
 console.log(arr);

 // The output for the first one is: ["Yaw", "Enoch"]. In this case,'ashwin', 'Todd', 'mike', 'jerry' and 'lars' have been removed.
// and for the second one: ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]. This is our entire array as it is.


/* 8. what is the result(output of following code): */

  var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
  console.log(arr.slice(2));
  console.log(arr);
 
 // The output for the first one is: ["mike", "jerry", "Yaw", "Enoch", "lars"]. We have removed 'ashwin' and 'Todd'.
 // and for the second one is: ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]. Which is the entire array as it is.


/* 9. what is the result(output of following code): */

  var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
  console.log(arr.slice(-2));
  console.log(arr);

  //The output for the first one is: ["mike", "jerry", "Yaw", "Enoch", "lars"]. In this case,'ashwin' and 'Todd' have been removed.
  // for the second one, it's : ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]. Which is the array as it is.

/* 10. convert the following function to function expression: and invoke the function expression to caluate the result of 256 + 532 */

  function addTwoNumber (num1, num2) {
      return num1 + num2;
   }
 
 addTwoNumber(256,532);

    

/*
  11. create an immediately invoked function expression store the iife within a variable and call it
 */

(function(){
	console.log('This line of text will execute itself!')
}) ();

/*  12. you have following objects: use bind function here to make namer() function to call 'ashwin' and lars */

  var person1 = {
           name: 'ashwin'
      };
 
      var person2 = {
           name: 'lars'
      };
 
     function namer() {
           return this.name;
     }

    namer.bind(person1);
    namer.bind(person2);

/*
  12. you have following object:
   a. what is the result when we invoke count()?
   b. use bind on function expression to make this work.
 */


 var number = {
           x: 22,
           y: 33
      };

      var count = function() {
           console.log(this.x + this.y);
     }

     count.bind(number)();

// a. Upon calling count, we get: function() {console.log(this.x + this.y);}



/*  13. you have following objects: use call methods on function expression to make this work. */

 var person1 = {
           firstName: 'ashwin'
           lastName: 'Yaw'
      };
 
      var person2 = {
           firstName: 'lars',
           lastName: 'Mike'
      };
 
      var hello(greeting) {
           console.log(greeting + ' ' + this.firstName + '' + lastName);
     }


     hello.bind(person1)('hello');


/*  14. We have a following string: please write a function to change the first letter of every word to upper case.*/

 var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'

 function firstCharOfWordToUpperCase(str) {
    var splitStr = str.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

    }

    return splitStr.join(' ');
}