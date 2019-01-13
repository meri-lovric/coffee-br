
let panels = document.querySelectorAll(".panel");
for(let i=0; i<panels.length; i++){
  let panel=panels[i];
  panel.addEventListener("click", handlePanelClick);
  
}
function handlePanelClick(e){
  let currentPanel = e.currentTarget;
  if(currentPanel.classList.contains("active") == 0){
    var index = $(currentPanel).index();
    var order = currentPanel.parentElement.querySelector(".order");
    $(order).addClass('opt'+(4));
    $(currentPanel).addClass("active");
    //order.classList.addClass("opt1");
    let panelsInstance=currentPanel.parentElement.querySelectorAll(".panel");
    for(i=0;i<panelsInstance.length;i++){
      if(panelsInstance[i].classList.contains("active")== 0){
        $(panelsInstance[i]).addClass("hidden");
      }
    }
    $(order).delay(800).slideToggle(400);
    //
    // BACK BUTTON
    //
    
    let back = currentPanel.parentElement.querySelector(".back");
    back.addEventListener("click",function(){
          $(order).slideToggle(400);
          var self = this;
          setTimeout(function() {
        $(currentPanel).removeClass('active');
        }, 400);
        for(i=0;i<panelsInstance.length;i++){
            $(panelsInstance[i]).removeClass("hidden");
        }
      e.preventDefault();
      })
      //
      // ADD BUTTON
      //
    let add = currentPanel.parentElement.querySelector(".submit");
    add.addEventListener("click", addArticles);
    add.addEventListener("click", calculatePrice);
    function addArticles()
    {
      let orderTemplate=document.querySelector("#order-template");
      let orderElement=document.importNode(orderTemplate.content, true);
      
      let articleName=currentPanel.querySelector(".name");
      let articleNum=order.querySelector('[for="quantity"]');
      let orderList=orderElement.querySelectorAll("span");
      orderList[0].innerHTML=articleName.innerHTML;
      orderList[1].innerHTML="x";
      orderList[2].innerHTML=articleNum.innerHTML;

      let orderContainer=document.querySelector(".order-row");
      let ordered=document.querySelector("#order-list");
      orderContainer.insertBefore(orderElement,ordered);
    }

    //PRICE CALCULATOR//
    function calculatePrice()
    {
    let price =currentPanel.parentElement.querySelector(".price");
    let totalPrice=document.querySelector(".total");
    let payablePrice=document.querySelector(".payable");
    let discountPrice=document.querySelector(".discount");

    totalPrice.textContent=Number(totalPrice.textContent)+
    Number(price.textContent);

    payablePrice.textContent=Number(totalPrice.textContent)-
    Number(discountPrice.textContent);
    }
    
    //
    //  QUANTITY
    //  
    let quantity=currentPanel.parentElement.querySelector(".quantity");
    quantity.addEventListener("input", function(){
        $(quantity).on('input change', function() {
        var qv = $(quantity).val();
        if(qv % 1 != 0) {
          qv = parseInt(qv, 10);
          if(qv == 0) qv = "";
          qv += "½";
        }
        $('label[for="quantity"]').text(qv);
        let price = currentPanel.querySelector(".price");
        let value = price.getAttribute("value");
        $(price).text(value*qv);
        //price.innerHTML=$(price);
        e.preventDefault();
      })
    })
    

  }
}

$('.submit').click(function(e) {
  e.preventDefault();
});

$('.quantity').on('input change', function() {
  var qv = $('.quantity').val();
  if(qv % 1 != 0) {
    qv = parseInt(qv, 10);
    if(qv == 0) qv = "";
    qv += "½";
  }
  $('label[for="quantity"]').text(qv);
  // TODO: update the price as well
})