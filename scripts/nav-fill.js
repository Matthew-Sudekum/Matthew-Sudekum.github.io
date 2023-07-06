const nav = document.querySelector('header');
const sections = document.querySelectorAll('section');

function getSectionBackgroundColor() {
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();
    if (rect.top <= nav.scrollTop && rect.bottom >= nav.offsetHeight) {
      return getComputedStyle(section).backgroundColor;
    }
  }
  return null;
}

window.addEventListener('scroll', function () {
  const sectionBgColor = getSectionBackgroundColor();
  if (sectionBgColor) {
    nav.style.backgroundColor = sectionBgColor;
  } else {
    nav.style.backgroundColor = 'transparent';
  }
});