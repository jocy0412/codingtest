// 문제 : https://school.programmers.co.kr/learn/courses/30/lessons/81302#fn1
const check = (place) => {
  let users = place.map((user) => user.split(""));
  let queue = [];
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (users[j][i] === "P") {
        queue.push([j, i]);
      }
    }
  }
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1];

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (users[ny][nx] === "X") continue;
      if (users[ny][nx] === "P") return 0;

      for (let j = 0; j < 4; j++) {
        let aroundNX = nx + dx[j];
        let aroundNY = ny + dy[j];

        if (aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5)
          continue;
        if (aroundNX === x && aroundNY === y) continue;
        if (users[aroundNY][aroundNX] === "P") return 0;
      }
    }
  }

  return 1;
};

function solution(places) {
  var answer = [];

  for (let i = 0; i < places.length; i++) {
    answer.push(check(places[i]));
  }

  return answer;
}
