// Student Code Generator Challenge
let marks = prompt("kindly enter marks")
let grade;70
function testGrade(grade){
if (grade > 79){
    return 'A'
}else if (grade > 60 && grade < 80){
    return 'B'
}else if (grade > 49 && grade < 59){
    return 'C'
}else if (grade > 40 && grade < 49){
    return 'D'
}else if(grade < 40){
    return 'E'
}
}
console.log (testGrade(80))