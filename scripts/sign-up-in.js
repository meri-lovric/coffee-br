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
  displayProfile();
  window.location.href = "http://pzi.fesb.hr/LovricMeri/PI2/index.html"
}
document.getElementById('login-icon').addEventListener("click", function() {
  $('#overlay').removeClass('blur-out');
  $('#overlay').addClass('blur-in');
  $('.form').show();
  $('.form').fadeIn(1000);
document.querySelector('.bg-modal').style.display = "flex";
});
document.querySelector('.form .close').addEventListener("click", function() {
document.querySelector('.bg-modal').style.display = "none";
$('.form').fadeOut(700);
      $('#overlay').removeClass('blur-in');
      $('#overlay').addClass('blur-out');
});

document.getElementById('logout-icon').addEventListener("click", function() {
document.querySelector('.button-block').addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "none";
});

 document.querySelector('#logout-icon').addEventListener("click", function() {
  
  confirm('Jeste li sigurni da se želite odjaviti?');
  
});

})

// DISPLAY USER / ADMIN PROFILE
function displayProfile(e){
  let name = document.getElementById("log-name").value;
  if(!name){return;}
  let surname = document.getElementById("log-surname").value;
  if(!surname){return;}
  let email=document.getElementById("log-email");
  if(!email){return;}
  document.querySelector("#Profile .full-name ").innerHTML="Ime i prezime: " + name + " " + surname;
  document.querySelector("#Profile .email").innerHTML="E-mail adresa: " + email;
}