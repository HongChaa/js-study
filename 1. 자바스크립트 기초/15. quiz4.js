while (true) {

    alert(`~~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~~~`);
    var level = +prompt(`[난이도를 설정하세요 ~~~!]  [ 1. 상 (기회 3번) | 2. 중(기회 6번) | 3. 하 (기회 10번)]`);
    // var count = 1;
    var cor = `n`;

    if (level === 1) {
        alert(`[ 1 ~ 50 사이의 무작위 숫자를 3번 안에 맞춰보세요 !!!]`)
        var rn = Math.floor(Math.random() * 50) + 1;
        for (var i = 1; i <= 3; i++) {
            var input = +prompt();

            if (input > rn) {
                alert(`DOWN!!! 기회가 ${3 - i}번 남았습니다.`);
            } else if (input < rn) {
                alert(`UP!!! 기회가 ${3 - i}번 남았습니다.`);
            } else {
                cor = `y`;
                alert(`딩동댕~~~~~~~!!!`);
                break;
            }

            if (i === 3 && cor === 'n') {
                alert('기회를 모두 소진했습니다. GAME OVER!!');
            }
        }
    } else if (level === 2) {
        alert(`[ 1 ~ 50 사이의 무작위 숫자를 6번 안에 맞춰보세요 !!!]`)
        var rn = Math.floor(Math.random() * 50) + 1;
        for (var i = 1; i <= 6; i++) {
            var input = +prompt();

            if (input > rn) {
                alert(`DOWN!!! 기회가 ${6 - i}번 남았습니다.`);
                count++;
            } else if (input < rn) {
                alert(`UP!!! 기회가 ${6 - i}번 남았습니다.`);
            } else {
                alert(`딩동댕~~~~~~~!!!`);
                break;
            }

            if (i === 6 && cor === 'n') {
                alert('기회를 모두 소진했습니다. GAME OVER!!');
            }
        }
    } else {
        alert(`[ 1 ~ 50 사이의 무작위 숫자를 10번 안에 맞춰보세요 !!!]`)
        var rn = Math.floor(Math.random() * 50) + 1;
        for (var i = 1; i <= 10; i++) {
            var input = +prompt();

            if (input > rn) {
                alert(`DOWN!!! 기회가 ${10 - i}번 남았습니다.`);

            } else if (input < rn) {
                alert(`UP!!! 기회가 ${10 - i}번 남았습니다.`);

            } else {
                cor = `y`;
                alert(`딩동댕~~~~~~~!!!`);
                break;
            }

            if (i === 10 && cor === 'n') {
                alert('기회를 모두 소진했습니다. GAME OVER!!');
            }
        }
    }
}