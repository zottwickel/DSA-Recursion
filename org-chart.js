const tree = {
Zuckerberg: 0,
    Schroepfer: 2,
        Bosworth: 4,
            Steve: 6,
            Kyle: 6,
            Andra: 6,
        Zhao: 4,
            Richie: 6,
            Sofia: 6,
            Jen: 6,
    Schrage: 2,
        VanDyck: 4,
            Sabrina: 6,
            Michelle: 6,
            Josh: 6,
        Swain: 4,
            Blanch: 6,
            Tom: 6,
            Joe: 6,
    Sandberg: 2,
        Goler: 4,
            Eddie: 6,
            Julie: 6,
            Annie: 6,
       Hernandez: 3.5,
            Rowi: 6,
            Inga: 6,
            Morgan: 6,
       Moissinac: 3.5,
            Amy: 6,
            Chuck: 6,
            Vinni: 6,
       Kelley: 3.5,
            Eric: 6,
            Ana: 6,
            Wes: 6,
}

function orgChart(org) {
  let i = 0
  let keys = Object.keys(org)
  function recur() {
    if (i === keys.length) {
      return
    }
    console.log(' '.repeat(org[keys[i]] * 2) + keys[i])
    i++
    return recur()
  }
  recur()
}

orgChart(tree)

// big o = O(1)