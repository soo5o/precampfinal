//1. 전화번호 2. 토큰 3. signup
function changeP1(){
    const phone = document.getElementById("phone1").value
    if(phone.length === 3){
        document.getElementById("phone2").focus()
    }
}
function changeP2(){
    const phone = document.getElementById("phone2").value
    if(phone.length === 4){
        document.getElementById("phone3").focus()
    }
}
function changeP3(){
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value
    if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4){
        document.getElementById("myPhone").setAttribute('style','background-color: yellow;')
        document.getElementById("myPhone").removeAttribute('disabled')
    }
}
let isActive = false
function changeNum(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("nums").innerText = token
    if(isActive === false){
        isActive = true
        let time = 180
        setInterval(function(){
            if(time > 0){
                time-=1
                let min = String(Math.floor(time / 60)).padStart(2, "0")
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("count").innerText = min +":"+sec}
        }, 1000)}
        document.getElementById("myToken").setAttribute('style','background-color: yellow;')
        document.getElementById("myToken").removeAttribute('disabled')
        document.getElementById("myPhone").setAttribute('disabled','true')
}
function alert1(){
    alert("인증이 완료되었습니다.")
    document.getElementById("myToken").setAttribute('disabled','true')
    clearInterval(isActive)
    document.getElementById("myButton").setAttribute('style','background-color: yellow;')
    document.getElementById("myButton").removeAttribute('disabled')
}
function LastSignup(){
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
    const p1 = document.getElementById("pass1").value
    const p2 = document.getElementById("pass2").value
    const num1 = document.getElementById("phone1").value
    const num2 = document.getElementById("phone2").value
    const num3 = document.getElementById("phone3").value
    const location = document.getElementById("location").value
    const woman = document.getElementById("woman").checked
    const man = document.getElementById("man").checked
    let isValid = true
    if(email.includes("@") === false){
        document.getElementById("warningE").innerText = "이메일이 올바르지 않습니다."
        isValid = false
    } else{
        document.getElementById("warningE").innerText = ""
    }
    if(name === ""){
        document.getElementById("warningN").innerText = "이름을 입력해 주세요."
        isValid = false
    } else{
        document.getElementById("warningN").innerText = ""
    }
    if(p1 === "" && p2 !== ""){
        document.getElementById("warningP1").innerText = "비밀번호를 입력해 주세요."
        document.getElementById("warningP2").innerText = ""
        isValid = false
    } else if(p1 !== "" && p2 === ""){
        document.getElementById("warningP1").innerText = ""
        document.getElementById("warningP2").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else if(p1 !== p2){
        document.getElementById("warningP1").innerText = ""
        document.getElementById("warningP2").innerText = "비밀번호가 일치하지 않습니다."
        isValid = false
    } else if(p1 === "" && p2 === ""){
        document.getElementById("warningP1").innerText = "비밀번호를 입력해 주세요."
        document.getElementById("warningP2").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else{
        document.getElementById("warningP1").innerText = ""
        document.getElementById("warningP2").innerText = ""
    }
    if(num1 === "" || num2 === ""|| num3 === ""){
        document.getElementById("warningP").innerText = "번호를 입력해 주세요."
        isValid = false
    } else{
        document.getElementById("warningP").innerText = ""
    }
    if(location !== "서울" && location !== "경기" && location !== "인천" && location !== "부산"){
        document.getElementById("warningL").innerText = "지역을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("warningL").innerText = ""
    }
    if(woman === false && man === false){
        document.getElementById("warningG").innerText = "성별을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("warningG").innerText = ""
    }
    if(isValid === true){
        alert("코드캠프 가입을 축하합니다.")
    }
}