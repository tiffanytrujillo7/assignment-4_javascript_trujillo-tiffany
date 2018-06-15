// iceCream Variable

var iceCream = ["Cookies and Cream", "Dark Chocolate", "Vanilla"];

// Addition to iceCream array

iceCream.push("Pistachio");

console.log(iceCream);

//Presidents Variable

var presidents = [
      { firstName: "Donald",
        lastName: "Trump",
        termLength: 1,
        party: "Republican",
        yearsOfPresidency: "2017-2021"
      },
      {
        firstName: "Barrack",
        lastName: "Obama",
        termLength: 8,
        party: "Democrat",
        yearsOfPresidency: "2009-2017"
      },
      {
        firstName: "George W.",
        lastName: "Bush",
        termLength: 8,
        party: "Republican",
        yearsOfPresidency: "2001-2009"
      },
      {
        firstName: "Bill",
        lastName: "Clinton",
        termLength: 8,
        party: "Democrat",
        yearsOfPresidency: "1993-2001"
      },
      {
        firstName: "George H. W.",
        lastName: "Bush",
        termLength: 4,
        party: "Republican",
        yearsOfPresidency: "1989-1993"
      }
    ];

console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

//Function Declaration
function howdy() {
    return 'Tiffany Trujillo says hi!';
}

console.log( howdy() );

//Function Expression

var numba = function() {
  if (numba.length < 7) {
    return ("What a short little word!");
  } else if (numba.length > 7) {
    return ("I'm sorry, but that's too many to count!");
  }
  else {
    return ("7, what a perfect choice!");
  }
}

//Function with Parameter
