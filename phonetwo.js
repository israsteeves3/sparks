

function removeCard(){
    let v = document.getElementById('sliderRange1').value; 
    let t = 1.5*(v/100);
    let o = 1.5*(-1*t);
   console.log(v);
   //console.log(o);
    document.getElementById('hobbyCard1').style.transform="rotate(" + v + "deg)";
    document.getElementById('no_one').style.opacity = o;
    document.getElementById('yes_one').style.opacity = t;
    if (v <= -45){
        document.getElementById('sliderRange1').style.display = "none";
        document.getElementById('hobbyCard1').style.display = "none";
        document.getElementById('no_one').style.opacity = "0";
        document.getElementById('yes_one').style.opacity = "0";

    }
    if (v >= 50){
        document.getElementById('sliderRange1').style.display = "none";
        document.getElementById('hobbyCard1').style.display = "none";
        document.getElementById('no_one').style.opacity = "0";
        document.getElementById('yes_one').style.opacity = "0";
    }
    
    else { 
    }
}
document.getElementById('sliderRange1').addEventListener('input',removeCard);


//Will not let me go in to the positives, after 0 it goes straight to -45 and makes the card disappear
function removeCardTwo(){
    document.getElementById('sliderRange2').setAttribute("value","0");
    let v = document.getElementById('sliderRange2').value;
    let t = 1.5*(v/100);
    let o = 1.5*(-1*t);
    console.log(v);
   //console.log(o);
   document.getElementById('hobbyCard2').style.transform = "rotate(" + v + "deg)";
    document.getElementById('no_one').style.opacity = o;
    document.getElementById('yes_one').style.opacity = t;
    if (v <= -45){
        document.getElementById('sliderRange2').style.display = "none";
        document.getElementById('hobbyCard2').style.display = "none";
        document.getElementById('no_one').style.opacity = "0";
        document.getElementById('yes_one').style.opacity = "0";
    }
     
    if (v >= 50){
        document.getElementById('sliderRange2').style.display = "none";
        document.getElementById('hobbyCard2').style.display = "none";
        document.getElementById('no_one').style.opacity = "0";
        document.getElementById('yes_one').style.opacity = "0";
    }
    else { 
    }
}
document.getElementById('sliderRange2').addEventListener('input',removeCardTwo);

function removeCardThree(){
    let v = document.getElementById('sliderRange3').value;
    let t = 1.5*(v/100);
    let o = 1.5*(-1*t);
    console.log(v);
   //console.log(o);
    document.getElementById('no_one').style.opacity = o;
    document.getElementById('yes_one').style.opacity = t;
    document.getElementById('hobbyCard3').style.transform="rotate(" + v + "deg)";
    if (v <= -45){
        document.getElementById('sliderRange3').style.display = "none";
        document.getElementById('hobbyCard3').style.display = "none";
        document.getElementById('no_one').style.opacity = "0";
        document.getElementById('yes_one').style.opacity = "0";
    }
    if (v >= 50){
        document.getElementById('sliderRange3').style.display = "none";
        document.getElementById('hobbyCard3').style.display = "none";
        document.getElementById('no_one').style.opacity = "0";
        document.getElementById('yes_one').style.opacity = "0";
    }
    else { 
    }
}
document.getElementById('sliderRange3').addEventListener('input',removeCardThree);

function removeCardFour(){
    let v = document.getElementById('sliderRange4').value;
    console.log(v);
    let t = 1.5*(v/100);
    let o = 1.5*(-1*t);
    document.getElementById('no_one').style.opacity = o;
    document.getElementById('yes_one').style.opacity = t;
    document.getElementById('hobbyCard4').style.transform="rotate(" + v + "deg)";
    if (v <= -45){
        document.getElementById('sliderRange4').style.display = "none";
        document.getElementById('hobbyCard4').style.display = "none";
        document.getElementById('no_one').style.opacity = "0";
        document.getElementById('yes_one').style.opacity = "0";
    }
    if (v >= 50){
        document.getElementById('sliderRange4').style.display = "none";
        document.getElementById('hobbyCard4').style.display = "none";
        document.getElementById('no_one').style.opacity = "0";
        document.getElementById('yes_one').style.opacity = "0";
    }
    else { 
    }
}
document.getElementById('sliderRange4').addEventListener('input',removeCardFour);

function removeCardFive(){
    let v = document.getElementById('sliderRange5').value;
    let t = 1.5*(v/100);
    let o = 1.5*(-1*t);
    
    document.getElementById('no_one').style.opacity = o;
    document.getElementById('yes_one').style.opacity = t;
    document.getElementById('hobbyCard5').style.transform="rotate(" + v + "deg)";
    if (v <= -45){
        document.getElementById('sliderRange5').style.display = "none";
        document.getElementById('hobbyCard5').style.display = "none";
        document.getElementById('no_one').style.opacity = "0";
        document.getElementById('yes_one').style.opacity = "0";
    }
    if (v >= 50){
        document.getElementById('sliderRange5').style.display = "none";
        document.getElementById('hobbyCard5').style.display = "none";
        document.getElementById('no_one').style.opacity = "0";
        document.getElementById('yes_one').style.opacity = "0";
    }
    else { 
    }
}
document.getElementById('sliderRange5').addEventListener('input',removeCardFive);

