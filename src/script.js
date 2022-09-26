// defining different variables 
let add = document.getElementById("increment");
let remove = document.getElementById("decrement");
let number = document.getElementById("number");
let integer = 0;
// adding method to increment number
add.addEventListener('click', function () {
    integer += 1;
    number.innerHTML = integer;
});
// adding method to decrement number
remove.addEventListener('click', function () {
    integer -= 1;
    number.innerHTML = integer;

    if(integer<=0){
        integer=0;  
   }

       
  
});

