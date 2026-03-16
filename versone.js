
document.getElementById('prev').onclick = function(){
    const card = document.getElementById('hobbyCard');
    card.textContent = "You chose to go to the previous slide";
    card.style.height = "400px";
    card.style.width = "600px";
    card.style.backgroundColor = "red";
    card.style.margin = "1rem";
    card.style.alignContent = "center";

}

document.getElementById('next').onclick = function(){
    const card = document.getElementById('hobbyCard');
    card.style.textContent = "You chose to go to the next slide";
    card.style.height = "400px";
    card.style.width = "600px";
    card.style.backgroundColor = "blue";
    card.style.margin = "1rem";
    card.style.alignContent = "center";
    card.style.color = "white";
}
