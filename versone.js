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

function resetSlider(){
    document.getElementById('sliderRange').Value0.reset();
}