var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
    document.getElementById("cloud").src="./assets/img/logo.svg";
    document.getElementById("cloud_in").src="./assets/img/logo_in.svg";
  } else {
    navbar.classList.remove('scrolled')
    document.getElementById("cloud").src="./assets/img/logo_dark.svg";
    document.getElementById("cloud_in").src="./assets/img/logo_in_dark.svg";
  }
}


// const imageContainer = document.querySelector('  nav.scrolled .logo')
// const image = imageContainer.querySelector('img');

// const setImage = (url) => {
//     image.src = "./assets/img/logo.svg" //url is the relative path I'm reading from the array
// }

$('.button').first().addClass('active');

$('.button').click(function(){
  var $this = $(this);
  $siblings = $this.parent().children(),
  position = $siblings.index($this);
  console.log (position);
  
  $('.content div').removeClass('active').eq(position).addClass('active');
  
  $siblings.removeClass('active');
  $this.addClass('active');
})