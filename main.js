var occupiedSeats = 0;
// TABS
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // SEATS
 let seats = document.querySelectorAll(".layout__seat");
 /*
 for(i=0;i<seats.length;i++){
   if(seats[i].classList.contains("clicked")){
     occupiedSeats++;
   }
 }
 */
 document.getElementById("seat-counter").innerHTML = occupiedSeats+"/"+seats.length;
 for(i=0;i<seats.length;i++){
   let seat = seats[i];
   seat.addEventListener('click', reserveSeat);
 }
  function reserveSeat(e){
    let reservedSeat=e.currentTarget;
    if(reservedSeat.classList.contains("layout__seat--selected") == 0){
     reservedSeat.classList.add("layout__seat--selected");
     occupiedSeats++;
   }
   else{
     reservedSeat.classList.remove("layout__seat--selected");
     occupiedSeats--;
   }
   document.getElementById("seat-counter").innerHTML = occupiedSeats+"/"+seats.length;
 }

 // OPEN WELCOME ON LOAD

 window.onload = function() {
  document.getElementById("Welcome").style.display = "block";
};

function addUser(evt, TabName){
  let fullName = prompt("Ime i prezime:", "full name");
  if(!fullName){return;}
  let username = prompt("Korisničko ime:", "username");
  if(!username){return;}
  let email = prompt("E-mail adresa:", "e-mail");
  if(!email){return;}

  document.querySelector("#Profile .full-name ").innerHTML="Ime i prezime: " + fullName;
  document.querySelector("#Profile .username").innerHTML="Korisničko ime: " + username;
  document.querySelector("#Profile .email").innerHTML="E-mail adresa: " + email;
}

/* COFFEE COUNTER */

// Check if an element is on sceen every 2 seconds. Add and remove "visbile" class as applicable.
setInterval(function() {
  $('.listing--animated-ordered').filter(":onScreen").addClass('visible');
}, 2000)

// ORDER CONTAINER

$('.panel').click(function() {
  if(!$(this).hasClass('active')) {
    var index = $(this).index();
    $('#order').removeClass();
    $('#order').addClass('opt'+(index+1));
    $('#choice').get(0).selectedIndex = index;
    $(this).siblings().addClass('hidden');
    $(this).addClass('active');
    $('#order').delay(800).slideToggle(400);
  }
});

$('#back').click(function(e) {
  $('#order').slideToggle(400);
  var self = this;
  setTimeout(function() {
    $('.panel').removeClass('hidden active');
  }, 400);
  e.preventDefault();
});

$('#submit').click(function(e) {
  e.preventDefault();
});

$('#quantity').on('input change', function() {
  var qv = $('#quantity').val();
  if(qv % 1 != 0) {
    qv = parseInt(qv, 10);
    if(qv == 0) qv = "";
    qv += "½";
  }
  $('label[for="quantity"]').text(qv);
  // TODO: update the price as well
})