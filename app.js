const calculateSalary = (salary) => salary + (salary * 0.10);

let salary = +prompt("Enter Employee Salary");

let finalSalary = calculateSalary(salary);

console.log(`Original Salary: ${salary}`);
console.log(`Salary After 10% Bonus: ${finalSalary}`);