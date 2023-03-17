var num = +prompt(`양의 정수를 입력!`);
var s1 = '+';
var s2 = '-';
var str = '';
var n = 1;

while(n <= num){

    if(n % 2 !== 0){
        str += s1;
    } 
    if(n % 2 === 0){
        str += s2;
    }
    n++;
}
alert(`${str}`);