/**
 * Created by Jerry on 2016-10-22.
 */
  // 1. Explain the following code:
 
 function func() {
     console.log(this);
  }
  func(); // what is the output? Why?

  //func() returns a window object. This is because the function outputs an object .

  var obj = {
       func: func // what is the second func here?
   };

 //The second func is used to reference the first func

   obj.func(); //what is the output? try to explain why.

 //It returned an empty object because no argument was passed to the func function

   obj.func.bind(window)(); // what is the output? why?

 // It returns back a window with an empty object because no arguments have been passed still

   obj.func.bind(this)();  // what is the output? why?
  var people = {
       name: 'ashwin',
      age: 40
   };
 
// returns an empty object still because func is calling a bind method to itself which has an empty object

   obj.func.bind(people)(); //what is the output? why?
 
//returns the people object because of the bind method to the func function which had no method

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */

function cap_first(str) { 
return str.charAt(0).toUpperCase() + str.substr(1);
 }

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */

  var regex = /\S+@\S+\.\S+/;


/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 */

//localStorage stores data persistently until the data is explicitly deleted while 
//sessionStorage does not persistently store data and deletes data once the window is closed.
