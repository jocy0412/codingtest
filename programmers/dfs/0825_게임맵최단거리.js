function solution(maps) {
  var answer = 0;
  var x = maps[0].length;
  var y = maps.length;
  let queue = [[0, 0]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  while (queue.length) {
    var [ay, ax] = queue.shift();
    // console.log(ay,ax);
    for (let i = 0; i < 4; i++) {
      var ny = ay + dy[i];
      var nx = ax + dx[i];
      if (nx < 0 || nx > x - 1 || ny < 0 || ny > y - 1) continue;

      if (maps[ny][nx] === 0) continue;
      if (maps[ny][nx] === 1) {
        maps[ny][nx] = maps[ay][ax] + 1;
        queue.push([ny, nx]);
      }
    }
  }
  if (maps[y - 1][x - 1] == 1) {
    answer = -1;
  } else {
    answer = maps[y - 1][x - 1];
  }

  return answer;
}
