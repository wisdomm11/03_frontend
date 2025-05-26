





function my_info() {
    let meName = '지훈'
    let meAge = 30;
    let mePhonenumber = '010-1111-2222';
    let meWeight = 80;

    alert(
        `\t\t이름 : ${meName}
        나이 : ${meAge}
        핸드폰 : ${mePhonenumber}
        몸무게 : ${meAge}
        `
    )

    console.log(
        `\t\t이름 : ${meName}
        나이 : ${meAge}
        핸드폰 : ${mePhonenumber}
        몸무게 : ${meAge}
        `
    )

}
function parent_info() {
    let brotherName = '철수'
    let brotherAge = 40;
    let brotherPhonenumber = '010-3434-6666';
    let brotherWeight = 80;

    alert(
        '아버님 이름 : ' + fatherName + '\n' +
        '아버님 나이 : ' + fatherAge + '\n' +
        '아버님 핸드폰번호 : ' + fatherPhonenumber + '\n' +
        '아버님 몸무게 : ' + fatherWeight
    )
}
function brother_info() {
    let fatherName = '길동'
    let fatherAge = 40;
    let fatherPhonenumber = '010-1122-5555';
    let fatherWeight = 60;

    alert(
        '형제 이름 : ' + brotherName + '\n' +
        '형제 나이 : ' + brotherAge + '\n' +
        '형제 핸드폰번호 : ' + brotherPhonenumber + '\n' +
        '형제 몸무게 : ' + brotherWeight
    )
}