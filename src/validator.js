let aux = [];
function maskify(creditCardNumber) {
  let card = creditCardNumber;
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
    return hideNum.join("");
   }

   function isValid(creditCardNumber){
    let booleano = "";
    let card=creditCardNumber.reverse();
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
        booleano = true;
      }else{
        booleano = false;
            
      }
      return booleano
   }
const validator = {aux, maskify, isValid};
export default validator;
