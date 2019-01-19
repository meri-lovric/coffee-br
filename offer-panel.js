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

    ///---------------------------------------------------------------------------------------------------------------------------

      //
      // ADD BUTTON
      //
    let add = currentPanel.parentElement.querySelector(".submit");
    add.addEventListener("click", addArticles);
    add.addEventListener("click", calculatePrice);
    function addArticles(e)
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
      e.preventDefault();

    }
    ///---------------------------------------------------------------------------------------------------------------------------


    //PRICE CALCULATOR//
    function calculatePrice()
    {
    let price =currentPanel.querySelector(".price");
    let totalPrice=document.querySelector(".total");
    console.log(price);
    totalPrice.textContent=Number(totalPrice.textContent)+
    Number(price.textContent);

    }
    ///---------------------------------------------------------------------------------------------------------------------------


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
    ///---------------------------------------------------------------------------------------------------------------------------
  }
}


    //
    //  SEARCH
    //  
    let searchBox=document.querySelector("#search-box");
    let menus=document.querySelectorAll(".menu");
    searchBox.addEventListener("keyup", handleSearch);

    function handleSearch(e)
    {
      let currentValue=e.currentTarget.value;
      
      for (let i=0; i<menus.length; i++){
          let menu=menus[i];
          let panels=menu.querySelectorAll(".panel");
          let names=menu.querySelectorAll(".name");
          for (let j=0; j<names.length; j++)
          {
            let name=names[j];
            if(currentValue==="")
            {
              menu.parentElement.classList.remove("hidden");
              name.parentElement.querySelector(".fa-plus").classList.remove("hidden");
            }
            else
            {

              if(name.textContent.toLowerCase().indexOf(currentValue.toLowerCase())> -1 && name.textContent[0].indexOf(currentValue[0].toUpperCase())>-1)
              {
                
                menu.parentElement.classList.remove("hidden");
                name.parentElement.querySelector(".fa-plus").classList.add("hidden");
                break;
              }
              else
              {
                menu.parentElement.classList.add("hidden");
              }
            }
           
          }

          for (let k=0; k<panels.length; k++){
              let panel=panels[k];
              let name=panel.querySelector(".name");
            
              console.log(name.textContent[0]);

              if(currentValue==="")
              {
                panel.classList.remove("hidden");
                panel.querySelector(".fa-plus").classList.remove("hidden");
              }
              else{

              
              if(name.textContent.toLowerCase().indexOf(currentValue.toLowerCase())> -1 && name.textContent[0].indexOf(currentValue[0].toUpperCase())>-1)
              {
                
                panel.classList.remove("hidden");
                panel.querySelector(".fa-plus").classList.add("hidden");
              }
              
              else
              {
                panel.classList.add("hidden");
              }
            }
          }

       }

      }
    