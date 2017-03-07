// SINGLE IMAGE CONFIG OBJECT
// --------------------------

	var image = {

		// PATH TO YOUR IMAGE 
		// ------------------
		// BACKGROUND : STRING

		background:'./assets/img/pic01.jpg'
	}



// INITIALIZE SINGLE IMAGE BACKGROUND 
// ----------------------------------

	$('.background').css({
		backgroundImage:'url('+ image.background +')',
		backgroundSize:'cover',
		backgroundRepeat:'no-repeat'
	});



// COUNTER CONFIG OBJECT
// ---------------------

	var counter = {

		// SET MONTH
		// ---------
		// SET MONTH : STRING[option]
		//
		// OPTIONS:"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"

		setMonth: 'May',



		// SET DAY
		// -------
		// SET DAY : INTEGER[ 1 - 31 ]

		setDay: 1,



		// SET YEAR
		// --------
		// SET YEAR : INTEGER

		setYear: 2017
	}



// CAROUSEL CONFIG OBJECT
// ----------------------

	var carousel = {

		// THE AMOUNT OF TIME TO DELAY BETWEEN AUTOMATICALLY CYCLING AN ITEM. IF FALSE, CAROUSEL WILL NOT AUTOMATICALLY CYCLE
		// -------------------------------
		// INTERVAL : INTEGER [ 0 - 2147483647 ] | BOOLEAN[ false ]
		interval: 3000,



		// WHETHER THE CAROUSEL SHOULD REACT TO KEYBOARD EVENTS
		// ----------------------------------------------------
		// KEYBOARD : BOOLEAN [ true | false ]

		keyboard: false,



		// IF SET TO "HOVER", PAUSES THE CYCLING OF THE CAROUSEL ON MOUSEENTER AND RESUMES THE CYCLING OF THE CAROUSEL ON MOUSELEAVE
		// IF SET TO NULL, HOVERING OVER THE CAROUSEL WON'T PAUSE IT.
		// -------------------------------------------------------------------------------------------------------------------------
		// PAUSE : STRING[ 'hover'] | null

		pause: null,



		// AUTOPLAYS THE CAROUSEL AFTER THE USER MANUALLY CYCLES THE FIRST ITEM. IF "CAROUSEL", AUTOPLAYS THE CAROUSEL ON LOAD
		// --------------------------------------------------------------------------------------------------------------------
		// RIDE : STRING[ 'carousel' ] | BOOLEAN[ false ]

		ride: false,



		// WHETHER THE CAROUSEL SHOULD CYCLE CONTINUOUSLY OR HAVE HARD STOPS
		// -----------------------------------------------------------------
		// WRAP : BOOLEAN [ true | false ]

		wrap: true

	}



// SUBSCRIBE CONFIG OBJECT
// ----------------------

	var subscribe = {

		// EMAIL ADDRESS WHICH WILL BE USED TO NOTIFY YOU WHEN NEW USER SUBSCRIBE ON YOUR SYSTEM
		// -------------------------------------------------------------------------------------
		// EMAIL : STRING

		emailTo: 'yallowina.themes@gmail.com',



		// RESPONSE MESSAGE IF EMAIL IS VALID AND SENT TO YOUR SYSTEM
		// ----------------------------------------------------------
		// MESSAGE : STRING

		successMsg: '*Thanks for your interest!',



		// RESPONSE MESSAGE IF EMAIL IS NOT VALID 
		// --------------------------------------
		// MESSAGE : STRING

		errorMsg: '*This email is invalid!'

	}