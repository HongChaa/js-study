var num1 = +prompt(`첫번째 숫자를 입력!`);
var num2 = +prompt(`두번째 숫자를 입력!`);


var total = 0;

var max;
var min;
var range;

if(num1 < num2){
    max = num2;
    min = num1;
    
}
else {
    max = num1;
    min = num2;
}

range = `${min}~${max}`;

while(min <= max){

    total += min;
    min++;
}
alert(`${range}까지의 누적합: ${total}`);


// 쌤 풀이

// 1 ~ 10까지의 누적합

