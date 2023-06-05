// ============stop watch============ //
// ============stop watch============ //
// ============stop watch============ //

var sec = 0 
var min = 0
var hour = 0 


var secval =document.getElementById("sec")
var minval = document.getElementById("min")
var hourval = document.getElementById("hour")


var interval ;

function rendarval() {


    secval.innerHTML = sec
    minval.innerHTML = min
    hourval.innerHTML = hour
}

function startwatch() {

    document.getElementById("startbtn").disabled = true;  
  document.getElementById("stopbtn").disabled = false;    

    // document.getElementById("startbtn").disabled = false;



    interval = setInterval(function() {
      sec++;
      if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
          min = 0;
          hour++;
          if (hour === 12) {
            hour = 0;
          }
        }
      }
      rendarval();
    }, 1000);
  }
  
  function stopwatch() {

    document.getElementById("stopbtn").disabled = true;    
    document.getElementById("startbtn").disabled = false;


    clearInterval(interval);
  }
  
  function resetwatch() {
    stopwatch();
    sec = 0;
    min = 0;
    hour = 0;


    rendarval();
  }
    
   
