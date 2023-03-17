while (true) {

    alert(`~~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~~~`);
    var level = +prompt(`[난이도를 설정하세요 ~~~!] \n[ 1. 상 (기회 3번) | 2. 중(기회 6번) | 3. 하 (기회 10번)]`);
    // var count = 1;
    var cor = `n`;
    var chance;
    if (level === 1) {
        chance = 3;
    } else if(level === 2) {
        chance = 6;
    } else {
        chance = 10;
    }
        alert(`[ 1 ~ 50 사이의 무작위 숫자를 ${chance}번 안에 맞춰보세요 !!!]`);
        var rn = Math.floor(Math.random() * 50) + 1;
        for (var i = 1; i <= chance; i++) {
            var input = +prompt();

            if (input > rn) {
                alert(`DOWN!!! 기회가 ${chance - i}번 남았습니다.`);
                
            } else if (input < rn) {
                alert(`UP!!! 기회가 ${chance - i}번 남았습니다.`);
            } else {
                cor = `y`;
                alert(`딩동댕~~~~~~~!!!`);
                break;
            }

            if (i === chance && cor === 'n') {
                alert('기회를 모두 소진했습니다. GAME OVER!!');
            }
        }
    
}