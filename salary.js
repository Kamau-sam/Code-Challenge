const prompt = require("prompt-sync")({ sigint: true });
const salaryInput = prompt("Enter  Salary");

//function declaration
function NetsalaryCalculator(basicSalary, benefits) {
  // variable declaration/definion
  const taxRelif = 2400;
  const grossSalary = basicSalary + benefits;
  const taxablePay = grossSalary - taxRelif;

  //Started by  calculating PAYE
  let PAYE;
  if (taxablePay <= 24000) {
    PAYE = taxablePay * 0.1;
  } else if (taxablePay > 24000 && taxablePay <= 32333) {
    PAYE = taxablePay * 0.25;
  } else if (taxablePay > 32333 && taxablePay <= 500000) {
    PAYE = taxablePay * 0.3;
  } else if (taxablePay > 500000 && taxablePay <= 800000) {
    PAYE = taxablePay * 0.325;
  } else if (taxablePay > 800000) {
    PAYE = taxablePay * 0.35;
  }
  // Now lets calculate NHIF Deductions
  let nhifDeduction;

  if (grossSalary <= 5999) {
    nhifDeduction = 150;
  } else if (grossSalary <= 5999) {
    nhifDeduction = 300;
  } else if (grossSalary <= 7999) {
    nhifDeduction = 400;
  } else if (grossSalary <= 11999) {
    nhifDeduction = 500;
  } else if (grossSalary <= 14999) {
    nhifDeduction = 600;
  } else if (grossSalary <= 19999) {
    nhifDeduction = 750;
  } else if (grossSalary <= 24999) {
    nhifDeduction = 850;
  } else if (grossSalary <= 29999) {
    nhifDeduction = 900;
  } else if (grossSalary <= 34999) {
    nhifDeduction = 950;
  } else if (grossSalary <= 39999) {
    nhifDeduction = 1000;
  } else if (grossSalary <= 44999) {
    nhifDeduction = 1100;
  } else if (grossSalary <= 49999) {
    nhifDeduction = 1200;
  } else if (grossSalary <= 59999) {
    nhifDeduction = 1300;
  } else if (grossSalary <= 69999) {
    nhifDeduction = 1400;
  } else if (grossSalary <= 79999) {
    nhifDeduction = 1500;
  } else if (grossSalary <= 89999) {
    nhifDeduction = 1600;
  } else if (grossSalary > 100000) {
    nhifDeduction = 1700;
  }
  // Now lets work on the NSSF deductions
  //Based on link provided NSSF = 6% of pensionable pay while
  //Pensionable pay = basicSalary

  const nssfDeductions = basicSalary * 0.06;

  // gross salary is basic salary + benefits if any
  // Finally lets calculate the netSalary

  const netSalary = grossSalary - nssfDeductions - nhifDeduction - PAYE;
  //Here is a means to return with netSalary as the example
  return {
    netSalary,
  };
  // Here is a function call example in which i allocated 28000 as the basic salary
  //and 7500 as the benefits
}
console.log(NetsalaryCalculator(28000, 7500));
