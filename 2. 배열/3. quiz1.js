var arrInput = [];

while (true) {
    var input = prompt(`숫자를 입력하세요. \n그만두려면 '그만'이라고 입력하세요!`);

    arrInput.push(input);

    if (input === '그만') {
        arrInput.pop();
        break;
    }
}

var total=0;

for(var num of arrInput){
    total += Number(num);
}

alert(`입력한 숫자 목록 [${arrInput}]\n 입력한 숫자 총합: ${total}`);