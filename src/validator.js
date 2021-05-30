//____________________________Declaración de Variables___________________________

//___________________________________________________________________
let aux = [];
function maskify() {
  let card = document.getElementById("textElement").value;
  aux.push(card[card.length-1]);
  card=card.split("");
  let hideNum = [];
   for(let i = 0; i < card.length; i++){
     if(i < card.length-4){
       hideNum.push("#");
    }else{
       hideNum.push(card[i]);
     }
    }
    document.getElementById("textElement").value  = hideNum.join("");
   }

   function isValid(){
    let user, exp, seguridad, money;
    user = document.getElementById("inputTitular");
     //number = document.getElementById("textElement");
    exp = document.getElementById("expiration");
    seguridad = document.getElementById("security");
    money = document.getElementById("cash");
    
    let errorUser = document.getElementById("errorUser");
    let errorNumber = document.getElementById("errorNumero");
    let errorExp = document.getElementById("errorExp");
    let errorSeguridad = document.getElementById("errorSeguridad");
    let errorMoney = document.getElementById("errorMoney");
    
    let hiddenField =document.getElementById("hiddenField");
    let hiddenFieldNumber =document.getElementById("hiddenFieldNumber");
    let hiddenFieldExp =document.getElementById("hiddenFieldExp");
    let hiddenFieldCash =document.getElementById("hiddenFieldCash");

     if (user.value.length < 4) {
      document.getElementById("inputTitular").style.border = "1px solid red";
      document.getElementById("inputTitular").focus();
      errorUser.style.display = "block";
      hiddenField.style.display = "none";
      return false;
    }
    if (aux.length < 8) {
      document.getElementById("textElement").style.border = "1px solid red";
      document.getElementById("textElement").focus();
      errorNumber.style.display = "block";
      hiddenFieldNumber.style.display = "none";
      return false;
    }
    if (exp.value.length < 5) {
      document.getElementById("expiration").style.border = "1px solid red";
      document.getElementById("expiration").focus();
      errorExp.style.display = "block";
      hiddenFieldExp.style.display = "none";
      return false;
    }
    if (seguridad.value.length < 3) {
      document.getElementById("security").style.border = "1px solid red";
      document.getElementById("security").focus();
      errorSeguridad.style.display = "block";
      return false;
    }
  
    if (money.value.length == 0) {
      document.getElementById("cash").style.border = "1px solid red";
      document.getElementById("cash").focus();
      errorMoney.style.display = "block";
      hiddenFieldCash.style.display = "none";
      return false;
    }
    let card=aux.reverse();
    for (let i=0; i<card.length; i++){
      card[i]=parseInt(card[i]);
     }
    for (let j=1; j<card.length; j+=2){
       card[j]=card[j]*2;
       card[j]=(card[j]-1)%9+1;
     }
      let adition=0;
      for (let i=0; i<card.length; i++){
        adition=adition+card[i];
      }
      let sum=adition;
      let referencia=sum%10;
      if(referencia==0){
          alert("Su tarjeta es válida");
      }else{
            alert("Lo sentimos su tarjeta es no válida");
            aux=[];
      }
   }
const validator = {aux, maskify, isValid};
export default validator;
