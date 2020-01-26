function countingSheep(int) {
  if (int === 0) {
    return console.log('all sheep jumped over the fence')
  }
    console.log(int + ': another sheep jumps over the fence')
    return countingSheep(int - 1)
}

countingSheep(3);

//big o = O(1)