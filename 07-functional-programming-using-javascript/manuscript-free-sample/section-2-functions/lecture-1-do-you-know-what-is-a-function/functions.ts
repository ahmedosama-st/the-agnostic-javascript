// Example 1
// Imperative
function sum(...numbers: number[]): number {
  let total = 0

  numbers.forEach((number) => (total += number))

  return total
}

// Declarative
function sum(...numbers: number[]): number {
  return numbers.reduce((current, next) => current + next, 0)
}

// Example 2

async function fetch(url: string): Promise<JSON> {
  const { data } = axios.get(url)

  return data
}
