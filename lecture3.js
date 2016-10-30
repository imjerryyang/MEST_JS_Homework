/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why? -
    This function outputs the properties of of the object that it is referenced to. In this case, it points to
    the window object because that is the first level.
 *
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
    func is a property of the object obj that invokes the predefined func() method.
 *
 *  obj.func(); //what is the output? try to explain why.
    The object obj has not unique properties so this outputs an empty object with no properties.
 *
 *  obj.func.bind(window)(); // what is the output? why?
    The window object is now bound to the func() method and it can now run the console.log(this) command for the window.
    It outputs the methods and properties of the window object.
 *
 *  obj.func.bind(this)();  // what is the output? why?
    'this' on its own is assigned to the window object by default and thus outputs the window functions
 *
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
    It points to the object people, and console.log(this) outputs the properties of the people object - name and age.
 */

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */

//Regular Expression Method
function init_capital(str) {
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

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */
function vali(email) {
       var pat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
       return pat.test(email);
}
//or
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
vali('jerr_yang@me.com')


/*
 * 4. What is localStorage and sessionStorge under window object? What is the
 *    difference
 */
/* Local storage allows a web application to persist data on a browser using the host devices storage space.

   Session storage also stores web data on the host device storage space but does not persist it - i.e. the space is freed up
   when the browser window/session is closed.

   Session storage stores data such as CDN styling and scripting files, to resuse them across different web pages. This means
   that web pages using a CDN that has been previously loaded in that session will load very quickly.

   Local storage stores data such as username and password of sites you frequently visit so you do not always retype them.
*/
