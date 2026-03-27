/*Code for making the login card disapper when submit button is clicked*/

/*sub.addEventListener("click", function(){
    console.log("hello");
})*/

sub.addEventListener("click", function(e){
    document.getElementById("login").style.display = "none";
    document.getElementById("trans").style.display = "none";
    e.preventDefault();
})

sign.addEventListener("click", function(e){
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
    e.preventDefault();
})

sub2.addEventListener("click", function(e){
    document.getElementById("signup").style.display = "none";
    document.getElementById("trans").style.display = "none";
    e.preventDefault();
})

logButton.addEventListener("click", function (e){
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
    e.preventDefault();
})