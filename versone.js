document.getElementById("nav_icon").addEventListener('click', function(){
    var t = count++;
    console.log (t);
    if (document.getElementById('lil_nav').style.display === 'none'){ 
        document.getElementById('lil_nav').style.display = 'block'
    }
    else {
        document.getElementById('lil_nav').style.display = 'none';
    }
})

let btnNo = document.getElementById('no'); 
let btnYes = document.getElementById('yes'); 
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
        }
    if (t == 7){
        document.getElementById("hobbyCard4").style.display = "none";
        }
    if (t == 9){
        document.getElementById("hobbyCard5").style.display = "none";
        }
        else{}
})

btnYes.addEventListener('click', function(){
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
        }
    if (t == 7){
        document.getElementById("hobbyCard4").style.display = "none";
        }
    if (t == 9){
        document.getElementById("hobbyCard5").style.display = "none";
        }else{}
})


// show and hide for Nav phone button. 








