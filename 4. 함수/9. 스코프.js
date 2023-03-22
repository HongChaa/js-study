

var x = 10; // 전역 변수 : 프로그램의 전체영역에서 사용가능

// 매개변수도 지역스코프를 가짐
function foo(z) {
    // var x;  // 호이스팅
    console.log(`지역변수 x 선언전: ${x}`);
    var y = 20 + x; // 지역 변수 : 해당 함수 안에서만 사용가능
    console.log(y - z);

    // var x = '홍길동'; // 선언과 초기화를 분리함.
    // x = '홍길동'; 
    x = '홍길동';
    console.log(`지역변수 x 선언후: ${x}`);

    return y;
}

foo(50);

console.log(`함수호출 후 x의 값: ${x}`);

// console.log(y);
// console.log(z);

// =======================================================

// 중첩 함수 : 함수 안에 함수를 정의

function outer(m) {
    var n = 'outer local n';
    var v = 'outer local v';
    console.log(m);
    console.log(n);
    console.log(v);

    // 헬퍼 함수 : 호출이 함수 내부로 제한됨
    // 캡슐화 : 기능을 내부에 숨겨 개발자의 의도대로 수행하게 하는 것
    function inner() {
        console.log(n);
        var m = 'inner local m';
        var v = 'inner local v';
        console.log(m);
        console.log(v);
    }
    
    inner();

}

var m = 'global m';

outer(`outer param m`)


