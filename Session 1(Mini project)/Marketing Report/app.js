// Generates a report containing campaign name, impressions, clicks, conversions, CTR, CVR, and performance category.
let companies = [
    {Name: "Github", Impressions: 20000, Clicks: 1200, Conversions: 300},
    {Name:"LinkedIn", Impressions: 15000, Clicks: 400, Conversions: 50},
    {Name:"Skype", Impressions: 10000, Clicks: 800, Conversions: 150}
]

function calcReport(company) {
    let ctr = ((company.Clicks/company.Impressions)*100).toFixed(1);
    let cvr = ((company.Conversions/company.Clicks)*100).toFixed(1);
    let p = null;
    
    if (ctr >= 5 && cvr >= 2) {
        p="Excellent";
    }else if ((ctr < 5 && ctr >= 3 ) && cvr < 2 && cvr >= 1) {
        p ="Good"
    }else{
        p ="Needs Improvement";
    }
    return {ctr,cvr,p};
}

function generateReports(companies) {
    
    console.log("---------------------------");
    console.log("Companies Marketing Report:");
    console.log("---------------------------");
    for (let i = 0; i < companies.length; i++) {
        let {ctr,cvr,p} = calcReport(companies[i]);
        console.log(`Name: ${companies[i].Name}`);
        console.log(`Impressions: ${companies[i].Impressions}`);
        console.log(`Clicks: ${companies[i].Clicks}`);
        console.log(`Conversions: ${companies[i].Conversions}`);
        console.log(`CTR: ${ctr}%`);
        console.log(`CVR: ${cvr}%`);
        console.log(`Performance: ${p}\n`);
    }
}

generateReports(companies);