var member = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
var deleteMember;
var newName;
var memberFlag;
var target;

while (true) {

    deleteMember = prompt(`현재 멤버 : [${member}] \n수정할 이름을 입력하세요.`);
    memberFlag = member.includes(deleteMember);
    target = member.indexOf(deleteMember);

    if (memberFlag === true) {

        newName = prompt(`새로운 멤버 이름을 입력하세요.`);
        var deleteMember = member.splice(target, 1, newName);

        alert(`수정완료! \n현재 멤버 : [${member}]`);
        break;

    } else {
        alert(`${deleteMember}은(는) 잘못된 이름입니다. \n다시 입력하세요!`);
    }

}