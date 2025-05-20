/*Toggle menu bar reponsive */
const toggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

 /* Hiển thị % skill bar */
  function animateSkill(idBar, idPercent, target) {
    let percent = 0;
    const bar = document.getElementById(idBar);
    const label = document.getElementById(idPercent);
    const interval = setInterval(() => {
      if (percent >= target) {
        clearInterval(interval);
      } else {
        percent++;
        bar.style.width = percent + "%";
        label.innerText = percent + "%";
      }
    }, 15); // tốc độ tăng (càng nhỏ càng nhanh)
  }

  // Gọi khi trang load xong
  window.addEventListener("load", () => {
    animateSkill("htmlBar", "htmlPercent", 90);
    animateSkill("jsBar", "jsPercent", 80);
    animateSkill("javaBar","javaPercent", 70);
    animateSkill("NetBar", "NetPercent", 75);
    // Thêm các kỹ năng khác ở đây
  });

  

/*section ảnh động */
 const slider = document.getElementById('slider');
const avatarCount = slider.children.length;

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % avatarCount;
  slider.style.transform = `translateX(-${200 * currentIndex}px)`;
}, 3000); // đổi ảnh mỗi 3 giây