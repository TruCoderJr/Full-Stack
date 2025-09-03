const { log } = require("console");

let target = [100, 200, 150];

let team = [
    {
    name: "Rahul",
    taget: target[0],
    sold: 85,
  },{
    name: "Priya",
    taget: target[1],
    sold: 180,
  },
  {
    name: "Rahul",
    taget: target[2],
    sold: 120,
  },
];

function sales(target, sold) {
    return (sold/target) * 100;
}

function perfomance(percentage) {
    if (percentage >= 90) {
        return "high performer";
    }else if (percentage >= 70 && percentage < 90) {
        return "Avg performer";
    }else{
        return "Low performer"
    }
}

function bonus(percentage, sold) {
    if (percentage >= 90) {
        return `${(20/100)*sold} units`;
    }else if (percentage >= 70 && percentage < 90) {
        return `${(10/100)*sold} units`;
    }else{
        return "No Bonus"
    }
}

function generateReport(obj){
    console.log("------------------------");
    console.log("Sales Performance Report");
    console.log("------------------------");
    for (team of obj) {

        let per = sales(team.taget, team.sold)
        console.log(`${team.name}`);
        console.log(`Sales Target: ${team.target} units`);
        console.log(`Unitss Sold: ${team.sold} units`);
        console.log(`Sales Percentage: ${per}%`);
        console.log(`Perfomance: ${perfomance(per)}`);
        console.log(`Perfomance: ${bonus(per, team.sold)}\n`);
    }
}

generateReport(team);