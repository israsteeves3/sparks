function changeValue(){
    console.log(document.getElementById('sliderRange').value);
    let v = document.getElementById('sliderRange').value;
    document.getElementById('cardContainer').style.transform="rotate(" + v + "deg)";
}

document.getElementById('sliderRange').addEventListener('input',changeValue);

function changeOpacity(){
    let v = document.getElementById('sliderRange').value;
    let s = Math.abs(v);
    let t = s - 90
    let o = t/100;
    let p = Math.abs(o)
    document.getElementById('cardContainer').style.opacity = p;
}

document.getElementById('sliderRange').addEventListener('input',changeOpacity);

//This function is to remove the card and bring forth the next card.
function removeCard(){
    let v = document.getElementById('sliderRange').value;
    const card = document.getElementById('cardContainer');
    if (v <= -45){
        card.textContent = "hello";
        document.getElementById('sliderRange').value = 0;
        document.getElementById('cardContainer').style.transform="rotate(" + 0 + "deg)";
        document.getElementById('cardContainer').style.opacity = 1;
        document.getElementById('cardContainer').style.height = "700px";
    }
    if (v >= 50){
        card.textContent = "New Card Information Here!";
        document.getElementById('sliderRange').value = 0;
        document.getElementById('cardContainer').style.transform="rotate(" + 0 + "deg)";
        document.getElementById('cardContainer').style.opacity = 1;
        document.getElementById('cardContainer').style.height = "700px";
    }
    else {
    }
}

document.getElementById('sliderRange').addEventListener('input',removeCard);
