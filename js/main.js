function disableScrolling() {
  let x = window.scrollX;
  let y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {
  };
}


$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  function cb() {
    let userMenu = document.getElementsByClassName('user-menu')[0],
      overlay = document.getElementsByClassName('overlay')[0];

    (userMenu.style.display === 'block' ? disableScrolling() : enableScrolling());
    overlay.style.display = (userMenu.style.display === 'block' ? 'none' : 'block');
    userMenu.style.display = (userMenu.style.display === 'block' ? 'none' : 'block');
  }

  let toggleBtns = document.getElementsByClassName('toggle'),
    overlay = document.getElementsByClassName('overlay')[0];

  toggleBtns[0].addEventListener('click', cb);
  toggleBtns[1].addEventListener('click', cb);
  overlay.addEventListener('click', cb);
});