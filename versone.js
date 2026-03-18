
//let one = document.getElementById("hobbyCard1");
//let two = document.getElementById("hobbyCard2");
//let three = document.getElementById("hobbyCard3");
//let four = document.getElementById("hobbyCard4");
//let five = document.getElementById("hobbyCard5");
//let six = document.getElementById("finalCard");

let btnNo = document.getElementById('no'); 
let count = 0
btnNo.addEventListener('click', function(){
    count++;
    var t = count++;
    console.log (t);
    if (t == 1){
        document.getElementById("hobbyCard1").style.display = "none";
    }
    if (t == 3){
        document.getElementById("hobbyCard2").style.display = "none";
    }
    if (t == 5){
        document.getElementById("hobbyCard3").style.display = "none";
        }else{}
})






