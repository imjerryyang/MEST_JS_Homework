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
 */
 func() returns the window object. This is because the function outputs the object it is referencing, window object in this case.
 /*  var obj = {
 *      func: func // what is the second func here?
 *  };
 */
 the second func in this case is the value of the first func.
 /*
 *  obj.func(); //what is the output? try to explain why.
 */
 The output is an empty string. This is because the obj object has no property.

 /*
 *  obj.func.bind(window)(); // what is the output? why?
 */
    It outputs the properties of the window object. This is because the window object has been bound to the obj object.

 /*
 *  obj.func.bind(this)();  // what is the output? why?
 */
  This outputs the window object. This is because this is bound to the obj object and this is global scope returns the window object.

 /*
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */
  The output is the properties of the people object (name:'ashwin', age:'40'). This is because the people object has been bound to the obj object.


/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */

  function ucfirst(str) { 
  return str.charAt(0).toUpperCase() + str.substr(1);
  }

function titleCase(str) {
  return str.toLowerCase().split(' ').map(ucfirst).join(' ');
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

 localStorage stores data persistently until the data is explicitly deleted while 
 sessionStorage does not persistently store data and deletes data once the window is closed.