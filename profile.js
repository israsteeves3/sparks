document.getElementById("nav_icon").addEventListener('click', function(){
    var t = count;
    console.log (t);
    if (document.getElementById('lil_nav').style.display === 'none'){ 
        document.getElementById('lil_nav').style.display = 'block'
    }
    else {
        document.getElementById('lil_nav').style.display = 'none';
    }
})