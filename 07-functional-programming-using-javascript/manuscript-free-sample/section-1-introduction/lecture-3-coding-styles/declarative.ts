function findMismatchingElement<T>(needle: T[], haystack: T[]): T[] {
  return needle.filter(function (item) {
    return haystack.indexOf(item) === -1
  })
}

/* In arrow functional style
  const findMismatchingElement = <T>(needle: T[], haystack: T[]): T[] =>
    needle.filter((item) => haystack.indexOf(item) === -1)
  */
