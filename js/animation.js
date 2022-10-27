document.addEventListener("DOMContentLoaded",function(){
    var danhmuc = document.getElementById('danhmuc');
    danhmuc.addEventListener('mouseover',function(){
        this.classList.add('active');
    })
    danhmuc.addEventListener('mouseout',function(){
        this.classList.remove('active');
    })
});
