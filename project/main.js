window.addEventListener('scroll', function(){
    if (window.scrollY > 150 ){
        document.querySelector('#navbar-x').style.opacity = .7
    }else{
        document.querySelector('#navbar-x').style.opacity = 1
    }
})