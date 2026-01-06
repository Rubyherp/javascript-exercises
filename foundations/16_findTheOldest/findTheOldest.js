// const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]
// const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 2018,
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]

const findTheOldest = function(arr) {
    const arrOfAges = arr.map( val => {
        if (!val.yearOfDeath) {
            val.yearOfDeath = new Date().getFullYear();
        }
        val.age = val.yearOfDeath - val.yearOfBirth;
        return val;
    })
    let sorted = arrOfAges.sort((obj1, obj2) => obj2.age - obj1.age);
    let res = sorted[0];
    delete res.age
    return res;
    
};
// findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
