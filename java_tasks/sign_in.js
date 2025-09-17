// 제출 이벤트
const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()  // 기존 기능 차단

    let userID = event.target.id.value
    let userPw01 = event.target.pw01.value
    let userPw02 = event.target.pw02.value
    let userName = event.target.user_name.value
    let userPhone = event.target.phone_number.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value

    console.log(
        userID, userPw01, userPw02, userName, userPhone,
        userPosition, userGender, userEmail, userIntro
    )

    if(userID.length < 6){
        alert('아이디는 6글자 이상으로 작성해 주십시오.')
        return
    }
    if(userPw01 !== userPw02){
        alert('비밀번호가 일치하지 않습니다.')
        return
    }


    // 가입 후 페이지로 이동됨.
    document.body.innerHTML = ''
    document.write(`<p>${userID}님 가입을 축하합니다!</p>`)
})




// 가입후 페이지로 이동