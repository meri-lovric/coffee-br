nextIcon.addEventListener("click", function (e){
    let orderedItems=document.getElementById("order-row").querySelectorAll(".order-list");
    for(let i=0;i<orderedItems.length;i++){
        if(orderedItems[i].textContent.indexOf("kava") !== -1){
            let coffeeIcons=document.querySelectorAll("#coffee-counter li");
            let j=0;
            while(coffeeIcons[j].classList.contains("selected")){
                j++;
            }
            coffeeIcons[j].classList.add("selected");
            document.getElementById("coffee-current-counter").innerHTML = j+1+"/"+ '9';
        }
    }
});


