function findMismatchingElement(needle, haystack) {
  return needle.filter(function (item) {
    return haystack.indexOf(item) === -1
  })
}

/* In arrow functional way
  const findMismatchingElement = (needle, haystack) =>
    needle.filter((item) => haystack.indexOf(item) === -1)
  */
