var nutMenu = document.querySelector(".menu-button");
var menuNav = document.querySelector('ul.nav');
var tinhClick = 0;
nutMenu.addEventListener("click",function(){
    if(tinhClick == 0){
        tinhClick++;
        menuNav.classList.remove('active2');
        nutMenu.classList.add("active");
        menuNav.classList.add('active');
    }
    else if(tinhClick == 1){
        tinhClick=0;
        nutMenu.classList.remove("active");
        menuNav.classList.remove('active');
        menuNav.classList.add('active2');
    }
})
nutMenu.addEventListener('mouseover',function(){
    menuNav.classList.remove('active2');
});
var danhmuc = document.getElementById('danhmuc');
console.log(danhmuc);
danhmuc.addEventListener('click',function () {  
    this.classList.toggle('active');
});