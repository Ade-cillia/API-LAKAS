let icon = document.getElementById('burger-menu')
let menu = document.querySelector('aside')
let sticky = menu.offsetTop;

icon.addEventListener("click", function() {
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times-circle');
  menu.classList.toggle('aside-visible');
});

// window.onscroll = () => {
//   if (window.pageYOffset > sticky) {
//     menu.classList.add('aside-fixed');
//   }
//   else {
//     menu.classList.remove('aside-fixed');
//   }
// }