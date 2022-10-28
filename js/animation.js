document.addEventListener("DOMContentLoaded",function(){
    var danhmuc = document.getElementById('danhmuc');
    danhmuc.addEventListener('mouseover',function(){
        this.classList.add('active');
    })
    danhmuc.addEventListener('mouseout',function(){
        this.classList.remove('active');
    })
});

var textName = document.querySelector('.ten');
var text;
var ten = function(){}
textName.innerHTML = document.getElementById('firstname').value;