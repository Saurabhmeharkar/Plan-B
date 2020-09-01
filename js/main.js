
$(document).ready(function(){


      // Add scrollspy to <body>
      $('body').scrollspy({ target: ".navbar-nav", offset: 67 });

      // Add smooth scrolling on all links inside the navbar
      $(".navbar-nav a").on('click', function (event) {
  
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
              }, 800, function () {
  
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
              });
  
              //   hide navbar on mobile
              $(".navbar-collapse").collapse("hide");
  
          } // End if
  
      });



// Portfolio Carousal

    $('.owl-carousel').owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 5000,
        autoplaySpeed: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  });




// Testimonial

const slide=document.querySelector(".slider").children;
const indicatorImages=document.querySelector(".slider-indicator").children;


for (let i = 0; i < indicatorImages.length; i++) {
    indicatorImages[i].addEventListener("click",function () {
        for (let j = 0; j < indicatorImages.length; j++) {
            indicatorImages[j].classList.remove("active");
        }
        this.classList.add("active");
        const id=this.getAttribute("data-id");
        for (let j = 0; j < slide.length; j++) {
            slide[j].classList.remove("active");
        }
        slide[id].classList.add("active");
    })
}



// Blog Section

const blogArea = document.querySelector(".blog-area");
const popup = document.querySelector(".popup-box")
const popupCloseButton = document.querySelector(".popup-close-btn")
const popupCloseIcon = document.querySelector(".popup-close-icon")
blogArea.addEventListener("click", function (event) {
    if (event.target.tagName.toLowerCase() == "button") {
        const item = event.target.parentElement;
        const h5 = item.querySelector("h5").innerHTML;
        const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
        popup.querySelector("h5").innerHTML = h5;
        popup.querySelector(".popup-body").innerHTML = readMoreCont;
        popupBox();
    };
})

popupCloseButton.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function (event) {
    if (event.target == popup) {
        popupBox();
    }
})

function popupBox() {
    popup.classList.toggle("open");
}


// Header fixed
window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 200) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed-top")
        }
        else {
            document.querySelector("header").classList.remove("fixed-top")
        }
    }

}