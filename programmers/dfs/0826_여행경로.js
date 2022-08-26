function solution(tickets) {
    var answer = [];
    var visited = new Array(tickets.length).fill(0);
    var len = tickets.length;

    tickets.sort();

    function dfs(target, count) {
        answer.push(target);

        // 전체 다 순회 했을 경우 true 반환
        if (count === len) {
            return true;
        }

        for (let i = 0; i < len; i++) {
            if (!visited[i] && tickets[i][0] === target) {
                visited[i] = 1;

                if (dfs(tickets[i][1], count + 1)) return true;

                // 순회 못할 경우 방문 처리 취소
                visited[i] = 0;
            }
        }

        // 우선 순위에 의해 순회를 다 못했을 경우 우선순위 변경을 위해 안된 케이스는 pop
        answer.pop();

        return false;
    }

    dfs("ICN", 0);

    return answer;
}
