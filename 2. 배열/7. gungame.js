var player = [];

var playerNum = +prompt(`게임 인원 (2 ~ 4명) => `);
alert(`플레이어 이름을 등록합니다.`);

for(i = 0; i < playerNum; i++){
    player[i] = prompt(`${i + 1}번 플레이어 이름 : `);
}
alert(`[${player}] 참가!`);

var bullet = +prompt(`실탄 개수(1 ~ 5개)`); 

var magazine = [];  // 탄창 배열

for(var i = 0; i < bullet; i++) {
    
}

var startPlayerIndex = Math.floor(Math.random * (playerNum - 1)); // 시작 플레이어 랜덤뽑기


alert(`총을 받았습니다. ${player[startPlayerIndex]}부터 시작합니다.`);

prompt(`[${player[startPlayerIndex]}님의 턴!] 탄창을 회전합니다. \n 엔터를 누르면 격발합니다.`);


