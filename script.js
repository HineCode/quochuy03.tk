$(window).on("load", function (event) {
  $("body").removeClass("preloading");
  $(".load").delay(1000).fadeOut("fast");
});
//
const toggle = document.querySelector(".toggle__theme");
const card = document.querySelector(".app");
toggle.addEventListener("click", () => {
  let theme = toggle.querySelector(".fas");
  if (theme.classList.contains("fa-moon")) {
    theme.classList.remove("fa-moon");
    theme.classList.add("fa-sun");
    card.classList.add("dark");
  } else {
    theme.classList.remove("fa-sun");
    theme.classList.add("fa-moon");
    card.classList.remove("dark");
  }
});

alert("Chào Bạn Đã Đến Với Dịch Vụ Của Chúng Tôi !");

// tụ động //

var currentTime = new Date().getHours();
if (6 <= currentTime && currentTime < 17) {
  $("html").removeClass("dark");
} else {
  $("html").addClass("dark");
}

/////////////tuyetroi///////////////////
