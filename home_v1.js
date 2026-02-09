/*Code for making the login card disapper when submit button is clicked*/

/*sub.addEventListener("click", function(){
    console.log("hello");
})*/

sub.addEventListener("click", function(e){
    document.getElementById("login").style.display = "none";
    document.getElementById("trans").style.display = "none";
    e.preventDefault();
})