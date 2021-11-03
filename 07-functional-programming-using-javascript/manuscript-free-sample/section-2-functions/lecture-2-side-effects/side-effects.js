// This file is made to hold the exmaples of common functions that may cause side-effects

// Example 1

const fs = reqiure('fs')

function log(data) {
  fs.writeFileSync('log.txt', data)
}

// Example 2
let button = document.getElementById('button')

button.addEventListener('click', function () {
  // some logic
})

// Example 3

let tax = 0.3

function calculateGrossSalary(baseSalary) {
  return baseSalary - baseSalary * tax
  // can also be written as baseSalary * (1 - tax)
}
