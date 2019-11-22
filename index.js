//list of campanies registered on the job search platform and their different job requirements
let jobRequirements = {
  companyA: ["apartment", "house", "propertyInsurance"],
  companyB: ["5doorCar", "4doorCar", "driversLicense", "carInsurance"],
  comapnyC: ["socialSecurityNumber", "workPermit"],
  companyD: ["apartment", "flat", "house"],
  comapnyE: ["2doorCar", "3doorCar", "4doorCar", "5doorCar"],
  companyF: ["scooter", "bike", "motorcycle", "motorcycleInsurane"],
  comapnyG: ["massageCertification", "liabilityInsurance"],
  companyH: ["storagePlace", "garage"],
  comapnyJ: ["paypalAccount"],
  comapnyK: [null]
};

let userSkills = "";
let company = [];

//this function takes in an argument which are the skills the user has
function calculate(skill) {
  userSkills = skill;
  Object.keys(jobRequirements).forEach(key => {
    if (jobRequirements[key].every(el => userSkills.includes(el))) {
      company.push(key);
    }
  });

  //checks if the user is qualifed to work for each company based on user skills and company requirements
  for (var i = 0; i < company.length; i++) {
    console.log(`user qualifies to work for ${company[i]}`);
  }
  console.log("user qualifies to work for companyK");
  company = [];
}

calculate("bike, driversLicense");
