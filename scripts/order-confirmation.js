
let nextIcon = document.getElementById("btn");
nextIcon.addEventListener("click", function (){
    //console.log(e.target.options[e.target.selectedIndex].text);
    var e = document.getElementById("table");
    var table_value = e.options[e.selectedIndex].value;
    var table = e.options[e.selectedIndex];
    let tableIcons = document.querySelectorAll(".layout__seat");
        for(let j=0;j<tableIcons.length;j++){
            if(tableIcons[j].textContent == table_value){
                    tableIcons[j].classList.add("layout__seat--selected");
                    table.setAttribute('disabled', true);
                    occupiedSeats++;
            }
        }
        document.getElementById("seat-counter").innerHTML = occupiedSeats+"/"+seats.length;
   
    $(function () {
        $('#overlay').removeClass('blur-out');
        $('#overlay').addClass('blur-in');
        
        prompt("Nastaviti?");
       if(prompt){
        document.querySelector(".pop-up").style.display="block";
       } 
       $('.pop-up').show();
        $('.pop-up').fadeIn(1000);
        
            $('.close-button').click(function (e) { 
      
            $('.pop-up').fadeOut(700);
            $('#overlay').removeClass('blur-in');
            $('#overlay').addClass('blur-out');
            e.stopPropagation();
              
          });
        });
    });
