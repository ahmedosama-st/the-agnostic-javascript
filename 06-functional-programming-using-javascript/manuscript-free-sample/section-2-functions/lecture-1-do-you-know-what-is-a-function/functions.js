// Example 1
// Imperative
function sum(...numbers) {
  let total = 0

  for (number of numbers) {
    total += number
  }

  return total
}

// Declarative
function sum(...numbers) {
  return numbers.reduce((current, next) => current + next, 0)
}

// Example 2

async function fetch(url) {
  return await axios.get(url)
}
