$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});

$(document).ready(function () {
  let $btns = $(".project-area .portfolio-nav .portfolio-item");

  $btns.click(function (e) {
    $(".project-area .portfolio-nav .portfolio-item").removeClass(
      "active-portfolio"
    );
    e.target.classList.add("active-portfolio");
  });

  $(".project-area .button-group #btn1").trigger("click");

  $(".project-area .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

  const mixer = mixitup(".portfolio-container", {
    selectors: {
      target: ".portfolio-card",
    },
    animation: {
      duration: 300,
    },
  });

  // sticky navigation menu

  let nav_offset_top = $(".header_area").height() + 50;

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});
