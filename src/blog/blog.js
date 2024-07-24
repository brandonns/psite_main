function ValidatePassword() {

    var password = prompt("계속하려면 비밀번호를 입력하세요", "이거 번역하지 마세요");

    if (password === "plaintextlol") {
        window.location.href = "/blog.html";
    }
    else if (password == "" || password == "이거 번역하지 마세요" || password == null){
        return false;
    }
    else{
        alert("nice try!");
        return false;}
}