$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  var $this = $(this),
      label = $this.prev('label');
      if (e.type === 'keyup') {
            if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if( $this.val() === '' ) {
            label.removeClass('active highlight'); 
            } else {
            label.removeClass('highlight');   
            }   
    } else if (e.type === 'focus') {
      if( $this.val() === '' ) {
            label.removeClass('highlight'); 
            } 
      else if( $this.val() !== '' ) {
            label.addClass('highlight');
            }
    }
});
//prebacivanje s login na reg 
$('.tag a').on('click', function (e) {
  e.preventDefault();
  $(this).parent().addClass('active'); 
  $(this).parent().siblings().removeClass('active');
  target = $(this).attr('href');
  $('.tab-content > div').not(target).hide();
  $(target).fadeIn(600);
});
$('.form').submit(function () {
  sendForm();
  return false;
 });
function sendForm (){
  window.location.href = "file:///C:/Users/KORISNICA/Downloads/coffee-br-master%20(3)/coffee-br-master/index.html"
}
document.getElementById('login-icon').addEventListener("click", function() {
document.querySelector('.bg-modal').style.display = "flex";
});
document.querySelector('.form .close').addEventListener("click", function() {
document.querySelector('.bg-modal').style.display = "none";
});

document.getElementById('logout-icon').addEventListener("click", function() {
document.querySelector('.button-block').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "none";
});

 document.querySelector('#logout-icon').addEventListener("click", function() {
  confirm('Jeste li sigurni da se želite odjaviti?');
});
})
