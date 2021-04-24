// add btns
var add1 = document.getElementById('add-ph-1')
var add2 = document.getElementById('add-ph-2')
var add3 = document.getElementById('add-ph-3')
var add4 = document.getElementById('add-ph-4')
var add5 = document.getElementById('add-ph-5')
var add6 = document.getElementById('add-ph-6')
var add7 = document.getElementById('add-ph-7')
var add8 = document.getElementById('add-ph-8')
var add9 = document.getElementById('add-ph-9')
var add10 = document.getElementById('add-ph-10')
//buy btns
var buy1 = document.getElementById('buy-ph-1')
var buy2 = document.getElementById('buy-ph-2')
var buy3 = document.getElementById('buy-ph-3')
var buy4 = document.getElementById('buy-ph-4')
var buy5 = document.getElementById('buy-ph-5')
var buy6 = document.getElementById('buy-ph-6')
var buy7 = document.getElementById('buy-ph-7')
var buy8 = document.getElementById('buy-ph-8')
var buy9 = document.getElementById('buy-ph-9')
var buy10 = document.getElementById('buy-ph-10')
// rmv btns
var rmv1 = document.getElementById('rmvPhone1')
var rmv2 = document.getElementById('rmvPhone2')
//comp btn
var comp = document.getElementById('compute')
//cart "btns"
var cancelShop = document.getElementById('cancle-shopping')
var buyAll = document.getElementById('buy-items')
var openCart = document.getElementById('open-cart')
var closeCart = document.getElementById('close-cart')
//cart vars
var price = document.getElementById('cart-total-price')

//phone 1 vars
var image1 = document.getElementById('image1')
var im1 = document.getElementById('im1')
var bat1 = document.getElementById('bat1')
var mem1 = document.getElementById('mem1')
var ram1 = document.getElementById('ram1')
var cam1 = document.getElementById('cam1')
var fcam1 = document.getElementById('fcam1')
var price1 = document.getElementById('price1')
//phone 2 vars
var image2 = document.getElementById('image2')
var im2 = document.getElementById('im2')
var bat2 = document.getElementById('bat2')
var mem2 = document.getElementById('mem2')
var ram2 = document.getElementById('ram2')
var cam2 = document.getElementById('cam2')
var fcam2 = document.getElementById('fcam2')
var price2 = document.getElementById('price2')
//phone 3 vars
var image3 = document.getElementById('image3')
var im3 = document.getElementById('im3')
var bat3 = document.getElementById('bat3')
var mem3 = document.getElementById('mem3')
var ram3 = document.getElementById('ram3')
var cam3 = document.getElementById('cam3')
var fcam3 = document.getElementById('fcam3')
var price3 = document.getElementById('price3')
//phone 4 vars
var image4 = document.getElementById('image4')
var im4 = document.getElementById('im4')
var bat4 = document.getElementById('bat4')
var mem4 = document.getElementById('mem4')
var ram4 = document.getElementById('ram4')
var cam4 = document.getElementById('cam4')
var fcam4 = document.getElementById('fcam4')
var price4 = document.getElementById('price4')
//phone 5 vars
var image5 = document.getElementById('image5')
var im5 = document.getElementById('im5')
var bat5 = document.getElementById('bat5')
var mem5 = document.getElementById('mem5')
var ram5 = document.getElementById('ram5')
var cam5 = document.getElementById('cam5')
var fcam5 = document.getElementById('fcam5')
var price5 = document.getElementById('price5')
//phone 6 vars
var image6 = document.getElementById('image6')
var im6 = document.getElementById('im6')
var bat6 = document.getElementById('bat6')
var mem6 = document.getElementById('mem6')
var ram6 = document.getElementById('ram6')
var cam6 = document.getElementById('cam6')
var fcam6 = document.getElementById('fcam6')
var price6 = document.getElementById('price6')
//phone 7 vars
var image7 = document.getElementById('image7')
var im7 = document.getElementById('im7')
var bat7 = document.getElementById('bat7')
var mem7 = document.getElementById('mem7')
var ram7 = document.getElementById('ram7')
var cam7 = document.getElementById('cam7')
var fcam7 = document.getElementById('fcam7')
var price7 = document.getElementById('price7')
//phone 8 vars
var image8 = document.getElementById('image8')
var im8 = document.getElementById('im8')
var bat8 = document.getElementById('bat8')
var mem8 = document.getElementById('mem8')
var ram8 = document.getElementById('ram8')
var cam8 = document.getElementById('cam8')
var fcam8 = document.getElementById('fcam8')
var price8 = document.getElementById('price8')
//phone 9 vars
var image9 = document.getElementById('image9')
var im9 = document.getElementById('im9')
var bat9 = document.getElementById('bat9')
var mem9 = document.getElementById('mem9')
var ram9 = document.getElementById('ram9')
var cam9 = document.getElementById('cam9')
var fcam9 = document.getElementById('fcam9')
var price9 = document.getElementById('price9')
//phone 10 vars
var image10 = document.getElementById('image10')
var im10 = document.getElementById('im10')
var bat10 = document.getElementById('bat10')
var mem10 = document.getElementById('mem10')
var ram10 = document.getElementById('ram10')
var cam10 = document.getElementById('cam10')
var fcam10 = document.getElementById('fcam10')
var price10 = document.getElementById('price10')
// compare signs
var comPhone = document.getElementById('between-phones')
var comBat = document.getElementById('comp-batt')
var comMem = document.getElementById('comp-mem')
var comRam = document.getElementById('comp-ram')
var comCam = document.getElementById('comp-cam')
var comFcam = document.getElementById('comp-fcam')
var comPrice = document.getElementById('comp-price')
// compare phone1
var compPhone1 = document.getElementById('comp-phone1')
var comBat1 = document.getElementById('comp-batt1')
var comMem1 = document.getElementById('comp-mem1')
var comRam1 = document.getElementById('comp-ram1')
var comCam1 = document.getElementById('comp-cam1')
var comFcam1 = document.getElementById('comp-fcam1')
var comPrice1 = document.getElementById('comp-price1')
// compare phone2
var compPhone2 = document.getElementById('comp-phone2')
var comBat2 = document.getElementById('comp-batt2')
var comMem2 = document.getElementById('comp-mem2')
var comRam2 = document.getElementById('comp-ram2')
var comCam2 = document.getElementById('comp-cam2')
var comFcam2 = document.getElementById('comp-fcam2')
var comPrice2 = document.getElementById('comp-price2')
//objects
var theCart = document.getElementById('my-shopping-cart');
var cartItems = document.getElementById('cart-items');
//remove functions
function remove1 (){
    compPhone1.innerHTML= ''
    comBat1.innerHTML = ''
    comMem1.innerHTML = ''
    comRam1.innerHTML = ''
    comCam1.innerHTML = ''
    comFcam1.innerHTML = ''
    comPrice1.innerHTML = ''
//and
    comBat.innerHTML = ''
    comMem.innerHTML = ''
    comRam.innerHTML = ''
    comCam.innerHTML = ''
    comFcam.innerHTML = ''
    comPrice.innerHTML = ''
}
function remove2 (){
    compPhone2.innerHTML= ''
    comBat2.innerHTML = ''
    comMem2.innerHTML = ''
    comRam2.innerHTML = ''
    comCam2.innerHTML = ''
    comFcam2.innerHTML = ''
    comPrice2.innerHTML = ''
//and
    comBat.innerHTML = ''
    comMem.innerHTML = ''
    comRam.innerHTML = ''
    comCam.innerHTML = ''
    comFcam.innerHTML = ''
    comPrice.innerHTML = ''
}
// add function
function addPone1(){
    if(compPhone1.innerText == ''){
        compPhone1.innerHTML = im1.innerText
        comBat1.innerHTML = bat1.innerText
        comMem1.innerHTML = mem1.innerText
        comRam1.innerHTML = ram1.innerText
        comCam1.innerHTML = cam1.innerText
        comFcam1.innerHTML = fcam1.innerText
        comPrice1.innerHTML = price1.innerText
        testing()
        hideCompare()
    } else if(compPhone2.innerText == ''){
        compPhone2.innerHTML= im1.innerText
        comBat2.innerHTML = bat1.innerText
        comMem2.innerHTML = mem1.innerText
        comRam2.innerHTML = ram1.innerText
        comCam2.innerHTML = cam1.innerText
        comFcam2.innerHTML = fcam1.innerText
        comPrice2.innerHTML = price1.innerText
        testing()
        hideCompare()
    } else{
        alert('remove a phone from comparison table')
    }
}
function addPone2(){
    if(compPhone1.innerText == ''){
        compPhone1.innerHTML = im2.innerText
        comBat1.innerHTML = bat2.innerText
        comMem1.innerHTML = mem2.innerText
        comRam1.innerHTML = ram2.innerText
        comCam1.innerHTML = cam2.innerText
        comFcam1.innerHTML = fcam2.innerText
        comPrice1.innerHTML = price2.innerText
        testing()
        hideCompare()
    } else if(compPhone2.innerText == ''){
        compPhone2.innerHTML= im2.innerText
        comBat2.innerHTML = bat2.innerText
        comMem2.innerHTML = mem2.innerText
        comRam2.innerHTML = ram2.innerText
        comCam2.innerHTML = cam2.innerText
        comFcam2.innerHTML = fcam2.innerText
        comPrice2.innerHTML = price2.innerText
        testing()
        hideCompare()
    } else{
        alert('remove a phone from comparison table')
    }
}
function addPone3(){
    if(compPhone1.innerText == ''){
        compPhone1.innerHTML = im3.innerText
        comBat1.innerHTML = bat3.innerText
        comMem1.innerHTML = mem3.innerText
        comRam1.innerHTML = ram3.innerText
        comCam1.innerHTML = cam3.innerText
        comFcam1.innerHTML = fcam3.innerText
        comPrice1.innerHTML = price3.innerText
        testing()
        hideCompare()
    } else if(compPhone2.innerText == ''){
        compPhone2.innerHTML= im3.innerText
        comBat2.innerHTML = bat3.innerText
        comMem2.innerHTML = mem3.innerText
        comRam2.innerHTML = ram3.innerText
        comCam2.innerHTML = cam3.innerText
        comFcam2.innerHTML = fcam3.innerText
        comPrice2.innerHTML = price3.innerText
        testing()
        hideCompare()
    } else{
        alert('remove a phone from comparison table')
    }
}
function addPone4(){
    if(compPhone1.innerText == ''){
        compPhone1.innerHTML = im4.innerText
        comBat1.innerHTML = bat4.innerText
        comMem1.innerHTML = mem4.innerText
        comRam1.innerHTML = ram4.innerText
        comCam1.innerHTML = cam4.innerText
        comFcam1.innerHTML = fcam4.innerText
        comPrice1.innerHTML = price4.innerText
        testing()
        hideCompare()
    } else if(compPhone2.innerText == ''){
        compPhone2.innerHTML= im4.innerText
        comBat2.innerHTML = bat4.innerText
        comMem2.innerHTML = mem4.innerText
        comRam2.innerHTML = ram4.innerText
        comCam2.innerHTML = cam4.innerText
        comFcam2.innerHTML = fcam4.innerText
        comPrice2.innerHTML = price4.innerText
        testing()
        hideCompare()
    } else{
        alert('remove a phone from comparison table')
    }
}
function addPone5(){
    if(compPhone1.innerText == ''){
        compPhone1.innerHTML = im5.innerText
        comBat1.innerHTML = bat5.innerText
        comMem1.innerHTML = mem5.innerText
        comRam1.innerHTML = ram5.innerText
        comCam1.innerHTML = cam5.innerText
        comFcam1.innerHTML = fcam5.innerText
        comPrice1.innerHTML = price5.innerText
        testing()
        hideCompare()
    } else if(compPhone2.innerText == ''){
        compPhone2.innerHTML= im5.innerText
        comBat2.innerHTML = bat5.innerText
        comMem2.innerHTML = mem5.innerText
        comRam2.innerHTML = ram5.innerText
        comCam2.innerHTML = cam5.innerText
        comFcam2.innerHTML = fcam5.innerText
        comPrice2.innerHTML = price5.innerText
        testing()
        hideCompare()
    } else{
        alert('remove a phone from comparison table')
    }
}
function addPone6(){
    if(compPhone1.innerText == ''){
        compPhone1.innerHTML = im6.innerText
        comBat1.innerHTML = bat6.innerText
        comMem1.innerHTML = mem6.innerText
        comRam1.innerHTML = ram6.innerText
        comCam1.innerHTML = cam6.innerText
        comFcam1.innerHTML = fcam6.innerText
        comPrice1.innerHTML = price6.innerText
        testing()
        hideCompare()
    } else if(compPhone2.innerText == ''){
        compPhone2.innerHTML= im6.innerText
        comBat2.innerHTML = bat6.innerText
        comMem2.innerHTML = mem6.innerText
        comRam2.innerHTML = ram6.innerText
        comCam2.innerHTML = cam6.innerText
        comFcam2.innerHTML = fcam6.innerText
        comPrice2.innerHTML = price6.innerText
        testing()
        hideCompare()
    } else{
        alert('remove a phone from comparison table')
    }
}
function addPone7(){
    if(compPhone1.innerText == ''){
        compPhone1.innerHTML = im7.innerText
        comBat1.innerHTML = bat7.innerText
        comMem1.innerHTML = mem7.innerText
        comRam1.innerHTML = ram7.innerText
        comCam1.innerHTML = cam7.innerText
        comFcam1.innerHTML = fcam7.innerText
        comPrice1.innerHTML = price7.innerText
        testing()
        hideCompare()
    } else if(compPhone2.innerText == ''){
        compPhone2.innerHTML= im7.innerText
        comBat2.innerHTML = bat7.innerText
        comMem2.innerHTML = mem7.innerText
        comRam2.innerHTML = ram7.innerText
        comCam2.innerHTML = cam7.innerText
        comFcam2.innerHTML = fcam7.innerText
        comPrice2.innerHTML = price7.innerText
        testing()
        hideCompare()
    } else{
        alert('remove a phone from comparison table')
    }
}
function addPone8(){
    if(compPhone1.innerText == ''){
        compPhone1.innerHTML = im8.innerText
        comBat1.innerHTML = bat8.innerText
        comMem1.innerHTML = mem8.innerText
        comRam1.innerHTML = ram8.innerText
        comCam1.innerHTML = cam8.innerText
        comFcam1.innerHTML = fcam8.innerText
        comPrice1.innerHTML = price8.innerText
        testing()
        hideCompare()
    } else if(compPhone2.innerText == ''){
        compPhone2.innerHTML= im8.innerText
        comBat2.innerHTML = bat8.innerText
        comMem2.innerHTML = mem8.innerText
        comRam2.innerHTML = ram8.innerText
        comCam2.innerHTML = cam8.innerText
        comFcam2.innerHTML = fcam8.innerText
        comPrice2.innerHTML = price8.innerText
        testing()
        hideCompare()
    } else{
        alert('remove a phone from comparison table')
    }
}
function addPone9(){
    if(compPhone1.innerText == ''){
        compPhone1.innerHTML = im9.innerText
        comBat1.innerHTML = parseInt(bat9.innerText)
        comMem1.innerHTML = parseInt(mem9.innerText)
        comRam1.innerHTML = parseInt(ram9.innerText)
        comCam1.innerHTML = parseInt(cam9.innerText)
        comFcam1.innerHTML = parseInt(fcam9.innerText)
        comPrice1.innerHTML = parseInt(price9.innerText)
        testing()
        hideCompare()
    } else if(compPhone2.innerText == ''){
        compPhone2.innerHTML= im9.innerText
        comBat2.innerHTML = parseInt(bat9.innerText)
        comMem2.innerHTML = parseInt(mem9.innerText)
        comRam2.innerHTML = parseInt(ram9.innerText)
        comCam2.innerHTML = parseInt(cam9.innerText)
        comFcam2.innerHTML = parseInt(fcam9.innerText)
        comPrice2.innerHTML = parseInt(price9.innerText)
        testing()
        hideCompare()
    } else{
        alert('remove a phone from comparison table')
    }   
    
}
function addPone10(){
    if(compPhone1.innerText == ''){
        compPhone1.innerHTML = im10.innerText
        comBat1.innerHTML = parseInt(bat10.innerText)
        comMem1.innerHTML = parseInt(mem2.innerText)
        comRam1.innerHTML = parseInt(ram10.innerText)
        comCam1.innerHTML = parseInt(cam10.innerText)
        comFcam1.innerHTML = parseInt(fcam10.innerText)
        comPrice1.innerHTML = parseInt(price10.innerText)
        testing()
        hideCompare()
    } else if(compPhone2.innerText == ''){
        compPhone2.innerHTML= im10.innerText
        comBat2.innerHTML = parseInt(bat10.innerText)
        comMem2.innerHTML = parseInt(mem2.innerText)
        comRam2.innerHTML = parseInt(ram10.innerText)
        comCam2.innerHTML = parseInt(cam10.innerText)
        comFcam2.innerHTML = parseInt(fcam10.innerText)
        comPrice2.innerHTML = parseInt(price10.innerText)
        testing()
        hideCompare()
    } else{
        alert('remove a phone from comparison table')
}
    }
//compare function
function compare(){
    if(compPhone1.innerText !== '' && compPhone2.innerText !==''){
    comPhone.style.display = "block";
    comBat.style.display = "block";
    comMem.style.display = "block";
    comRam.style.display = "block";
    comCam.style.display = "block";
    comFcam.style.display = "block";
    comPrice.style.display = "block";
}}
function hideCompare(){
    comPhone.style.display = "none";
    comBat.style.display = "none";
    comMem.style.display = "none";
    comRam.style.display = "none";
    comCam.style.display = "none";
    comFcam.style.display = "none";
    comPrice.style.display = "none";
}   
function testing(){
            var intComBat1 = parseInt(comBat1.innerText)
            var intComMem1 = parseInt(comMem1.innerText)
            var intComRam1 = parseInt(comRam1.innerText)
            var intComCam1 = parseInt(comCam1.innerText)
            var intComFcam1 = parseInt(comFcam1.innerText)
            var intComPrice1 = parseInt(comPrice1.innerText)
            var intComBat2 = parseInt(comBat2.innerText)
            var intComMem2 = parseInt(comMem2.innerText)
            var intComRam2 = parseInt(comRam2.innerText)
            var intComCam2 = parseInt(comCam2.innerText)
            var intComFcam2 = parseInt(comFcam2.innerText)
            var intComPrice2 = parseInt(comPrice2.innerText)
      //comBat
    
      if (intComBat1 < intComBat2) {
          comBat.innerHTML = '<'
      } else if (intComBat1 > intComBat2){
          comBat.innerHTML = '>'
      } else {
          comBat.innerHTML = '='
      }
      //commem
      if (intComMem1 < intComMem2) {
        comMem.innerHTML = '<'
    } else if (intComMem1 > intComMem2){
        comMem.innerHTML = '>'
    } else {
        comMem.innerHTML = '='
    }
    //comram   
    if (intComRam1 < intComRam2) {
        comRam.innerHTML = '<'
    } else if (intComRam1 > intComRam2){
        comRam.innerHTML = '>'
    } else {
        comRam.innerHTML = '='
    }
    //comcam   
    if (intComCam1 < intComCam2) {
        comCam.innerHTML = '<'
    } else if (intComCam1 > intComCam2){
        comCam.innerHTML = '>'
    } else {
        comCam.innerHTML = '='
    }
    //comfcam   
    if (intComFcam1 < intComFcam2) {
        comFcam.innerHTML = '<'
    } else if (intComFcam1 > intComFcam2){
        comFcam.innerHTML = '>'
    } else {
        comFcam.innerHTML = '='
    }
    //comPrice   
        if (intComPrice1 < intComPrice2) {
            comPrice.innerHTML = '<'
        } else if (intComPrice1 > intComPrice2){
            comPrice.innerHTML = '>'
        } else {
            comPrice.innerHTML = '='
        }
}
// form validationscript
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
  // cart functions
    //hide-show cart
    function hideShowCart(){
        if (theCart.className == 'my-shop'){
            theCart.classList.add ('show-cart')
        }else{
            theCart.classList.remove('show-cart')
        }
    }
    

    var removingAnItem = document.getElementsByClassName('remove-phone-from-cart')

// adding phone 1
function buyPhone1(){
    buyAll.disabled = false
    var newCartItem = document.createElement('div')
    newCartItem.className ='shopping-item' 
    cartItems.appendChild(newCartItem)
    var newPhoneImage = document.createElement('div') 
    newPhoneImage.className ='phone-img'
    newCartItem.appendChild(newPhoneImage)
    //create img
    var imageT = document.createElement('img')
    imageT.src = './res/note20.jpg' ///hello
    imageT.id = 'pp1' ///hello
    newPhoneImage.appendChild(imageT)
    var newPhoneText = document.createElement('div') 
    newPhoneText.className ='phone-text' 
    newCartItem.appendChild(newPhoneText)
    var newPhoneBrand = document.createElement('p') 
    newPhoneBrand.className ='brand' 
    newPhoneBrand.innerText = im1.innerHTML ///hello
    newPhoneText.appendChild(newPhoneBrand)
    var newPhonePPrice = document.createElement('p')
    newPhoneText.appendChild(newPhonePPrice)
    var newPhonePrice = document.createElement('span') 
    newPhonePrice.className = 'price'
    newPhonePrice.innerText = price1.innerText ///hello
    newPhonePPrice.appendChild(newPhonePrice)
    var newSignSpan = document.createElement('span') 
    newSignSpan.innerText = ' $'
    newPhonePPrice.appendChild(newSignSpan)
    var newRmvBtn = document.createElement('button') 
    newRmvBtn.className = 'btn btn-danger btn-sm remove-phone-from-cart'
    newRmvBtn.id = 'no-buy1'
    newRmvBtn.innerText = 'Remove'
    newPhoneText.appendChild(newRmvBtn)
    /// quant
    var newQuantity = document.createElement('div') 
    newQuantity.className = 'item-quantity'
    newCartItem.appendChild(newQuantity)
    var newMinusBtn = document.createElement('button') 
    newMinusBtn.className = 'btn btn-outline-light btn-sm minus-button'
    newMinusBtn.innerText = '-'
    newQuantity.appendChild(newMinusBtn)
    var newQuantitySpan = document.createElement('span') 
    newQuantitySpan.className = 'item-quantity'
    newQuantitySpan.innerText = '1'
    newQuantity.appendChild(newQuantitySpan)
    var newPlusBtn = document.createElement('button') 
    newPlusBtn.className = 'btn btn-outline-light btn-sm plus-button'
    newPlusBtn.innerText = '+'
    newQuantity.appendChild(newPlusBtn)
    buy1.disabled = true
    price.innerHTML = parseInt(price.innerHTML) + parseInt(price1.innerHTML)
    
}
// adding phone 2
function buyPhone2(){
//    cancelShop.disabled = false
    buyAll.disabled = false
    var newCartItem = document.createElement('div')
    newCartItem.className ='shopping-item' 
    cartItems.appendChild(newCartItem)
    var newPhoneImage = document.createElement('div') 
    newPhoneImage.className ='phone-img'
    newCartItem.appendChild(newPhoneImage)
    //create img
    var imageT = document.createElement('img')
    imageT.src = './res/iphone-12-pro-max.jpg' ///hello
    newPhoneImage.appendChild(imageT)
    var newPhoneText = document.createElement('div') 
    newPhoneText.className ='phone-text' 
    newCartItem.appendChild(newPhoneText)
    var newPhoneBrand = document.createElement('p') 
    newPhoneBrand.className ='brand' 
    newPhoneBrand.innerText = im2.innerHTML ///hello
    newPhoneText.appendChild(newPhoneBrand)
    var newPhonePPrice = document.createElement('p')
    newPhoneText.appendChild(newPhonePPrice)
    var newPhonePrice = document.createElement('span') 
    newPhonePrice.className = 'price'
    newPhonePrice.innerText = price2.innerText ///hello
    newPhonePPrice.appendChild(newPhonePrice)
    var newSignSpan = document.createElement('span') 
    newSignSpan.innerText = ' $'
    newPhonePPrice.appendChild(newSignSpan)
    var newRmvBtn = document.createElement('button') 
    newRmvBtn.className = 'btn btn-danger btn-sm remove-phone-from-cart'
    newRmvBtn.id = 'no-buy2'
    newRmvBtn.innerText = 'Remove'
    newPhoneText.appendChild(newRmvBtn)
    /// quant
    var newQuantity = document.createElement('div') 
    newQuantity.className = 'item-quantity'
    newCartItem.appendChild(newQuantity)
    var newMinusBtn = document.createElement('button') 
    newMinusBtn.className = 'btn btn-outline-light btn-sm minus-button'
    newMinusBtn.innerText = '-'
    newQuantity.appendChild(newMinusBtn)
    var newQuantitySpan = document.createElement('span') 
    newQuantitySpan.className = 'item-quantity'
    newQuantitySpan.innerText = '1'
    newQuantity.appendChild(newQuantitySpan)
    var newPlusBtn = document.createElement('button') 
    newPlusBtn.className = 'btn btn-outline-light btn-sm plus-button'
    newPlusBtn.innerText = '+'
    newQuantity.appendChild(newPlusBtn)
    buy2.disabled = true // hello
    price.innerHTML = parseInt(price.innerHTML) + parseInt(price2.innerHTML)
}





// adding phone 3
function buyPhone3(){
//    cancelShop.disabled = false
    buyAll.disabled = false
    var newCartItem = document.createElement('div')
    newCartItem.className ='shopping-item' 
    cartItems.appendChild(newCartItem)
    var newPhoneImage = document.createElement('div') 
    newPhoneImage.className ='phone-img'
    newCartItem.appendChild(newPhoneImage)
    //create img
    var imageT = document.createElement('img')
    imageT.src = './res/huawei-p30-pro.jpg' ///hello
    newPhoneImage.appendChild(imageT)
    var newPhoneText = document.createElement('div') 
    newPhoneText.className ='phone-text' 
    newCartItem.appendChild(newPhoneText)
    var newPhoneBrand = document.createElement('p') 
    newPhoneBrand.className ='brand' 
    newPhoneBrand.innerText = im3.innerHTML ///hello
    newPhoneText.appendChild(newPhoneBrand)
    var newPhonePPrice = document.createElement('p')
    newPhoneText.appendChild(newPhonePPrice)
    var newPhonePrice = document.createElement('span') 
    newPhonePrice.className = 'price'
    newPhonePrice.innerText = price3.innerText ///hello
    newPhonePPrice.appendChild(newPhonePrice)
    var newSignSpan = document.createElement('span') 
    newSignSpan.innerText = ' $'
    newPhonePPrice.appendChild(newSignSpan)
    var newRmvBtn = document.createElement('button') 
    newRmvBtn.className = 'btn btn-danger btn-sm remove-phone-from-cart'
    newRmvBtn.id = 'no-buy3'
    newRmvBtn.innerText = 'Remove'
    newPhoneText.appendChild(newRmvBtn)
    /// quant
    var newQuantity = document.createElement('div') 
    newQuantity.className = 'item-quantity'
    newCartItem.appendChild(newQuantity)
    var newMinusBtn = document.createElement('button') 
    newMinusBtn.className = 'btn btn-outline-light btn-sm minus-button'
    newMinusBtn.innerText = '-'
    newQuantity.appendChild(newMinusBtn)
    var newQuantitySpan = document.createElement('span') 
    newQuantitySpan.className = 'item-quantity'
    newQuantitySpan.innerText = '1'
    newQuantity.appendChild(newQuantitySpan)
    var newPlusBtn = document.createElement('button') 
    newPlusBtn.className = 'btn btn-outline-light btn-sm plus-button'
    newPlusBtn.innerText = '+'
    newQuantity.appendChild(newPlusBtn)
    buy3.disabled = true // hello
    price.innerHTML = parseInt(price.innerHTML) + parseInt(price3.innerHTML)
}
// adding phone 4
function buyPhone4(){
//    cancelShop.disabled = false
    buyAll.disabled = false
    var newCartItem = document.createElement('div')
    newCartItem.className ='shopping-item' 
    var newPhoneImage = document.createElement('div') 
    newPhoneImage.className ='phone-img'
    //create img
    var imageT = document.createElement('img')
    imageT.src = './res/Xiaomi Mi 11 Ultra.jpg' ///hello
    newPhoneImage.appendChild(imageT)
    var newPhoneText = document.createElement('div') 
    newPhoneText.className ='phone-text' 
    var newPhoneBrand = document.createElement('p') 
    newPhoneBrand.className ='brand' 
    newPhoneBrand.innerText = im4.innerHTML ///hello
    var newPhonePPrice = document.createElement('p')
    var newPhonePrice = document.createElement('span') 
    newPhonePrice.className = 'price'
    newPhonePrice.innerText = price4.innerText ///hello
    var newSignSpan = document.createElement('span') 
    newSignSpan.innerText = ' $'
    var newRmvBtn = document.createElement('button') 
    newRmvBtn.className = 'btn btn-danger btn-sm remove-phone-from-cart'
    newRmvBtn.id = 'no-buy4'
    newRmvBtn.innerText = 'Remove'
    /// quant
    var newQuantity = document.createElement('div') 
    newQuantity.className = 'item-quantity'
    var newMinusBtn = document.createElement('button') 
    newMinusBtn.className = 'btn btn-outline-light btn-sm minus-button'
    newMinusBtn.innerText = '-'
    var newQuantitySpan = document.createElement('span') 
    newQuantitySpan.className = 'item-quantity'
    newQuantitySpan.innerText = '1'
    var newPlusBtn = document.createElement('button') 
    newPlusBtn.className = 'btn btn-outline-light btn-sm plus-button'
    newPlusBtn.innerText = '+'
    cartItems.appendChild(newCartItem)
    newCartItem.appendChild(newPhoneImage)
    newCartItem.appendChild(newPhoneText)
    newPhoneText.appendChild(newPhoneBrand)
    newPhoneText.appendChild(newPhonePPrice)
    newPhonePPrice.appendChild(newPhonePrice)
    newPhonePPrice.appendChild(newSignSpan)
    newPhoneText.appendChild(newRmvBtn)
    newCartItem.appendChild(newQuantity)
    newQuantity.appendChild(newMinusBtn)
    newQuantity.appendChild(newQuantitySpan)
    newQuantity.appendChild(newPlusBtn)
    buy4.disabled = true // hello
    price.innerHTML = parseInt(price.innerHTML) + parseInt(price4.innerHTML)

}
// adding phone 5
function buyPhone5(){
//    cancelShop.disabled = false
    buyAll.disabled = false
    var newCartItem = document.createElement('div')
    newCartItem.className ='shopping-item' 
    cartItems.appendChild(newCartItem)
    var newPhoneImage = document.createElement('div') 
    newPhoneImage.className ='phone-img'
    newCartItem.appendChild(newPhoneImage)
    //create img
    var imageT = document.createElement('img')
    imageT.src = './res/OnePlus 9 Pro.jpg' ///hello
    newPhoneImage.appendChild(imageT)
    var newPhoneText = document.createElement('div') 
    newPhoneText.className ='phone-text' 
    newCartItem.appendChild(newPhoneText)
    var newPhoneBrand = document.createElement('p') 
    newPhoneBrand.className ='brand' 
    newPhoneBrand.innerText = im5.innerHTML ///hello
    newPhoneText.appendChild(newPhoneBrand)
    var newPhonePPrice = document.createElement('p')
    newPhoneText.appendChild(newPhonePPrice)
    var newPhonePrice = document.createElement('span') 
    newPhonePrice.className = 'price'
    newPhonePrice.innerText = price5.innerText ///hello
    newPhonePPrice.appendChild(newPhonePrice)
    var newSignSpan = document.createElement('span') 
    newSignSpan.innerText = ' $'
    newPhonePPrice.appendChild(newSignSpan)
    var newRmvBtn = document.createElement('button') 
    newRmvBtn.className = 'btn btn-danger btn-sm remove-phone-from-cart'
    newRmvBtn.id = 'no-buy5'
    newRmvBtn.innerText = 'Remove'
    newPhoneText.appendChild(newRmvBtn)
    /// quant
    var newQuantity = document.createElement('div') 
    newQuantity.className = 'item-quantity'
    newCartItem.appendChild(newQuantity)
    var newMinusBtn = document.createElement('button') 
    newMinusBtn.className = 'btn btn-outline-light btn-sm minus-button'
    newMinusBtn.innerText = '-'
    newQuantity.appendChild(newMinusBtn)
    var newQuantitySpan = document.createElement('span') 
    newQuantitySpan.className = 'item-quantity'
    newQuantitySpan.innerText = '1'
    newQuantity.appendChild(newQuantitySpan)
    var newPlusBtn = document.createElement('button') 
    newPlusBtn.className = 'btn btn-outline-light btn-sm plus-button'
    newPlusBtn.innerText = '+'
    newQuantity.appendChild(newPlusBtn)
    buy5.disabled = true // hello
    price.innerHTML = parseInt(price.innerHTML) + parseInt(price5.innerHTML)
}
// adding phone 6
function buyPhone6(){
//    cancelShop.disabled = false
    buyAll.disabled = false
    var newCartItem = document.createElement('div')
    newCartItem.className ='shopping-item' 
    cartItems.appendChild(newCartItem)
    var newPhoneImage = document.createElement('div') 
    newPhoneImage.className ='phone-img'
    newCartItem.appendChild(newPhoneImage)
    //create img
    var imageT = document.createElement('img')
    imageT.src = './res/oppo-find-x3-pro.jpg' ///hello
    newPhoneImage.appendChild(imageT)
    var newPhoneText = document.createElement('div') 
    newPhoneText.className ='phone-text' 
    newCartItem.appendChild(newPhoneText)
    var newPhoneBrand = document.createElement('p') 
    newPhoneBrand.className ='brand' 
    newPhoneBrand.innerText = im6.innerHTML ///hello
    newPhoneText.appendChild(newPhoneBrand)
    var newPhonePPrice = document.createElement('p')
    newPhoneText.appendChild(newPhonePPrice)
    var newPhonePrice = document.createElement('span') 
    newPhonePrice.className = 'price'
    newPhonePrice.innerText = price6.innerText ///hello
    newPhonePPrice.appendChild(newPhonePrice)
    var newSignSpan = document.createElement('span') 
    newSignSpan.innerText = ' $'
    newPhonePPrice.appendChild(newSignSpan)
    var newRmvBtn = document.createElement('button') 
    newRmvBtn.className = 'btn btn-danger btn-sm remove-phone-from-cart'
    newRmvBtn.id = 'no-buy6'
    newRmvBtn.innerText = 'Remove'
    newPhoneText.appendChild(newRmvBtn)
    /// quant
    var newQuantity = document.createElement('div') 
    newQuantity.className = 'item-quantity'
    newCartItem.appendChild(newQuantity)
    var newMinusBtn = document.createElement('button') 
    newMinusBtn.className = 'btn btn-outline-light btn-sm minus-button'
    newMinusBtn.innerText = '-'
    newQuantity.appendChild(newMinusBtn)
    var newQuantitySpan = document.createElement('span') 
    newQuantitySpan.className = 'item-quantity'
    newQuantitySpan.innerText = '1'
    newQuantity.appendChild(newQuantitySpan)
    var newPlusBtn = document.createElement('button') 
    newPlusBtn.className = 'btn btn-outline-light btn-sm plus-button'
    newPlusBtn.innerText = '+'
    newQuantity.appendChild(newPlusBtn)
    buy6.disabled = true // hello
    price.innerHTML = parseInt(price.innerHTML) + parseInt(price6.innerHTML)
}
// adding phone 7
function buyPhone7(){
//    cancelShop.disabled = false
    buyAll.disabled = false
    var newCartItem = document.createElement('div')
    newCartItem.className ='shopping-item' 
    cartItems.appendChild(newCartItem)
    var newPhoneImage = document.createElement('div') 
    newPhoneImage.className ='phone-img'
    newCartItem.appendChild(newPhoneImage)
    //create img
    var imageT = document.createElement('img')
    imageT.src = './res/Lenovo Legion Duel 2.jpg' ///hello
    newPhoneImage.appendChild(imageT)
    var newPhoneText = document.createElement('div') 
    newPhoneText.className ='phone-text' 
    newCartItem.appendChild(newPhoneText)
    var newPhoneBrand = document.createElement('p') 
    newPhoneBrand.className ='brand' 
    newPhoneBrand.innerText = im7.innerHTML ///hello
    newPhoneText.appendChild(newPhoneBrand)
    var newPhonePPrice = document.createElement('p')
    newPhoneText.appendChild(newPhonePPrice)
    var newPhonePrice = document.createElement('span') 
    newPhonePrice.className = 'price'
    newPhonePrice.innerText = price7.innerText ///hello
    newPhonePPrice.appendChild(newPhonePrice)
    var newSignSpan = document.createElement('span') 
    newSignSpan.innerText = ' $'
    newPhonePPrice.appendChild(newSignSpan)
    var newRmvBtn = document.createElement('button') 
    newRmvBtn.className = 'btn btn-danger btn-sm remove-phone-from-cart'
    newRmvBtn.id = 'no-buy7'
    newRmvBtn.innerText = 'Remove'
    newPhoneText.appendChild(newRmvBtn)
    /// quant
    var newQuantity = document.createElement('div') 
    newQuantity.className = 'item-quantity'
    newCartItem.appendChild(newQuantity)
    var newMinusBtn = document.createElement('button') 
    newMinusBtn.className = 'btn btn-outline-light btn-sm minus-button'
    newMinusBtn.innerText = '-'
    newQuantity.appendChild(newMinusBtn)
    var newQuantitySpan = document.createElement('span') 
    newQuantitySpan.className = 'item-quantity'
    newQuantitySpan.innerText = '1'
    newQuantity.appendChild(newQuantitySpan)
    var newPlusBtn = document.createElement('button') 
    newPlusBtn.className = 'btn btn-outline-light btn-sm plus-button'
    newPlusBtn.innerText = '+'
    newQuantity.appendChild(newPlusBtn)
    buy7.disabled = true // hello
    price.innerHTML = parseInt(price.innerHTML) + parseInt(price7.innerHTML)
}
// adding phone 8
function buyPhone8(){
//    cancelShop.disabled = false
    buyAll.disabled = false
    var newCartItem = document.createElement('div')
    newCartItem.className ='shopping-item' 
    cartItems.appendChild(newCartItem)
    var newPhoneImage = document.createElement('div') 
    newPhoneImage.className ='phone-img'
    newCartItem.appendChild(newPhoneImage)
    //create img
    var imageT = document.createElement('img')
    imageT.src = './res/Asus ROG Phone 5.jpg' ///hello
    newPhoneImage.appendChild(imageT)
    var newPhoneText = document.createElement('div') 
    newPhoneText.className ='phone-text' 
    newCartItem.appendChild(newPhoneText)
    var newPhoneBrand = document.createElement('p') 
    newPhoneBrand.className ='brand' 
    newPhoneBrand.innerText = im8.innerHTML ///hello
    newPhoneText.appendChild(newPhoneBrand)
    var newPhonePPrice = document.createElement('p')
    newPhoneText.appendChild(newPhonePPrice)
    var newPhonePrice = document.createElement('span') 
    newPhonePrice.className = 'price'
    newPhonePrice.innerText = price8.innerText ///hello
    newPhonePPrice.appendChild(newPhonePrice)
    var newSignSpan = document.createElement('span') 
    newSignSpan.innerText = ' $'
    newPhonePPrice.appendChild(newSignSpan)
    var newRmvBtn = document.createElement('button') 
    newRmvBtn.className = 'btn btn-danger btn-sm remove-phone-from-cart'
    newRmvBtn.id = 'no-buy8'
    newRmvBtn.innerText = 'Remove'
    newPhoneText.appendChild(newRmvBtn)
    /// quant
    var newQuantity = document.createElement('div') 
    newQuantity.className = 'item-quantity'
    newCartItem.appendChild(newQuantity)
    var newMinusBtn = document.createElement('button') 
    newMinusBtn.className = 'btn btn-outline-light btn-sm minus-button'
    newMinusBtn.innerText = '-'
    newQuantity.appendChild(newMinusBtn)
    var newQuantitySpan = document.createElement('span') 
    newQuantitySpan.className = 'item-quantity'
    newQuantitySpan.innerText = '1'
    newQuantity.appendChild(newQuantitySpan)
    var newPlusBtn = document.createElement('button') 
    newPlusBtn.className = 'btn btn-outline-light btn-sm plus-button'
    newPlusBtn.innerText = '+'
    newQuantity.appendChild(newPlusBtn)
    buy8.disabled = true // hello
    price.innerHTML = parseInt(price.innerHTML) + parseInt(price8.innerHTML)
}
// adding phone 9
function buyPhone9(){
//    cancelShop.disabled = false
    buyAll.disabled = false
    var newCartItem = document.createElement('div')
    newCartItem.className ='shopping-item' 
    cartItems.appendChild(newCartItem)
    var newPhoneImage = document.createElement('div') 
    newPhoneImage.className ='phone-img'
    newCartItem.appendChild(newPhoneImage)
    //create img
    var imageT = document.createElement('img')
    imageT.src = './res/Google Pixel 5.jpg' ///hello
    newPhoneImage.appendChild(imageT)
    var newPhoneText = document.createElement('div') 
    newPhoneText.className ='phone-text' 
    newCartItem.appendChild(newPhoneText)
    var newPhoneBrand = document.createElement('p') 
    newPhoneBrand.className ='brand' 
    newPhoneBrand.innerText = im9.innerHTML ///hello
    newPhoneText.appendChild(newPhoneBrand)
    var newPhonePPrice = document.createElement('p')
    newPhoneText.appendChild(newPhonePPrice)
    var newPhonePrice = document.createElement('span') 
    newPhonePrice.className = 'price'
    newPhonePrice.innerText = price9.innerText ///hello
    newPhonePPrice.appendChild(newPhonePrice)
    var newSignSpan = document.createElement('span') 
    newSignSpan.innerText = ' $'
    newPhonePPrice.appendChild(newSignSpan)
    var newRmvBtn = document.createElement('button') 
    newRmvBtn.className = 'btn btn-danger btn-sm remove-phone-from-cart'
    newRmvBtn.id = 'no-buy9'
    newRmvBtn.innerText = 'Remove'
    newPhoneText.appendChild(newRmvBtn)
    /// quant
    var newQuantity = document.createElement('div') 
    newQuantity.className = 'item-quantity'
    newCartItem.appendChild(newQuantity)
    var newMinusBtn = document.createElement('button') 
    newMinusBtn.className = 'btn btn-outline-light btn-sm minus-button'
    newMinusBtn.innerText = '-'
    newQuantity.appendChild(newMinusBtn)
    var newQuantitySpan = document.createElement('span') 
    newQuantitySpan.className = 'item-quantity'
    newQuantitySpan.innerText = '1'
    newQuantity.appendChild(newQuantitySpan)
    var newPlusBtn = document.createElement('button') 
    newPlusBtn.className = 'btn btn-outline-light btn-sm plus-button'
    newPlusBtn.innerText = '+'
    newQuantity.appendChild(newPlusBtn)
    buy9.disabled = true // hello
    price.innerHTML = parseInt(price.innerHTML) + parseInt(price9.innerHTML)
}
// adding phone 10
function buyPhone10(){
    var newCartItem = document.createElement('div')
    newCartItem.className ='shopping-item' 
    cartItems.appendChild(newCartItem)
    var newPhoneImage = document.createElement('div') 
    newPhoneImage.className ='phone-img'
    newCartItem.appendChild(newPhoneImage)
    //create img
    var imageT = document.createElement('img')
    imageT.src = './res/Nokia X20.jpg' ///hello
    newPhoneImage.appendChild(imageT)
    var newPhoneText = document.createElement('div') 
    newPhoneText.className ='phone-text' 
    newCartItem.appendChild(newPhoneText)
    var newPhoneBrand = document.createElement('p') 
    newPhoneBrand.className ='brand' 
    newPhoneBrand.innerText = im10.innerHTML ///hello
    newPhoneText.appendChild(newPhoneBrand)
    var newPhonePPrice = document.createElement('p')
    newPhoneText.appendChild(newPhonePPrice)
    var newPhonePrice = document.createElement('span') 
    newPhonePrice.className = 'price'
    newPhonePrice.innerText = price10.innerText ///hello
    newPhonePPrice.appendChild(newPhonePrice)
    var newSignSpan = document.createElement('span') 
    newSignSpan.innerText = ' $'
    newPhonePPrice.appendChild(newSignSpan)
    var newRmvBtn = document.createElement('button') 
    newRmvBtn.className = 'btn btn-danger btn-sm remove-phone-from-cart'
    newRmvBtn.id = 'no-buy10'
    newRmvBtn.innerText = 'Remove'
    newPhoneText.appendChild(newRmvBtn)
    /// quant
    var newQuantity = document.createElement('div') 
    newQuantity.className = 'item-quantity'
    newCartItem.appendChild(newQuantity)
    var newMinusBtn = document.createElement('button') 
    newMinusBtn.className = 'btn btn-outline-light btn-sm minus-button'
    newMinusBtn.innerText = '-'
    newQuantity.appendChild(newMinusBtn)
    var newQuantitySpan = document.createElement('span') 
    newQuantitySpan.className = 'item-quantity'
    newQuantitySpan.innerText = '1'
    newQuantity.appendChild(newQuantitySpan)
    var newPlusBtn = document.createElement('button') 
    newPlusBtn.className = 'btn btn-outline-light btn-sm plus-button'
    newPlusBtn.innerText = '+'
    newQuantity.appendChild(newPlusBtn)
    buy10.disabled = true // hello
//    cancelShop.disabled = false
    buyAll.disabled = false
    price.innerHTML = parseInt(price.innerHTML) + parseInt(price10.innerHTML)
}
//remove all
function removeAllItems(){
    buy10.disabled = false
    buy1.disabled = false
    buy2.disabled = false
    buy3.disabled = false
    buy4.disabled = false
    buy5.disabled = false
    buy6.disabled = false
    buy7.disabled = false
    buy8.disabled = false
    buy9.disabled = false
    cancelShop.parentElement.parentElement.firstElementChild.replaceChildren('')
    cancelShop.disabled = false
    price.innerHTML = 0
}
function buyItems(){
    buy10.disabled = false
    buy1.disabled = false
    buy2.disabled = false
    buy3.disabled = false
    buy4.disabled = false
    buy5.disabled = false
    buy6.disabled = false
    buy7.disabled = false
    buy8.disabled = false
    buy9.disabled = false
    cancelShop.parentElement.parentElement.firstElementChild.replaceChildren('')
    alert('Thank you for your purchase! Come back soon ♥ ')
    price.innerHTML = 0
    buyAll.disabled = true
}
//cart vars
var theCartItems = document.getElementById('cart-items')
var rmvItemBtn = document.getElementsByClassName('remove-phone-from-cart')

// var removingAnItem = document.getElementsByClassName('remove-phone-from-cart')
theCartItems.onclick = function(e){
if(e.target.classList.contains('remove-phone-from-cart')) {
    e.target.parentElement.parentElement.remove()
    var buttonClicked = e.target
    var myPrice = buttonClicked.parentElement.children[1].children[0]
    var myQuantity = parseInt(buttonClicked.parentElement.parentElement.children[2].children[1].innerHTML)
    var mySubTotal = parseInt(myPrice.innerHTML) * myQuantity
    price.innerHTML = parseInt(price.innerHTML) - mySubTotal

    //////////////////////////////////////////////////////////////////////////
    switch(e.target.id){
        case 'no-buy1' :
            buy1.disabled = false
            break
        case 'no-buy2' :
            buy2.disabled = false
            break
        case 'no-buy3' :
            buy3.disabled = false
            break
        case 'no-buy4' :
            buy4.disabled = false
            break
        case 'no-buy5' :
            buy5.disabled = false
            break
        case 'no-buy6' :
            buy6.disabled = false
            break
        case 'no-buy7' :
            buy7.disabled = false
            break
        case 'no-buy8' :
            buy8.disabled = false
            break
        case 'no-buy9' :
            buy9.disabled = false
            break
        case 'no-buy10' :
            buy10.disabled = false
            break
    }
///////////////////////////////////////////////////////////////////////////////


}else if(e.target.classList.contains('plus-button')){
    var buttonClicked = e.target
    var myPrice = buttonClicked.parentElement.parentElement.children[1].children[1].children[0]
    price.innerHTML = parseInt(price.innerHTML) + parseInt(myPrice.innerHTML)
    var myQuantity = buttonClicked.parentElement.children[1]
    var newQuantityCount = parseInt(myQuantity.innerText) + 1
    myQuantity.innerHTML = newQuantityCount
}else if(e.target.classList.contains('minus-button')){
    var buttonClicked = e.target
    var myPrice = buttonClicked.parentElement.parentElement.children[1].children[1].children[0]
    var myQuantity = buttonClicked.parentElement.children[1]
    var newQuantityCount = parseInt(myQuantity.innerText) - 1
    if(myQuantity.innerHTML > 1 ){
        price.innerHTML = parseInt(price.innerHTML) - parseInt(myPrice.innerHTML)
        myQuantity.innerHTML = newQuantityCount
    }else{
        newQuantityCount.innerHTML = 1
    }
    
}
}
//////////////////////////////navbar activation
var nav = document.getElementsByClassName('my-links')
var navHome = document.getElementById('home')
var navCompare = document.getElementById('compare')
var navContact = document.getElementById('contactus')

navHome.onclick = function(e){
    if(e.target.classList !== 'nav-item active'){
        e.target.parentElement.classList = 'nav-item active'
        navCompare.classList = 'nav-item' 
        navContact.classList = 'nav-item'
    }
}
navCompare.onclick = function(e){
    if(e.target.classList !== 'nav-item active'){
        e.target.parentElement.classList = 'nav-item active'
        navHome.classList = 'nav-item' 
        navContact.classList = 'nav-item'
    }
}
navContact.onclick = function(e){
    if(e.target.classList !== 'nav-item active'){
        e.target.parentElement.classList = 'nav-item active'
        navHome.classList = 'nav-item' 
        navCompare.classList = 'nav-item'
    }
}
