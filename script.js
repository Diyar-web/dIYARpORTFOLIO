const faders = document.querySelectorAll(".fade-in");
const options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

faders.forEach((fader) => {
  observer.observe(fader);
});

const arrow = document.getElementById("arrow");
arrow.addEventListener("click", () => {
  arrow.classList.add("clicked");
  setTimeout(() => {
    arrow.classList.remove("clicked");
  }, 300);
});

$(document).ready(function () {
  $(".expand-btn").click(function () {
    let hiddenBlocks = $(".expandable");
    hiddenBlocks.toggleClass("hidden");
    if (hiddenBlocks.is(":visible")) {
      $(this).text("Скрыть");
    } else {
      $(this).text("Смотреть еще");
    }
  });
});
