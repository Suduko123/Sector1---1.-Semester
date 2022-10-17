function changeBG(){
    var navbar = document.getElementById('navbar')
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navbar.classList.remove('bgColor');
        navbar.classList.remove('navscroll')
    } else {
        navbar.classList.add('bgColor');
        navbar.classList.add('navscroll');
    }
}

window.addEventListener('scroll', changeBG)