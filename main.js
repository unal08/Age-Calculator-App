
let btn = document.getElementById('button');
let dayinput = document.getElementById('day'); 
let monthinput = document.getElementById('month'); 
let yearinput = document.getElementById('year'); 
let daytarget = document.getElementById('daytarget'); 
let monthtarget = document.getElementById('monthtarget'); 
let yeartarget = document.getElementById('yeartarget'); 


let inputLabelColor = dayinput.parentElement.childNodes[1].style.color;

let inputBorderColor = dayinput.parentElement.childNodes[5].style.borderColor;




function MatchingText(input){
      if(String(input.value) == ""){
            return 'This field is required'; 
      }
      else{
      if(input.getAttribute('id') === 'day'){
            return 'Must be a valid date'; 
      }
      else if(input.getAttribute('id') === 'month'){
            return 'Must be a valid month';
      }
      else if(input.getAttribute('id') === 'year'){
            return 'Must be in the past';
      }
}
}



function addErrorMessage(input){
      let p = document.createElement('p');
      p.appendChild(document.createTextNode(MatchingText(input)));
      p.style.color = "var(--primary-light-red)";
      p.style.fontSize = "10px";
      p.style.fontFamily = "PoppinsRegular";
      p.style.fontStyle = "italic";
      p.setAttribute('id','invalid');
      input.parentElement.childNodes[1].style.color = "var(--primary-light-red)";
      input.parentElement.childNodes[5].style.borderColor = "var(--primary-light-red)"; ; 
      input.parentElement.appendChild(p);
}

function removeErrorMessage(input){
      input.parentElement.childNodes[1].style.color = inputLabelColor;
      input.parentElement.childNodes[5].style.borderColor = inputBorderColor;
      input.parentNode.removeChild(input.parentNode.lastChild);
}

btn.addEventListener('click',event=>{
    let  date = new Date();


   let daynow = date.getUTCDate();
   let monthnow = date.getUTCMonth() + 1;
   let yearnow = date.getUTCFullYear();

   let arr= [dayinput,monthinput,yearinput];

   for(let i = 0 ; i< arr.length ; i++){

      if(arr[i].parentElement.childElementCount ==4 ){
            break;
      }
      if(arr[i] == dayinput){
      if(String(arr[i].value) == "" ||  arr[i].value > 31 || (String(monthinput.value) == '04' && arr[i].value > 30)  || isNaN(arr[i].value) ){
            addErrorMessage(arr[i]); 
      }
      
      }
else if(arr[i] == monthinput){
      if(String(arr[i].value) == "" ||  arr[i].value > 12 || isNaN(arr[i].value)){
            addErrorMessage(arr[i]); 
      }   
}
else if(arr[i] == yearinput){
      if(String(arr[i].value) == "" ||  arr[i].value > yearnow || isNaN(arr[i].value)){
            addErrorMessage(arr[i]); 
      }   
    
}
}
 
      dayinput.addEventListener('input',event=>{
            if(dayinput.parentElement.childElementCount==4){
                  removeErrorMessage(dayinput);
            } 
            event.preventDefault();
      });
           monthinput.addEventListener('input',event=>{
                  if(monthinput.parentElement.childElementCount==4){
                        removeErrorMessage(monthinput);
                  }
                  event.preventDefault();
            });
            
            yearinput.addEventListener('input',event=>{
                  if(yearinput.parentElement.childElementCount==4){
                        removeErrorMessage(yearinput);
                  }
                  event.preventDefault();
            });

         let tar = [daytarget,monthtarget,yeartarget];
            if(yearinput.parentElement.childElementCount!=4 && monthinput.parentElement.childElementCount!=4 && dayinput.parentElement.childElementCount!=4){
                  
                  yeartarget.innerHTML = String(yearnow-yearinput.value);
                  if(monthinput.value>monthnow){
                        yearnow = yearnow -1;
                        monthtarget.innerText = String(monthnow - monthinput.value + 12); 
                  }
                  else{
                        monthtarget.innerText = String(monthnow-monthinput.value);
                  }
                  if(dayinput.value>daynow){
                        monthnow = monthnow -1;
                       daytarget.innerText = String(daynow-dayinput.value + 31); 
                  }
                  else{
                        daytarget.innerText = String(daynow-dayinput.value); 
                  }
            }
            else{
                  for(let i = 0; i< arr.length; i++){
                        if(arr[i].parentElement.childElementCount==4){
                              tar[i].innerText ="--";
                        }
                  }
            }
            
          
           
            
    
   event.preventDefault()
    });



