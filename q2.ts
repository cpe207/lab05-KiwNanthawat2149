import { constants } from "buffer";

// define interface for Student object
interface Student{
  name :string
  score : number
}

// assign interface/type to the function definition properly
function findTopNames(students:Student[]) {
  const kang=students.filter((students:Student)=> students.score > 8) 

  const kong=kang.map((students:Student)=>students.name)

  return kong



  
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
//Nanthawat Sirisuksumran 660612149 