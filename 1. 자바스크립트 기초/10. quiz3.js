var h = +prompt(`정사각형을 그립니다. \n높이는 얼마입니까?`);

var str = ``;

for(var i = 1; i <= h; i++){
    for(var j = 1; j <= h; j++){
     str += `*   `;
    }
    str += `\n`;
}
alert(str);