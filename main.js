//.menu veya .sub-menu elementlerinin "mouseenter" eventini yönetir.
function menuMouseEnterHandler(menu) {
  menu.addClass("opened");
}

//.menu veya .sub-menu elementlerinin "mouseleave" eventini yönetir.
function menuMouseLeaveHandler(menu) {
  menu.removeClass("opened");
}

//Mouse, .menu veya .sub-menu elementlerinin üzerindeyken görüntülünmesini kontrol eden fonksiyon.
function handleMenuOpenings() {
  $(".menu + .sub-menu").each((idx, obj) => {
    const subMenu = $(obj);
    const menu = subMenu.prev();
    menu
      .on("mouseenter", (event) => {
        menuMouseEnterHandler($(event.delegateTarget));
      })
      .on("mouseleave", (event) => {
        menuMouseLeaveHandler($(event.delegateTarget));
      });

    subMenu
      .on("mouseenter", (event) => {
        menuMouseEnterHandler($(event.delegateTarget).prev());
      })
      .on("mouseleave", (event) => {
        menuMouseLeaveHandler($(event.delegateTarget).prev());
      });
  });
}

function handleAccr() {
  $(".accr + *").each((idx, obj) => {
    const element = $(obj);
    const toggler = element.prev();
    toggler.on("click", (event) => {
      if (element.attr("data-shown") === "true") {
        element.slideUp();
        element.attr("data-shown", "false");
        toggler.find("i").addClass("fa-plus").removeClass("fa-minus");
      } else {
        element.slideDown();
        element.attr("data-shown", "true");
        toggler.find("i").removeClass("fa-plus").addClass("fa-minus");
      }
    });
  });
}

$(document).ready(() => {
  createLinkElements($("#navLinks"), ...links);
  handleMenuOpenings();
  handleAccr();
  scrollEvent(
    () => {
      $("#back-to-top").removeClass("d-none").addClass("d-flex");
    },
    () => window.scrollY >= 200
  );
  scrollEvent(
    () => {
      $("#back-to-top").removeClass("d-flex").addClass("d-none");
    },
    () => window.scrollY < 200
  );

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: "1",
    spaceBetween: 5,
    // centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
