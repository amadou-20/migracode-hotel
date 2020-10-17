//function logSubmit(event) {
//log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//  event.preventDefault();
//}


function logSubmit(event) {
    var log = document.getElementById("log");
     log.style.display = "block";
     event.preventDefault();
   }
   
   const form = document.getElementById('form');
   const log = document.getElementById('log');
   form.addEventListener('submit', logSubmit);