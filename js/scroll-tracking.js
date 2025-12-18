document.addEventListener("DOMContentLoaded", function () {
  const post = document.querySelector("article");

  if (!post) return;

  let fired50 = false;
  let fired90 = false;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollPercent >= 50 && !fired50) {
      fired50 = true;
      gtag("event", "post_scroll_50", {
        page_path: window.location.pathname
      });
    }

    if (scrollPercent >= 90 && !fired90) {
      fired90 = true;
      gtag("event", "post_scroll_90", {
        page_path: window.location.pathname
      });
    }
  });
});
