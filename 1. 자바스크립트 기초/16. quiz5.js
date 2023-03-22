alert(`~~~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~~~ \n[즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~] \n=============================`);
var level = +prompt(`~~~~~~~~~~ 난이도를 설정합니다 ~~~~~~~~~~ \n[ 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20) ]`);
var count = 1; // 문제 번호
var cc = 0; // 맞은 문제 수
var ic = 0; // 틀린 문제 수
var result;
var m; // 연산기호
var left;
var right;
var max;
var min;

if (level === 1) {
    while (true) { 

        while (true) {
            left = Math.floor(Math.random() * 100) + 1;
            right = Math.floor(Math.random() * 100) + 1;

            if (left !== right) {
                break;
            }
        }
        if (left > right) {
            max = left;
            min = right;
        } else {
            max = right;
            min = left;
        }

        var mr = Math.floor(Math.random() * 4) + 1; // 연산기호 랜덤 뽑기
        if (mr === 1) {
            m = `+`;
            result = max + min;
        } else if (mr === 2) {
            m = `-`;
            result = max - min;
        } else if (mr === 3) {
            m = `*`;
            result = max * min;
        } else {
            m = `/`;
            result = max / min;
        }

        var input = +prompt(`Q${count}. ${max} ${m} ${min}= ??`);

        if (result === input) {
            alert(`정답입니다!`);
            cc += 1;
        } else if (input === 0 && result !== 0) {
            alert(`게임을 종료합니다`);
            break;

        } else {
            alert(`틀렸어요~`);
            ic += 1;
        }
        count += 1;
    }

    alert(`====================================== \n정답횟수 : ${cc}회, 틀린횟수 : ${ic}회`);
} else if (level === 2) {
    while (true) {

        while (true) {
            left = Math.floor(Math.random() * 50) + 1;
            right = Math.floor(Math.random() * 50) + 1;
            if (left !== right) {
                break;
            }
        }
        if (left > right) {
            max = left;
            min = right;
        } else {
            max = right;
            min = left;
        }
        var mr = Math.floor(Math.random() * 4) + 1; // 연산기호 랜덤 뽑기
        if (mr === 1) {
            m = `+`;
            result = max + min;
        } else if (mr === 2) {
            m = `-`;
            result = max - min;
        } else if (mr === 3) {
            m = `*`;
            result = max * min;
        } else {
            m = `/`;
            result = max / min;
        }


        var input = +prompt(`Q${count}. ${max} ${m} ${min}= ??`);

        if (result === input) {
            alert(`정답입니다!`);
            cc += 1;
        } else if (input === 0 && result !== 0) {
            alert(`게임을 종료합니다`);
            break;

        } else {
            alert(`틀렸어요~`);
            ic += 1;
        }
        count += 1;
    }

    alert(`====================================== \n정답횟수 : ${cc}회, 틀린횟수 : ${ic}회`);
} else {
    while (true) {

        while (true) {
            left = Math.floor(Math.random() * 20) + 1;
            right = Math.floor(Math.random() * 20) + 1;
            if (left !== right) {
                break;
            }
        }
        if (left > right) {
            max = left;
            min = right;
        } else {
            max = right;
            min = left;
        }
        var mr = Math.floor(Math.random() * 4) + 1; // 연산기호 랜덤 뽑기
        if (mr === 1) {
            m = `+`;
            result = max + min;
        } else if (mr === 2) {
            m = `-`;
            result = max - min;
        } else if (mr === 3) {
            m = `*`;
            result = max * min;
        } else {
            m = `/`;
            result = max / min;
        }


        var input = +prompt(`Q${count}. ${max} ${m} ${min}= ??`);

        if (result === input) {
            alert(`정답입니다!`);
            cc += 1;
        } else if (input === 0 && result !== 0) {
            alert(`게임을 종료합니다`);
            break;

        } else {
            alert(`틀렸어요~`);
            ic += 1;
        }
        count += 1;
    }

    alert(`====================================== \n정답횟수 : ${cc}회, 틀린횟수 : ${ic}회`);
}