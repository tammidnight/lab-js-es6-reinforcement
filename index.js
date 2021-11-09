let usersArray = require("./data");

// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = (arr) => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName);
  }
  console.log(userFirstNames);
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = (arr) => {
  const fullName = [];
  for (let user of arr) {
    let { firstName, lastName } = user;
    fullName.push(`${firstName} ${lastName}`);
  }
  console.log(fullName);
};

getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = (arr) => {
  const usersCreditDetails = [];

  for (let user of arr) {
    let { firstName, lastName, balance } = user;
    let userBalance = {
      firstName,
      lastName,
      balance,
    };

    usersCreditDetails.push(userBalance);
  }
  console.log(usersCreditDetails);
};

getUsersCreditDetails(usersArray);
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = (users) => {
  let femaleUsers = [];
  let maleUsers = [];
  let allUsers = [];

  for (let key of users) {
    let { firstName, lastName, gender } = key;
    let userGender = {
      firstName,
      lastName,
      gender,
    };
    allUsers.push(userGender);
  }

  allUsers.filter((elem) => {
    if (elem.gender == "female") {
      femaleUsers.push(elem.firstName + " " + elem.lastName);
    } else if (elem.gender == "male") {
      maleUsers.push(elem.firstName + " " + elem.lastName);
    }
  });
  let allUserDetails = { femaleUsers, maleUsers };
  console.log(allUserDetails);
  return allUserDetails;
};

genderView(usersArray);
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = (data) => {
  let { femaleUsers, maleUsers } = data;

  console.log(`Female: ${femaleUsers.length}`);

  console.log(`Male: ${maleUsers.length}`);
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = (users) => {
  for (let key of users) {
    let balance = key.balance.replace(/,/g, "");
    balance = balance.substring(1);
    Number(balance);

    if (balance > 20000) {
      console.log(
        `Dear ${key.firstName}, since your balance is ${key.balance}, you are eligible to apply for this awesome credit card.`
      );
    }
  }
};

promo20(usersArray);

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = (users) => {
  const usersCopy = [...users]

  for (let key of usersCopy) {
    key.isActive = true;
  }
  console.log(usersCopy);
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
