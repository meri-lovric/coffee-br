// VARIABLES

var occupiedSeats = 0; // global variable used for displaying current occupation
/* ---------------------------------------------------------------------- */

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

/* ---------------------------------------------------------------------- */

  // CLICKING ON SEATS

 let seats = document.querySelectorAll(".layout__seat");
 
 document.getElementById("seat-counter").innerHTML = occupiedSeats+"/"+seats.length;
 for(i=0;i<seats.length;i++){
   let seat = seats[i];
   seat.addEventListener('click', reserveSeat);
   seat.addEventListener("click", handleClick);
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
     for(let j=0;j < options.length; j++){
      let  option = options[j];
      if(option.textContent.indexOf(reservedSeat.textContent) > 0){
      }
    }
     }
   document.getElementById("seat-counter").innerHTML = occupiedSeats+"/"+seats.length;
 }

 let options = document.querySelectorAll(".table option");

function handleClick(e){
  let table = e.currentTarget;
if(table.classList.contains(".layout__seat.layout__seat--selected " )== 0){
  for(let j=0;j < options.length; j++){
      let  option = options[j];
      if(option.textContent.indexOf(table.textContent) > 0){
          option.setAttribute('disabled', true);
      }
  }
}
}
/* ---------------------------------------------------------------------- */


// LOGO ANIMATION 

function init() {  
  title.classList.add("loading");
  setTimeout(function() { title.classList.remove("loading"); }, 1800); 
}
/* ---------------------------------------------------------------------- */
// LOADING WINDOW

window.onload = function() {
  document.getElementById("Welcome").style.display = "block";
  document.querySelector(".row.pop-up").style.display="none";

  document.body.addEventListener('click', () => init());
	init();
}; 

/* ---------------------------------------------------------------------- */

