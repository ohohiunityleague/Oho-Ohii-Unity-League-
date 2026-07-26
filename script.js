//set match and date time
let matchDate = new Date("July 26, 2026 16:00:00").getTime()
//uodate countdown every second
setInterval(function(){
  let now = new Date().getTime();
  let distance = matchDate - now;
  let days = 
  Math.floor(distance/(1000*60*60*24));
  let hours = 
  Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  let minutes = 
  Math.floor((distance % (1000*60*60)) / (1000*60));
  let seconds = 
  Math.floor((distance % (1000*60)) /1000);

  document.getElementById("countdown").innerHTML = 
             days + "Days | " +
             hours+ "Hrs | " +
             minutes + "Mins | " +
             seconds + "Secs ";
  
  if(distance < 0){
    document.getElementById("countdown").innerHTML = "&#9917;match has started!"
  }
},1000);

function toggleMenu(){
  let menu = document.getElementById("navLinks").classList.toggle("show");
}