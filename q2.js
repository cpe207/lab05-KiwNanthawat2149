"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// assign interface/type to the function definition properly
function findTopNames(students) {
    var kang = students.filter(function (students) { return students.score > 8; });
    var kong = kang.map(function (students) { return students.name; });
    return kong;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
//Nanthawat Sirisuksumran 660612149 
