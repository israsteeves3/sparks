
//function changeOpacity(){
//    let v = document.getElementById('sliderRange').value;
//    let s = Math.abs(v);
//    let t = s - 90
//    let o = t/100;
//    let p = Math.abs(o)
//    document.getElementById('cardContainer1').style.opacity = p;/
//}
//document.getElementById('sliderRange').addEventListener('input',changeOpacity);

function showYes(){
    let v = document.getElementById('sliderRange').value;
    let p = v/100;
    let o = p + .50;
    document.getElementById('yes').style.opacity = o;
    if (v >= 50){
    document.getElementById('yes').style.opacity = "0";
    }
    if (v <= 1){
    document.getElementById('yes').style.opacity = "0";
    }
    else{

    }
}

document.getElementById('sliderRange').addEventListener('input',showYes);

function showNo(){
    let v = document.getElementById('sliderRange').value;
    let n = Math.abs(v);
    let p = n/100;
    let o = p + .50;
    document.getElementById('no').style.opacity = o;
    if (v <= -45){
    document.getElementById('no').style.opacity = "0";
    }
    if (v >= 0){
    document.getElementById('no').style.opacity = "0";
    }
    else{}
}

document.getElementById('sliderRange').addEventListener('input',showNo);

//This function is to rotate the card
function changeValue(){
    console.log(document.getElementById('sliderRange').value);
    let v = document.getElementById('sliderRange').value;
    document.getElementById('cardContainer1').style.transform="rotate(" + v + "deg)";
}
document.getElementById('sliderRange').addEventListener('input',changeValue);

//This function is to remove the card and bring forth the next card.
function removeCard(){
    let v = document.getElementById('sliderRange').value;
    if (v <= -45){
        document.getElementById('sliderRange').value = 0;
        document.getElementById('cardContainer1').styles.display = "none";
    }
    if (v >= 50){
        document.getElementById('sliderRange').value = 0;
        document.getElementById('cardContainer1').style.display = "none";
    }
    else { 
    }
}
document.getElementById('sliderRange').addEventListener('input',removeCard);

//This function is to remove the next card
function changeValue2(){
    console.log(document.getElementById('sliderRange').value);
    let v = document.getElementById('sliderRange').value;
    document.getElementById('cardContainer2').style.transform="rotate(" + v + "deg)";
    if (v <= -40){
        document.getElementById('sliderRange').value = 0;
        document.getElementById('cardContainer2').style.display = "none";
    }
    if (v >= 50){
        document.getElementById('sliderRange').value = 0;
        document.getElementById('cardContainer2').style.display = "none";
    }
    else {
    }
}
document.getElementById('sliderRange').addEventListener('input',changeValue2);

function changeValue3(){
    console.log(document.getElementById('sliderRange').value);
    let v = document.getElementById('sliderRange').value;
    document.getElementById('cardContainer3').style.transform="rotate(" + v + "deg)";
    if (v <= -40){
        document.getElementById('sliderRange').value = 0;
        document.getElementById('cardContainer3').style.display = "none";
    }
    if (v >= 50){
        document.getElementById('sliderRange').value = 0;
        document.getElementById('cardContainer3').style.display = "none";
    }
    else {
    }
}
document.getElementById('sliderRange').addEventListener('input',changeValue3);

function changeValue4(){
    console.log(document.getElementById('sliderRange').value);
    let v = document.getElementById('sliderRange').value;
    document.getElementById('cardContainer4').style.transform="rotate(" + v + "deg)";
    if (v <= -40){
        document.getElementById('sliderRange').value = 0;
        document.getElementById('cardContainer4').style.display = "none";
    }
    if (v >= 45){
        document.getElementById('sliderRange').value = 0;
        document.getElementById('cardContainer4').style.display = "none";
    }
    else {
    }
}
document.getElementById('sliderRange').addEventListener('input',changeValue4);

/*window.onload = function (){
    var card1 = document.getElementById('cardContainer1');
    card1.addEventListener('touchmove', function(ev){
        var touchLocation = ev.targetTouches[0];
        card1.style.left = touchLocation.pageX + 'px';
        card1.style.top = touchLocation.pageY + 'px';
        
    })
}*/
