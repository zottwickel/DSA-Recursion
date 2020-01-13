function solveMaze(inputmaze) {
  //note: a true labyrinth would break this
  let path = 'Path to the exit: '
  let x = 0
  let y = 0
  const newmaze = JSON.stringify(inputmaze)
  function traverse(maze, direction) {
    function condition(maze, directionAt) {
      if (directionAt === 'R') {
        return (maze[y][(x + 1)] === ' ')
      } else if (directionAt === 'L') {
        return (maze[y][(x - 1)] === ' ')
      } else if (directionAt === 'U') {
        return maze[y - 1] ? (maze[(y - 1)][x] === ' ') : false
      } else if (directionAt === 'D') {
        return maze[y + 1] ? (maze[(y + 1)][x] === ' ') : false
      } 
    }
    function move(directionAt) {
      if (directionAt === 'R') {
        x += 1
        path = path + 'R'
      } else if (directionAt === 'L') {
        x -= 1
        path = path + 'L'
      } else if (directionAt === 'U') {
        y -= 1
        path = path + 'U'
      } else if (directionAt === 'D') {
        y += 1
        path = path + 'D'
      } 
    }
    function conditionSolve(maze, directionAt){
      if (directionAt === 'R') {
        return (maze[y][(x + 1)] === 'e')
      } else if (directionAt === 'L') {
        return (maze[y][(x - 1)] === 'e')
      } else if (directionAt === 'U') {
        return maze[y - 1] ? (maze[(y - 1)][x] === 'e') : false
      } else if (directionAt === 'D') {
        return maze[y + 1] ? (maze[(y + 1)][x] === 'e') : false
      } 
    }
    function solve(directionAt) {
      if (directionAt === 'R') {
        return path + 'R'
      } else if (directionAt === 'L') {
        return path + 'L'
      } else if (directionAt === 'U') {
        return path + 'U'
      } else if (directionAt === 'D') {
        return path + 'D'
      } 
    }
    if (maze[y][x] === ' ') {
      maze[y][x] = '*'
    }
    //Check if open space is next door and traverse
    if (condition(maze, direction[0])) {
      move(direction[0])
      return traverse(maze, direction)
    } else if (condition(maze, direction[1])) {
      move(direction[1])
      return traverse(maze, direction)
    } else if (condition(maze, direction[2])) {
      move(direction[2])
      return traverse(maze, direction)
    } else if (condition(maze, direction[3])) {
      move(direction[3])
      return traverse(maze, direction)
    } 
    //Check if exit is next door
    if (conditionSolve(maze, direction[0])) {
      return solve(direction[0])
    } else if (conditionSolve(maze, direction[1])) {
      return solve(direction[1])
    } else if (conditionSolve(maze, direction[2])) {
      return solve(direction[2])
    } else if (conditionSolve(maze, direction[3])) {
      return solve(direction[3])
    }
  }
  let solutions = []
  function refresh() {
    path = 'Path to the exit: '
    x = 0
    y = 0
    inputmaze = JSON.parse(newmaze)
  }
  solutions.push(traverse(inputmaze, 'RDLU'))
  refresh()
  solutions.push(traverse(inputmaze, 'RDUL'))
  refresh()
  solutions.push(traverse(inputmaze, 'RUDL'))
  refresh()
  solutions.push(traverse(inputmaze, 'RULD'))
  refresh() 
  solutions.push(traverse(inputmaze, 'RLDU'))
  refresh()
  solutions.push(traverse(inputmaze, 'RLUD'))
  refresh()

  solutions.push(traverse(inputmaze, 'LRUD'))
  refresh()
  solutions.push(traverse(inputmaze, 'LRDU'))
  refresh()
  solutions.push(traverse(inputmaze, 'LURD'))
  refresh()
  solutions.push(traverse(inputmaze, 'LUDR'))
  refresh()
  solutions.push(traverse(inputmaze, 'LDRU'))
  refresh()
  solutions.push(traverse(inputmaze, 'LDUR'))
  refresh()

  solutions.push(traverse(inputmaze, 'ULRD'))
  refresh()
  solutions.push(traverse(inputmaze, 'ULDR'))
  refresh()
  solutions.push(traverse(inputmaze, 'UDLR'))
  refresh()
  solutions.push(traverse(inputmaze, 'UDRL'))
  refresh()
  solutions.push(traverse(inputmaze, 'URDL'))
  refresh()
  solutions.push(traverse(inputmaze, 'URLD'))
  refresh()

  solutions.push(traverse(inputmaze, 'DRLU'))
  refresh()
  solutions.push(traverse(inputmaze, 'DRUL'))
  refresh()
  solutions.push(traverse(inputmaze, 'DLRU'))
  refresh()
  solutions.push(traverse(inputmaze, 'DLUR'))
  refresh()
  solutions.push(traverse(inputmaze, 'DURL'))
  refresh()
  solutions.push(traverse(inputmaze, 'DULR'))

  return new Set(solutions).forEach(el => { el ? console.log(el) : null })

}

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

solveMaze(mySmallMaze)
console.log(' ')
solveMaze(maze)