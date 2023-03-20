

// 객체 리터럴 (값)
var dog = {
    // 프로퍼티 작성
    'name': '뽀삐',
    kind: '진돗개',
    age: 3,
    // 'for waiting': 11,
    injection: true,
    favorite: ['산책', '간식'],
    hate: null,

    playWithChild: function() {}
}; // 값이기 때문에 ';' 작성

var cat = {
    // 프로퍼티 작성
    'name': '콩순이',
    age: 2,
    injection: true,
    favorite: ['낮잠자기', '방어지럽히기'],
    kind: '블랙러시안',
};

console.log(typeof cat);

// 객체에 저장된 데이터 참조
console.log(dog.name);
console.log(cat.age);
console.log(cat.favorite);

console.log(dog.favorite[0]);

dog.favorite - cat.age;

dog.favorite.push('꼬리 흔들기');
console.log(dog);

dog.favorite.slice(1).splice(1, 1);

// 프로퍼티 참조
console.log('=============================');
console.log(dog.injection);
console.log(dog['injection']);

// key를 변수에 저장
var fv = 'favorite';
console.log(cat[fv]);

// 프로퍼티 값 수정
dog.age = 4;
cat.favorite[1] = '실뭉치';

dog['injection'] = fasle;
console.log(dog);


// 프로퍼티 동적 추가
cat.owner = '김철수'; // 추가
cat.owner = '박영희'; // 수정
console.log(cat);

// 프로퍼티 삭제
delete cat.owner;
console.log(cat);

// 프로퍼티 존재 유무 확인
// key를 반드시 문자열로 표기해야함.

var ageFlage = 'age' in cat;
console.log(ageFlag);

// master라는 프로퍼티가 없으면 추가해라
var m ='master';

if(!(m in cat)) {
    cat[m] ='김또또';
}

console.log('==============================');

// 객체를 순회하는 반복문
// key를 반복해서 추출해줌
for (var k in dog) {
    // console.log(k);
    console.log(dog[k]);
}







