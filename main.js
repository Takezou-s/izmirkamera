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

$(document).ready(() => {
  handleMenuOpenings();
});
