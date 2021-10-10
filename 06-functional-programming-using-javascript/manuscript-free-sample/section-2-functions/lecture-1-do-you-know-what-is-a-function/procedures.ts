// Example 1

function sum(...numbers: number[]): void {
  let total = 0

  numbers.forEach((number) => (total += number))

  console.log(total)
}

// Example 2

async function fetchPosts(): Promise<void> {
  const data = await axios.get(/* some url */)
}
