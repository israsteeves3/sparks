/*Code for making the login card disapper when submit button is clicked*/

/*sub.addEventListener("click", function(){
    console.log("hello");
})*/


sign.addEventListener("click", function(e){
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
    e.preventDefault();
});

logButton.addEventListener("click", function (e){
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
    e.preventDefault();
});

document.getElementById("nav_icon").addEventListener("click", function(){
    document.getElementById("lil_nav").style.display = "block";
});