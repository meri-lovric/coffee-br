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
    });
