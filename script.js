function show(page, el) {
  const app = document.getElementById("app");

  document.querySelectorAll(".nav button").forEach(btn => {
    btn.classList.remove("active");
  });
  el.classList.add("active");

  app.classList.add("fade-out");

  setTimeout(() => {
    fetch(page + ".html")
      .then(res => res.text())
      .then(html => {
        app.innerHTML = html;
        app.classList.remove("fade-out");
      });
  }, 300);
}

window.onload = () => {
  // LOAD DEFAULT PAGE
  const firstBtn = document.querySelector(".nav button");
  show("live", firstBtn);

  // HERO VIDEO TOGGLE
  const clickZone = document.querySelector(".hero-click");
  const secondClickZone = document.querySelector(".heroclicktwo");
  const hero = document.querySelector(".hero");
  const video = document.getElementById("hero-video");
  const videoTwo = document.getElementById("videotwo");

  let isVideo = false;
  let isVideoTwo = false;

  clickZone.addEventListener("click", () => {
    isVideo = !isVideo;
    isVideoTwo = false;
    hero.classList.remove("video-two-active");
    videoTwo.pause();

    if (isVideo) {
      hero.classList.add("video-active");
      video.play();
    } else {
      hero.classList.remove("video-active");
      video.pause();
    }
  });

  secondClickZone.addEventListener("click", () => {
    isVideoTwo = !isVideoTwo;
    isVideo = false;
    hero.classList.remove("video-active");
    video.pause();

    if (isVideoTwo) {
      hero.classList.add("video-two-active");
      videoTwo.play();
    } else {
      hero.classList.remove("video-two-active");
      videoTwo.pause();
    }
  });
};

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("tag")) {
    e.preventDefault();

    const tag = e.target.dataset.tag;

    document.querySelectorAll(".post").forEach(post => {
      const tags = post.dataset.tags;

      if (tags.includes(tag)) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  }
});