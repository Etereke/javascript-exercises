const findTheOldest = function(people) {
    return people.sort((a, b) => ((b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth) - ((a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth))[0];
};
const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
// Do not edit below this line
module.exports = findTheOldest;
