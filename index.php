<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- displays site properly based on user's device -->
  <link rel="icon" type="image/png" sizes="32x32" href="./assets/images/favicon-32x32.png">
  <link rel="stylesheet" href="./style.css">
  <title>Frontend Mentor | Age calculator app</title>
</head>

<body>
  <main>
  <div class="container">
    <form>
      <div class="form-container">
        <div class="upform">

          <div class="lab lab1">
            <label for="day">Day</label>
            <br>
            <input type="text" id="day" placeholder="DD" maxlength="2" />
          </div>
          <div class="lab lab2">
            <label for="month">Month</label>
            <br>
            <input type="text" id="month" placeholder="MM" maxlength="2" />
          </div>
          <div class="lab lab3">
            <label for="year">Year</label>
            <br>
            <input type="text" id="year" placeholder="YYYY" maxlength="4" />
          </div>
        </div>
        <div class="midform" id="mid" ><span></span><button type="button" role="button" id="button"><img
              src="./assets/images/icon-arrow.svg" alt="icon"></button></div>
        <div class="lowform">
          <p><span id="yeartarget">--</span>years</p>
          <p><span id="monthtarget">--</span>months</p>
          <p><span id="daytarget">--</span>days</p>
        </div>
      </div>
    </form>
  </div>
  
  
  
  </main>
  <script src="./main.js"></script>
  <script>
 
  var midform =document.getElementById('mid'); 
  
  document.addEventListener("DOMContentLoaded", myFunction)

 


    async function myFunction() { 
      
     
      if (document.documentElement.offsetWidth  < 376) { // If media query matches
        
        
        let clone = midform.firstChild.cloneNode(true);
        btn.parentElement.appendChild(clone);
        console.log(midform.childElementCount);
      }
      else{
        if(midform.childElementCount == 3)
            btn.parentElement.removeChild(btn.parentElement.lastChild);
            console.log(midform.childElementCount);
      }
    }


    

    
   
  </script>
</body>

</html>