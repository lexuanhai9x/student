document.addEventListener('DOMContentLoaded',function(){
    //nut menu
    var nutMenu = document.querySelector('.fa-bars');
    var nutMenu2=document.querySelector('.fa-outdent');
    var menu = document.querySelector('.allmenu');
    var titleMn = document.getElementById("m1");
    var iconMn = document.querySelector('.fa-angle-down');
// KBSLIDE
    var slide = document.querySelectorAll('.slide');
    var back = document.querySelector(".back");
    var next = document.querySelector(".next");
// end KBSLIDE 

    nutMenu.addEventListener('click',()=>{
        nutMenu.classList.remove('active');
        nutMenu2.classList.add('active');
        menu.classList.add("active");
    });
    nutMenu2.addEventListener('click',()=>{
        nutMenu.classList.add('active');
        nutMenu2.classList.remove('active');
        menu.classList.remove("active");
    });

    titleMn.addEventListener("mouseover",()=>{
        iconMn.style.transform = "rotate(180deg)";
    });
    titleMn.addEventListener("mouseout",()=>{
        iconMn.style.transform = "rotate(0deg)";
    })


    //slide
    



   
    chuyendong=0;
    maxslide = slide.length - 1;

    var auto = setInterval(autoSlide,5000);

    for (let j = 0; j < slide.length; j++) {
        slide[j].classList.add('hide');
        slide[0].classList.remove('hide');
        slide[0].classList.add('active');
    }
    back.addEventListener('click',()=>{
        clearInterval(auto);
        (chuyendong==0)?chuyendong=maxslide:chuyendong--;
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active');
            slide[i].classList.add('hide');
        }
        slide[chuyendong].classList.add('active');
    });
    next.addEventListener('click',()=>{
        clearInterval(auto);
        (chuyendong==maxslide)?chuyendong=0:chuyendong++;
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active');
            slide[i].classList.add('hide');
        }
        slide[chuyendong].classList.add('active');
    });
    function autoSlide(){
        (chuyendong==maxslide)?chuyendong=0:chuyendong++;
        for (let k = 0; k < slide.length; k++) {
            slide[k].classList.remove('active');
            slide[k].classList.add('hide');
        }
        slide[chuyendong].classList.add('active');
        console.log(chuyendong);
    }
    
});



// smooth jquery

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
