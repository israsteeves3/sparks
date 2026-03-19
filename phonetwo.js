


function removeCard(){
    let v = document.getElementById('sliderRange1').value; 
    console.log(v);
    let n = Math.abs(v);
    let t = n/100;   
    let p = v/100;
    let o = p + .50;
    let l = t + .50;
    document.getElementById('no').style.opacity = l;
    document.getElementById('yes').style.opacity = o;
    document.getElementById('cardContainer1').style.transform="rotate(" + v + "deg)";
    if (v <= -45){
        document.getElementById('sliderContainer1').style.display = "none";
        document.getElementById('cardContainer1').style.display = "none";
        document.getElementById('no').style.opacity = "0";
    }
    if (v >= 0){

    document.getElementById('no').style.opacity = "0";
    }
    if (v <= 1){
    document.getElementById('yes').style.opacity = "0";

    }
    
    if (v >= 50){
        document.getElementById('sliderContainer1').style.display = "none";
        document.getElementById('cardContainer1').style.display = "none";
        document.getElementById('yes').style.opacity = "0";

    }
    
    else { 
    }
}
document.getElementById('sliderRange1').addEventListener('input',removeCard);

function removeCardTwo(){
    let v = document.getElementById('sliderRange2').value;
    document.getElementById('cardContainer2').style.transform="rotate(" + v + "deg)";
    let n = Math.abs(v);
    let t = n/100;   
    let p = v/100;
    let o = p + .50;
    let l = t + .50;
    document.getElementById('no').style.opacity = l;
    document.getElementById('yes').style.opacity = o;
    if (v <= -45){
        document.getElementById('sliderContainer2').style.display = "none";
        document.getElementById('cardContainer2').style.display = "none";
        document.getElementById('no').style.opacity = "0";
    }
    if (v >= 0){
    document.getElementById('no').style.opacity = "0";
    }
    if (v <= 1){
    document.getElementById('yes').style.opacity = "0";
    }
    
    if (v >= 50){
        document.getElementById('sliderContainer2').style.display = "none";
        document.getElementById('cardContainer2').style.display = "none";
        document.getElementById('yes').style.opacity = "0";
    }
    else { 
    }
}
document.getElementById('sliderRange2').addEventListener('input',removeCardTwo);

function removeCardThree(){
    let v = document.getElementById('sliderRange3').value;
    document.getElementById('cardContainer3').style.transform="rotate(" + v + "deg)";
    let n = Math.abs(v);
    let t = n/100;   
    let p = v/100;
    let o = p + .50;
    let l = t + .50;
    document.getElementById('no').style.opacity = l;
    document.getElementById('yes').style.opacity = o;
    if (v <= -45){
        document.getElementById('sliderContainer3').style.display = "none";
        document.getElementById('cardContainer3').style.display = "none";
        document.getElementById('no').style.opacity = "0";
    }
    if (v >= 0){
    document.getElementById('no').style.opacity = "0";
    }
    if (v <= 1){
    document.getElementById('yes').style.opacity = "0";
    }
    
    if (v >= 50){
        document.getElementById('sliderContainer3').style.display = "none";
        document.getElementById('cardContainer3').style.display = "none";
        document.getElementById('yes').style.opacity = "0";
    }
    else { 
    }
}
document.getElementById('sliderRange3').addEventListener('input',removeCardThree);

function removeCardFour(){
    let v = document.getElementById('sliderRange4').value;
    document.getElementById('cardContainer4').style.transform="rotate(" + v + "deg)";
    let n = Math.abs(v);
    let t = n/100;   
    let p = v/100;
    let o = p + .50;
    let l = t + .50;
    document.getElementById('no').style.opacity = l;
    document.getElementById('yes').style.opacity = o;
    if (v <= -45){
        document.getElementById('sliderContainer4').style.display = "none";
        document.getElementById('cardContainer4').style.display = "none";
        document.getElementById('no').style.opacity = "0";
    }
    if (v >= 0){
    document.getElementById('no').style.opacity = "0";
    }
    if (v <= 1){
    document.getElementById('yes').style.opacity = "0";
    }
    
    if (v >= 50){
        document.getElementById('sliderContainer4').style.display = "none";
        document.getElementById('cardContainer4').style.display = "none";
        document.getElementById('yes').style.opacity = "0";
    }
    else { 
    }
}
document.getElementById('sliderRange4').addEventListener('input',removeCardFour);

function removeCardFive(){
    let v = document.getElementById('sliderRange5').value;
    document.getElementById('cardContainer5').style.transform="rotate(" + v + "deg)";
    let n = Math.abs(v);
    let t = n/100;   
    let p = v/100;
    let o = p + .50;
    let l = t + .50;
    document.getElementById('no').style.opacity = l;
    document.getElementById('yes').style.opacity = o;
    if (v <= -45){
        document.getElementById('sliderContainer5').style.display = "none";
        document.getElementById('cardContainer5').style.display = "none";
        document.getElementById('no').style.opacity = "0";
    }
    if (v >= 0){
    document.getElementById('no').style.opacity = "0";
    }
    if (v <= 1){
    document.getElementById('yes').style.opacity = "0";
    }
    
    if (v >= 50){
        document.getElementById('sliderContainer5').style.display = "none";
        document.getElementById('cardContainer5').style.display = "none";
        document.getElementById('yes').style.opacity = "0";
    }
    else { 
    }
}
document.getElementById('sliderRange5').addEventListener('input',removeCardFive);

