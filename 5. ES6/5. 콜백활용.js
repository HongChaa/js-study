const userList = [{
    account: 'abc1234',
    username: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스']
  },
  {
    account: 'banana',
    username: '빠나나',
    job: '과일장사',
    address: '서울',
    hobbys: ['산책', '축구']
  },
  {
    account: 'park1234',
    username: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상']
  },
  {
    account: 'fire',
    username: '불꽃카리스마',
    job: '상남자',
    address: '서울',
    hobbys: ['독서', '축구']
  }
];

// 회원목록에서 회원정보를 출력하는 함수
function alertUserInfo(wannaSay) {

  for (const user of userList) {
    wannaSay(user)
  }
}

alertUserInfo(u => console.log(`나는 ${u.userName}님이시다! 우하하`));

// 배열 고차 함수
// forEach() : 배열의 요소를 반복하면서 하나씩 꺼내줌
console.log(`=======================================`);
userList.forEach((user) => {
  console.log(user.address);
});


const numbers = [10, 20, 30, 40];

let total = 0;
numbers.forEach((num) => {
  total += num;
})
console.log(total);

console.log(`======================================`);


// 취미가 딱 2개인 회원들만 필터링해서 새로운 배열에 담아줘
function filter(condition) {

  // 새로운 배열 생성
  const filteredArray = [];

  for (const user of userList) {
    if (condition(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// const newArray = filter(u => u.address === '서울');
const newArray = filter(u => u.hobbys.length >= 3);
console.log(newArray);



// 배열 고차함수 filter()
// 특정 조건에 의해 필터링된 배열을 반환
console.log(`=======================`);

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = numberArray.filter(n => n % 2 === 0);
console.log(newArr);

const user1 = userList.filter(user => user.account === 'abc1234');

console.log(user1);

// 배열 고차함수 map()
// 특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 매핑한 배열을 반환

const doubles = numbers.map(n => n ** 2);
console.log(doubles);

const plusTwo = numberArray.map(n => n + 2);
console.log(plusTwo);

const userNames = userList.map(user => user.username);
console.log(userNames);


// userList에서 원하는 프로퍼티 값을 매핑하는 함수
function myMap(callback) {
  const mapArray = [];

  for (const user of userList) {
    mapArray.push(callback(user));
  }
  return mapArray;
}

const userNames2 = myMap(user => user.address);
console.log(userNames2);


console.log(`===============================`);

const appleBasket = [{
    color: 'green',
    sweet: 13
  },
  {
    color: 'green',
    sweet: 13
  },
  {
    color: 'green',
    sweet: 13
  },
  {
    color: 'green',
    sweet: 13
  },
  {
    color: 'green',
    sweet: 13
  },
  {
    color: 'green',
    sweet: 13
  }
];

// 사과 중 녹색이면서 당도가 9이상인 사과만 선별하여
// 이 사과는 xxx색이며 당도가 xxx입니다.
// 라는 문자열이 모여있는 배열을 리턴합니다



const mappedApples =
  appleBasket
  .filter(apple => apple.color === 'green' && apple.sweet >= 9)
  .map(apple => `이 사과는 ${apple.color}색이면서 당도는 ${apple.sweet}입니다.`)

console.log(mappedApples);

// 서울 사는 애들 중 첫번째 취미만 나열

userList // [{5}, {5}, {5}, {5}]
  .filter(user => user.address === '서울') // [{5}, {5}, {5}]
  .map(user => user.hobbys[0]) // ['', '', '']
  .forEach(hobby => {
    console.log(`회원의 첫번째 취미는 ${hobby}입니다.`);
  });



userList // [{5}, {5}, {5}, {5}]
  .filter(user => user.address === '서울') // [{5}, {5}, {5}]
  .map(user => ({
    firstHobby: user.hobbys[0],
    name: user.username
  })) // [{2}, {2}, {2}]
  .forEach(info => {
    console.log(`${info.name}회원의 첫번째 취미는 ${info.firstHobby}입니다.`);
  });