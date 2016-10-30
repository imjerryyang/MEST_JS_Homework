/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why?
 *  Ans: This outputs the windows object on the console because the 'this' method points to the parent object which is the window object.
 * 
 * 
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 *  
 *  obj.func(); //what is the output? try to explain why.
 *  Ans:  This outputs the obj object because 'this' in the function 'func' now points to the obj object not the main windows object.
 * 
 * 
 *  obj.func.bind(window)(); // what is the output? why?
 *  Ans: This will display the windows object because the function 'func' is now bound to the windows object and not 'obj' object.
 *
 *  obj.func.bind(this)();  // what is the output? why?
 *  Ans: This outputs the windows object because 'this' binds the 'func' to the windows object.
 * 
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */
   // Ans: This outputs the 'people' object because 'func' is now bound to 'people' object.


/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */
  function FirstLetterCapital(str) {
    var splitString = str.toLowerCase().split(' ');
    for (var i = 0; i < splitString.length; i++) {
       // You do not need to check if i is larger than splitString length, as your for does that for you
       // Assign it back to the array
       splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);     
   }
   // Directly return the joined string
   return splitString.join(' '); 
}



/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */

  var reGex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  reGex.test('mkinoti69@gmail.com');
/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 */

/*  Ans:
  For sessionStorage, changes are available per each browsing session in the window. Changes made are saved and available for the current page, as well as future visits to the site on the same window. Once the window is closed, the storage is deleted.
  localStorage and sessionStorage both extend Storage. There is no exact difference between them except for the intended "non-persistence" of sessionStorage.
*/
