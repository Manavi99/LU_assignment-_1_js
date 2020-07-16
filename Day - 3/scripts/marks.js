console.log("hello");
 let marks = prompt("Enter the marks :",0 );

// if (marks >= 90){
//     console.log(`Marks is ${marks} and the grade is S`);
// }
// else if (marks >= 75 && marks < 90){
//     console.log(`Marks is ${marks} and the grade is A`);
// }
// else if (marks >= 60 && marks < 75){
//     console.log(`Marks is ${marks} and the grade is B`);
// }
// else if (marks >= 45 && marks < 60){
//     console.log(`Marks is ${marks} and the grade is C`);
// }
// else if (marks >= 30 && marks < 45){
//     console.log(`Marks is ${marks} and the grade is E`);
// }
// else if (marks < 30){
//     console.log(`Marks is ${marks} and the grade is Fail`);
// }



let result = (marks >= 90)?console.log(`Marks is ${marks} and the grade is S`):
             (marks >= 75 && marks < 90) ? console.log(`Marks is ${marks} and the grade is A`):
             (marks >= 60 && marks < 75) ? console.log(`Marks is ${marks} and the grade is B`):
             (marks >= 45 && marks < 60)?console.log(`Marks is ${marks} and the grade is C`):
             (marks >= 30 && marks < 45)?console.log(`Marks is ${marks} and the grade is E`):
             console.log(`Marks is ${marks} and the grade is Fail`)

