function stringSplitter(str, splt) {
  if (str.length === 0) {
    return []
  }
  let sub = ''
  for (let i = 0; str[i] !== splt && i < str.length; i++) {
    sub = sub + str[i]
  }
  return [sub].concat(stringSplitter(str.substring((sub.length + 1), str.length), splt))
}

console.log(stringSplitter('abc/123/abc/123', '/'))

// big o = O(n)