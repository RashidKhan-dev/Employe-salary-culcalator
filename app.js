var calculateSalary = (salary) => salary + (salary * 0.10);

const salary = +prompt("Enter Employee Salary");

const finalSalary = calculateSalary(salary);

console.log(`Original Salary: ${salary}`);
console.log(`Salary After 10% Bonus: ${finalSalary}`);