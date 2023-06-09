

//나머지 연산
console.log(27 % 5);

//뒤에 숫자가 더 크면 앞에 숫자가 나머지
console.log(4 % 10); // 4

console.log(77 % 0); // NaN
console.log(0 % 77); // 0

//거듭제곱 연산
var num = 2;
console.log(num ** 3); // 8

//증감 연산자
var x = 3;
x++;
++x;
x--;
--x;

console.log(`x: ${x}`);

//전위 연산, 후위 연산
var n1 = 10;
var n2 = n1++;

console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3;


console.log(`n3: ${n3}, n4: ${n4}`);


x += 1; // x = x + 1;
x++;

x += 3; //x = x + 3;