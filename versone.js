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
        setTimeout(function() {
    document.getElementById("hobbyCard1").style.display = "none";
}, 500);
        ;
    }
    if (t == 3){
         setTimeout(function() {
    document.getElementById("hobbyCard2").style.display = "none";
}, 500);
    }
    if (t == 5){
     setTimeout(function() {
    document.getElementById("hobbyCard3").style.display = "none";
}, 500);
        }
    if (t == 7){
        setTimeout(function() {
    document.getElementById("hobbyCard4").style.display = "none";
}, 500);}
    if (t == 9){
        setTimeout(function() {
    document.getElementById("hobbyCard5").style.display = "none";
}, 500);}
        else{}
})

btnYes.addEventListener('click', function(){
    count++;
    var t = count++;
    console.log (t);
    if (t == 1){
         setTimeout(function() {
    document.getElementById("hobbyCard1").style.display = "none";
}, 500);
    }
    if (t == 3){
         setTimeout(function() {
    document.getElementById("hobbyCard2").style.display = "none";
}, 500);
    }
    if (t == 5){
         setTimeout(function() {
    document.getElementById("hobbyCard3").style.display = "none";
}, 500);
    }
    if (t == 7){
          setTimeout(function() {
    document.getElementById("hobbyCard4").style.display = "none";
}, 500);
    }
    if (t == 9){
          setTimeout(function() {
    document.getElementById("hobbyCard5").style.display = "none";
}, 500);
    }else{}

})

btnNo.addEventListener("click", function(){
    document.getElementById("no_one").classList.remove('fade_one');
    setTimeout(function(){document.getElementById("no_one").classList.add('fade_one');},0);
});

btnYes.addEventListener("click", function(){
    document.getElementById("yes_one").classList.remove('fade_two');
    setTimeout(function(){document.getElementById("yes_one").classList.add('fade_two');},0);
});
