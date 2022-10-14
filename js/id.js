
 const account = document.getElementById("account");
 const password = document.getElementById("password");
 const nut = document.getElementById("button");
 const text1 = document.querySelector(".thongbao");
 const text2 = document.querySelector(".thongbao2");
 var kiemtraTk = false;
 var kiemtraPs = false;
function checkAccount(){
    if(account.value == "laptrinhratvui" || account.value == "thietke" ||account.value == "ungdung"){
        text1.textContent="";
        check();
        checkds();
        checkit();
    }
    else{
        text1.textContent=" Sai tài khoản rồi nhập lại đi =))";
    }
}
function checkPassword(){
    if(password.value == "Hlx261099"){
        text2.textContent="";
        check();
        checkds();
        checkit();
    }
    else{
        text2.textContent=" Sai mật khẩu rồi nhập lại đi * _ *";
    }
}

function check(){
    if(account.value == "laptrinhratvui" && password.value == "Hlx261099"){
        nut.href = "./views/main.html";
    }
}
function checkds(){
    if(account.value == "thietke" && password.value == "Hlx261099"){
        nut.href = "./views/design.html";
    }
}
function checkit(){
    if(account.value == "ungdung" && password.value == "Hlx261099"){
        nut.href = "./views/software.html";
    }
}

