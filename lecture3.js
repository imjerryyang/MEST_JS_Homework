/**
 * Created by Hazel on 2016-10-30.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why?
 
	 //The output is the Window object. 
	 //This is because 'this' keyword was not called from an object thus it called the closest object it could reach which is the Window object.
	 

 *
 *  var obj = {
 *      func: func // what is the second func here?
 *  };

 
 	//The second func is the value assigned to the func attribute.


 *  obj.func(); //what is the output? try to explain why.
 *
 *  obj.func.bind(window)(); // what is the output? why?


 	//The output is Window
 	//Because the window argument in the bind function tells the bind function to bind the func to the window object.

 
 *  obj.func.bind(this)();  // what is the output? why?

 	//The output is the Window object because the 'this' keyword calls the window object.
 	
 
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */

 var str = 'this is all in lowercase';
function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var str2 = 'i do not understand why broccoli is broccoli'
function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/* 3. Write reg expresion for email validation.*/


function validateEmail(email) {
	var ave = /^(([^<>()\[\]\\.,;:\s@"]+)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3\.[0-9]{1,3}\.[0-9[{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return ave.test(email);
}

/*	4. what is localStorage and sessionStorge under window object? What is the difference. */

	//Local storage is a web application that can store data locally within the user's browser. 
	//The storage is per origin, per domain and protocol. One can easily access the same data.

	//Session storage stores data for one session, hence data can be lost when the browser tab is closed.
	//The differences include:
	// For Local storage;                                          
		/*
		1. It is more secure.
		2. It can store large amounts of data.
		3. It does not affect the performance of the website.
		4. It has no cookies.
		5. It has a large storage limit (at least 5MB).
		6. Information is never transfered to the server.
		7. All the pages from the origin one can be stored.
		*/

	// For Session storage:
		/*
		1. Data is lost once web browser is closed.
		2. It has an expiry date.
		3. It is almost equal to the local storage object.
		*/

