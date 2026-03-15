var counter = document.getElementById("counter")

var start = 0 ; 
var end_counter = 700 ;
var duration = 4000 ; 
var steptime = duration/end_counter

fun = setInterval(() =>{
start++
counter.textContent = start + "+"
if(end_counter <= start){
    clearInterval(fun)
}
}, steptime )
