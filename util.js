//Navbar linklerini oluşturmak için yazdığım kod. Server kısmında gerek  olmayacak.
function createLinkElements(parentElement, ...links) {
  links.forEach((link) => {
    const desktopElement = $("<li>", { class: `nav-item ${link.subLinks.length > 0 ? "d-lg-block d-none" : ""}` });
    desktopElement.append(
      $("<a>", {
        class: `nav-link active ${link.subLinks.length > 0 ? "menu" : ""}`,
        href: "#",
      }).append(link.text + " ", link.subLinks.length > 0 ? $("<i>", { class: "fa-solid fa-caret-down" }) : ""),
      (() => {
        const subLinks = $("<div>", {
          class: "sub-menu flex-column text-bg-primary rounded-bottom",
        });
        for (let i = 0; i < link.subLinks.length; i++) {
          const subLink = link.subLinks[i];
          subLinks.append(
            $("<a>", {
              class: `nav-link active text-white p-3 ${i === link.subLinks.length - 1 ? "rounded-bottom" : ""}`,
              href: "#",
            }).text(subLink)
          );
        }
        return subLinks;
      })()
    );

    parentElement.append(desktopElement);

    if (link.subLinks.length > 0) {
      const mobileElement = $("<li>", { class: "nav-item dropdown d-block d-lg-none" });
      mobileElement.append(
        $("<a>", {
          class: "nav-link active dropdown-toggle",
          role: "button",
          href: "#",
        })
          .attr("data-bs-toggle", "dropdown")
          .text(link.text),
        (() => {
          const subLinks = $("<ul>", {
            class: "dropdown-menu",
          });
          for (let i = 0; i < link.subLinks.length; i++) {
            const subLink = link.subLinks[i];
            subLinks.append(
              $("<a>", {
                class: `dropdown-item`,
                href: "#",
              }).text(subLink)
            );
          }
          return subLinks;
        })()
      );

      parentElement.append(mobileElement);
    }
  });
}

function Command(action, predicate) {
  this.action = action;
  this.predicate = predicate;
}

const scrollActions = [];
let listeningScroll = false;
function scrollHandler() {
  scrollActions.forEach((element) => {
    if (element.predicate()) {
      element.action();
    }
  });
}
//"scroll" eventi tetiklendiğinde ve predicate "true" iken callbackFn çalıştırılır.
function scrollEvent(callbackFn, predicate) {
  if (!listeningScroll) {
    addEventListener("scroll", scrollHandler);
    listeningScroll = true;
  }
  scrollActions.push(new Command(callbackFn, predicate));
}
