const company = {
  sales: [
      { name: 'Jhon', salary: 1000 }, 
      { name: 'Alice', salary: 600 },
      { name: 'Bob', salary: 1200 }
  ],
  development: {
      web: [
          { name: 'Peter', salary: 2000 },
          { name: 'Alex', salary: 1800 },
          { name: 'Max', salary: 600 },
      ],
      internals: [ 
          { name: 'Jack', salary: 1300 } 
      ]
  }
}


function totalSales (company) {
  if (Array.isArray(company)) {
      return company.reduce((sum, employee) => sum + employee.salary, 0);
  }

  if (typeof company === 'object' && company !== null) {
      return Object.values(company).reduce((sum, value) => sum + totalSales(value), 0);
  }

  return 0;
}
const total = totalSales(company);
console.log(total); 
