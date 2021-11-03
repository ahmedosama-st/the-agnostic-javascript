/* Explanation

We have stated earlier that loops of any type are considered imperative style of coding
so what was the replacement for those loops?
A higher order level of looping, if you will.
Map, filter, reduce.

Let's check the possible implementations using Map and Reduce.

*/

function findSumUsingMap(...numbers: number[]): number {
  let total: number = 0

  return numbers.map((number) => {
    total = total + number

    return total
  })[numbers.length - 1]
}

findSumUsingMap(1, 2, 3, 4) // 10

/* Yikes! WTF is this implementation,
  Well, I totally agree with you, implementing this operation using the map
  function was a complete mess up, luckily you can implement it using reduce
*/

function findSumUsingReduce(...numbers: number[]): number {
  return numbers.reduce((current, next) => current + next, 0)
}

/* Whooray, the implementation using reduce was quite consice and more readable, understandale
  Also, both implementations are considered declarative implementations, but surely you'd go with
  reduce implementation in terms of logic.

  Note: if you're curious why the implementation using map method was quite awful like that,
  don't worry we'll get to that in Chapter 3 - Higher order functions
  where we will understand these three functions (map, fitler, reduce) to the deep and how do they
  work under the hood, afterwards surely you'll figure out why reduce is so convenient for such operation.
*/
