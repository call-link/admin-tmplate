const body = document.querySelector("body"),
  modeToggle = body.querySelector(".toggle-mode");
sidebar = body.querySelector("nav");
sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
};

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("c-panel");
};

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  };
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("c-panel");
  if (sidebar.classList.contains("c-panel")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  };
});


$(document).ready(function () {
  // start tools
  $('.menu_btn').click(function () {
    $('#circle-menu').toggleClass('active');
  });
  // end tools
  // satrt counter
  $('.counter').each(function () {
    var $this = $(this);
    var countTo = $this.attr('data-count');
    $({ countNum: $this.text() }).animate({
      countNum: countTo,
    },
      {
        duration: 3000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum))
        },
        complete: function () {
          $this.text(this.countNum);
        }
      }
    );
  });
  // end counter
});