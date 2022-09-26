let add = document.getElementById("increment");
let remove = document.getElementById("decrement");
let number = document.getElementById("number");
let integer = 0;
add.addEventListener('click', function () {
    integer += 1;
    number.innerHTML = integer;
});

remove.addEventListener('click', function () {
    integer -= 1;
    number.innerHTML = integer;

    if(integer<=0){
        integer=0;  
   }

       
  
});

