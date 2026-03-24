var input_name = document.querySelector(".name")
var email = document.querySelector(".mail")
var label_one = document.querySelector(".lab1")
var counter1 = document.querySelector("#counter")
var label_2wo = document.querySelector(".lab2")
var counter_text = 700
var start = 0;
var each_count = 6000/counter_text

interval_one = setInterval(() => {
    start++
    counter1.textContent = start + "+"
    if(counter_text <= start){
        clearInterval(interval_one)
    }
}, each_count)
 
fun = () => {
    if (input_name.value !== "" || document.activeElement === input_name) {
        label_one.style.transform = 'translateY(-24px) scale(0.75)'
        label_one.style.color = '#3b81f6'
        input_name.style.border = '2px solid #3b81f6'
    } else {
        label_one.style.transform = 'translateY(0) scale(1)'
        label_one.style.color = '#2C3E50'
        input_name.style.border = ''
    }
    if (email.value !== "" || document.activeElement === email) {
        label_2wo.style.transform = 'translateY(-24px) scale(0.75)'
        label_2wo.style.color = '#3b81f6'
        email.style.border = '2px solid #3b81f6'
    } else {
        label_2wo.style.transform = 'translateY(0) scale(1)'
        label_2wo.style.color = '#2C3E50'
        email.style.border = ''
    }
}


