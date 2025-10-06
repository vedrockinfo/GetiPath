  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".navLink");
    const sections = document.querySelectorAll("section[id]");

    function activateTab(tabName) {
      
      tabs.forEach(t => t.classList.remove("active"));
      sections.forEach(sec => sec.classList.remove("active"));

      const tab = [...tabs].find(t => t.dataset.tab === tabName);
      const section = document.getElementById(tabName);

      if (tab && section) {
        tab.classList.add("active");
        section.classList.add("active");
        history.replaceState(null, "", "#" + tabName);
      }
    }

    // Handle click
    tabs.forEach(tab => {
      tab.addEventListener("click", function (e) {
        e.preventDefault();
        activateTab(this.dataset.tab);
      });
    });

    // On page load → check hash
    const hash = window.location.hash.substring(1);
    if (hash) {
      activateTab(hash);
    } else {
      // default to first tab
      activateTab(tabs[0].dataset.tab);
    }
  });


  $('.videoSlider').owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
  mouseDrag: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});