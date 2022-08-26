function solution(n, computers) {
  var answer = 0;
  var visited = new Array(n).fill(0);

  function dfs(x) {
    visited[x] = 1;
    for (let j = 0; j < computers[x].length; j++) {
      if (computers[x][j] === 1 && x != j) {
        if (!visited[j]) {
          dfs(j);
        }
      }
    }
  }

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
