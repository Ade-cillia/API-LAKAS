let icon = document.getElementById('burger-menu')
let menu = document.querySelector('aside')
let sticky = document.querySelector('.banner').offsetHeight


function closeMenu() {
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times-circle');
  menu.classList.toggle('aside-visible');
}

icon.addEventListener("click", function() {
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times-circle');
  menu.classList.toggle('aside-visible');
});

window.onscroll = () => {
  if (window.pageYOffset < document.querySelector('.banner').offsetHeight){
    menu.classList.remove('aside-fixed');
  }
  else if (window.pageYOffset > menu.offsetTop ) {
     menu.classList.add('aside-fixed');
    // console.log('now')
   }
   else {
     menu.classList.remove('aside-fixed');
   }
}