let deleteItems=document.querySelectorAll("#order-container .fas.fa-times");
for(let i=0;i<deleteItems.length;i++){
    let deleteItem=deleteItems[i];
    deleteItem.addEventListener("click", deleteOrderItem);
    
}
function deleteOrderItem(e){
        let orderItem=e.currentTarget;
        orderItem.parentElement.remove();
    }
function reducePrice(e){
    let name = e.currentTarget.parentElement.querySelector(".name").textContent;
    let totalPrice=document.querySelector(".total");
    let panels=document.querySelectorAll(".panel");
    for(i=0;i<panels.length;i++){
        if(panels[i].textContent.indexOf(name) !== -1){
            let value=panels[i].querySelector(".price").textContent;
            totalPrice.textContent=Number(totalPrice.textContent)-Number(value);
            break;
        }
    
    }
}