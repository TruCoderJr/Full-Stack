// student's name, total score, average score, and grade.

let student = [
    {Name:"Riya", Math: 78, Science: 85, English: 92},
    {Name:"Ankit", Math: 62, Science: 75, English: 68},
    {Name:"Sonal", Math: 48, Science: 55, English: 59}
];

function score(student) {
    let tot,avg,grade = null;

    tot = student.Math+student.Science+student.English;
    avg = (tot/3).toFixed(2);;
    
    if (avg >= 85) {
        grade = 'A';
    }else if (avg < 85 && avg >= 70) {
        grade = 'B';
    }else{
        grade = 'C';
    }

    return {tot, avg, grade};
}

function report(student) {
    console.log("----------------------------------");
    console.log("Student Report:");
    console.log("----------------------------------");
    for (let i = 0; i < student.length; i++) {
        let {tot,avg,grade} = score(student[i]);
        console.log(`Name: ${student[i].Name}`);
        console.log(`Total Score: ${tot}`);
        console.log(`Percentage: ${avg}%`);
        console.log(`Grade: ${grade}\n`);
    }
}

report(student);