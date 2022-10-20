function changeNav(){
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('navChange');
        navbar.classList.remove('navscroll')
    } else {
        navbar.classList.add('navChange');
        navbar.classList.add('navscroll');
    }
}

window.addEventListener('scroll', changeNav)