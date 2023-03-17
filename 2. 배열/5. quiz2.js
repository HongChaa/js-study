var member = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
var deleteMember;
var memberFlag;
var target;

while (true) {

    deleteMember = prompt(`현재 멤버 : [${member}] \n삭제할 이름을 입력하세요.`);
    memberFlag = member.includes(deleteMember);
    target = member.indexOf(deleteMember);

    if (memberFlag === true) {

        member.splice(target, 1);
        alert(`삭제완료 \n남은 멤버 : [${member}]`);

    } else {
        alert(`${deleteMember}은(는) 잘못된 이름입니다. \n다시 입력하세요!`);
    }

    if(member.length === 0) {
        alert(`모든 멤버가 삭제되었습니다.`)
        break;
    }

}