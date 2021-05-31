import validator from './validator.js';
//_______________________________________Expresiones regulares___________________
document.getElementById("textElement").addEventListener("keyup", (e) => {
    let valorInput = e.target.value;
    document.getElementById("textElement").value = valorInput
    .replace(/\s/g,"").trim(); //trim() Elimina el último espaciado
  });
  
  document.getElementById("inputTitular").addEventListener("keyup", (e) => {
    let valorInput = e.target.value;
    document.getElementById("inputTitular").value = valorInput.replace(/[0-9]/g,"");
  });
  
  document.getElementById("expiration").addEventListener("keyup", (e) => {
    let valorInput = e.target.value;
    document.getElementById("expiration").value = valorInput.replace(/\D/g,"").replace(/\s/g,"");
  })
  
    document.getElementById("security").addEventListener("keyup", (e) => {
      let valorInput = e.target.value;
      document.getElementById("security").value = valorInput.replace(/\D/g,"").replace(/\s/g,"");
  })
  
      document.getElementById("cash").addEventListener("keyup", (e) => {
        let valorInput = e.target.value;
      document.getElementById("cash").value = valorInput.replace(/\D/g,"").replace(/\s/g,"");
  })

//________________________________Declaración de Variables____________________________

let user, number, exp, seguridad, money;
user = document.getElementById("inputTitular");
number = document.getElementById("textElement");
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


//_____________________________________________________________________________________
number.addEventListener("keyup", (e)=>{
  let creditCardNumber=e.target.value;
  document.getElementById("textElement").value = validator.maskify(creditCardNumber);
});


document.getElementById("btn").addEventListener("click", ()=>{
      //-------------------------------------------
      
      if (user.value.length < 4) {
        document.getElementById("inputTitular").style.border = "1px solid red";
        document.getElementById("inputTitular").focus();
        errorUser.style.display = "block";
        hiddenField.style.display = "none";
        return false;
      }
      if (validator.aux.length < 8) {
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

      //---------------------------------------------
      let creditCardNumber = validator.aux;
      validator.isValid(creditCardNumber);
      if(validator.isValid(creditCardNumber)==true){
        alert("Su tarjeta es válida");
      }else{
        alert("Su tarjeta no es válida");
      }
      validator.aux =[];
});

//__________________________________________________________________________________

//_______________________________Validación de formulario___________________________
user.addEventListener("textInput", user_verify);
number.addEventListener("textInput", number_verify);
exp.addEventListener("textInput", exp_verify);
seguridad.addEventListener("textInput", seguridad_verify);
money.addEventListener("textInput", money_verify);

function user_verify(){
    if(user.value.length >= 4){
      user.style.border = "2px solid #dddddd";
      errorUser.style.display = "none";
      hiddenField.style.display = "block";
      return true;
    }
}

function number_verify(){
    if(validator.aux.length > 9){
      number.style.border = "2px solid #dddddd";
      errorNumber.style.display = "none";
      hiddenFieldNumber.style.display = "block";
      return true;
    }
}

function exp_verify(){
    if(exp.value.length > 4){
      exp.style.border = "2px solid #dddddd";
      errorExp.style.display = "none";
      hiddenFieldExp.style.display = "block";
      return true;
    }
}

function seguridad_verify(){
  if (seguridad.value.length > 2) {
    seguridad.style.border = "2px solid #dddddd";
    errorSeguridad.style.display = "none";
    return true;
  }
}


function money_verify(){
  if (money.value.length > 0) {
    money.style.border = "2px solid #dddddd";
    errorMoney.style.display = "none";
    hiddenFieldCash.style.display = "block";
    return true;
  }
}
//____________________________________________________________________________________