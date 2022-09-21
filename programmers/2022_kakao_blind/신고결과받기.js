function solution(id_list, report, k) {
    var obj = {};
    var cnt = {};
    var answer = {};

    id_list.forEach((a, i) => {
        obj[a] = [];
        cnt[a] = 0;
        answer[a] = 0;
    });

    report.forEach((a, i) => {
        var text = a.split(" ");
        if (!obj[text[0]].includes(text[1])) {
            obj[text[0]].push(text[1]);
        }
    });

    for (var i in obj) {
        obj[i].forEach((a, i) => {
            cnt[a] += 1;
        });
    }

    for (var j in obj) {
        obj[j].forEach((a, i) => {
            if (cnt[a] >= k) {
                answer[j] += 1;
            }
        });
    }

    return Object.values(answer);
}
