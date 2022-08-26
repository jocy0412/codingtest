function solution(n, edge) {
    var answer = 0;
    var graph = new Array(n).fill().map((_) => []);
    var visited = [1];

    for (var node of edge) {
        var [a, b] = node;
        graph[a - 1].push(b - 1);
        graph[b - 1].push(a - 1);
    }
    var queue = [0];
    while (queue.length) {
        var curr = queue.shift();
        for (var next of graph[curr]) {
            if (!visited[next]) {
                visited[next] = visited[curr] + 1;
                queue.push(next);
            }
        }
    }

    var max = Math.max(...visited);
    console.log(max);

    return visited.filter((el) => el === max).length;
}
