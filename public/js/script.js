// /*=================================
// |   |   |   Preloader
// =================================== */
// $(window).on("load" , function() {
//   $('#status').fadeOut();
//   $('#preloader').delay(350).fadeOut('slow');
// });
//
/*=================================
|   |   |   Course Slider
=================================== */
$(function () {
  $("#courses-list").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 3
      }
    }
  });
});

/*=================================
|   |   |   Exam Slider
=================================== */
$(function () {
  $("#exams-list").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 3
      }
    }
  });
});
/*=================================
|   |   |  Treat Slider
=================================== */
$(function () {
  $("#treat-list").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 3
      }
    }
  });
});
/*=================================
|   |   |   Navigation
=================================== */
/* Show and hide White Navigation */
$(function () {
  showHideWhiteNav();
  $(window).scroll(function () {
    showHideWhiteNav();
  });

  function showHideWhiteNav() {
      if($(window).scrollTop() > 50){
      // Show white nav
      var nav = $("nav") ;
      nav.removeClass("navbar-dark");
      nav.removeClass("bg-dark");
      nav.addClass("navbar-light");
      nav.addClass("bg-light");
      // Show dark log

      //show back to top button
      $("#back-to-top").fadeIn();
      $("user").fadeOut();
    }
    else{
      // Hide white nav
          var nav = $("nav") ;
          nav.removeClass("navbar-light");
          nav.removeClass("bg-light");
          nav.addClass("navbar-dark");
          nav.addClass("bg-dark");
      // Show log

      //show back to top button
      $("#back-to-top").fadeOut();
    }
  }

});

$(function () {
    $("#mobile-nav-open-btn").on("click" , function (){
        $(this).find("#nav-btn").removeClass("fa-bars");
        $(this).find("#nav-btn").addClass("fa-close");
    });
});
$(function () {
    $("#mobile-nav-open-btn").on("click" , function (){
        $(this).find("#nav-btn").removeClass("fa-close");
        $(this).find("#nav-btn").addClass("fa-bars");
    });
});
//  Smooth Scrolling
$(function () {
  $("a.smooth-scroll").click(function (event) {

    event.preventDefault();

    // get section ID
    var section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top
    }, 1250 , "easeInOutExpo");

  });
});
/*=================================
|   |   |   Mobile Menu
=================================== */
$(function () {
  $('#mobile-nav-open-btn').click(function () {
    $('#mobile-nav').css("height", "100%");
  });
  $('#mobile-nav-close-btn').click(function () {
    $('#mobile-nav').css("height", "0%");
  });
});

///////////////////////////////////////

$(document).ready(function(){

    document.querySelector("#form-assistant").addEventListener('submit' ,function(e)
    {
        e.preventDefault();
        swal({

            title: "برای ادامه مطمئن هستید ؟",

            text: "با زدن دکمه تائید شما نمره ی خود و پاسخ های صحیح را مشاهده خواهید کرد.",

            icon: "warning",

            buttons: true,

            dangerMode: true,

        })

            .then((willDelete) => {

                if (willDelete) {

                    let results = document.getElementsByClassName("result");
                    var _token = $('input[name="_token"]').val();
                    for(let i = 0; i < results.length; i++){
                        results[i].style.display = "block";
                    }
                    let test = new Array();
                    for (i = 1; i <= 400; i+=2) {

                        test[i-1] = $("#test"+(i+1)/2+":checked").val();
                        if(test[i-1] === undefined || test[i-1] === null){
                            test[i-1] = 0;
                        }
                        test[i] = $("#answer"+(i+1)/2).val();
                    }

                    $.ajaxSetup({
                        headers: {
                            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content,
                            'Content-Type': 'application/json'
                        }
                    });

                    $.ajax({
                        method : 'POST',
                        url : '/medical/assistant_submit',
                        data : JSON.stringify(test),
                        success: function (data) {
                            swal("نمره ی شما در این آزمون : "+data["grade"], {

                                icon: "success",

                            });
                        }
                    });



                } else {

                    swal("می توانید به آزمون ادامه دهید !");

                }

            });

        });
});



$(function(){
    var answer = new Array();
});

