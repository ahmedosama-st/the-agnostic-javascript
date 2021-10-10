function findMismatchingElement<T>(needle: T[], haystack: T[]): T[] {
  for (let i = 0; i < needle.length; i++) {
    if (haystack.indexOf(needle[i]) == -1) return [needle[i]]
  }

  return []
}

/* In arrow functional way
  const findMismatchingElement = <T>(needle: T[], haystack: T[]): T[] => {
    for (let i = 0; i < needle.length; i++) {
      if (haystack.indexOf(needle[i]) == -1) return [needle[i]]
    }
    return []
  }
  */
