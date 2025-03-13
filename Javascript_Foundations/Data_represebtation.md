# Data Representation with Code

Code helps solve real-world problems by representing concepts as objects and collections in a structured way.



## Understanding Objects

Objects represent nouns, while actions (verbs) are functions.  
Example: Representing a mountain in JavaScript:

```js
const rainier = {
  name: "Mount Rainier",
  state: "Washington",
  heightInMeters: 4395,
  isNationalPark: true,
  location: { latitude: 46.8600215, longitude: -121.855005 },
  activities: ["hiking", "skiing"],
};


## Nested Objects

Objects can be structured for better organization.

```js
const person = {
  name: { first: "William", last: "Anderson", preferred: "Will" },
  birthday: { month: "December", day: 2, year: 1990 },
  phone: { mobile: "5551901789", home: "5556549912" },
};


## Collections

Collections store multiple objects in an array.

### Example: List of Flavors

```js
const flavors = [
  { name: "Cherry", popularity: 3 },
  { name: "Watermelon", popularity: 4 },
];

## Unique Identifiers for Objects

IDs help track and update objects reliably.

```js
const accounts = [
  { id: 1, amount: 2015.3 },
  { id: 5, amount: -1.05 },
];

const oneAccount = {
  id: 5,
  accountType: "Checking",
  firstName: "Rynn",
  address: { street: "45-56 Davis Street", state: "NY", zip: 11101 },
  amount: -1.05,
  pastTransactions: [-100, -30, 1000],
};

## Lesson link

[https://github.com/Accelerator-One-Days-Track-1/unit-fundamentals/blob/main/data-representation-with-code/readme.md]