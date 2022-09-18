
// navbar
const navbar = document.querySelector('nav')
window.addEventListener('scroll' ,() => {
    if(window.pageYOffset > 200){
        navbar.classList.add('AfterNav')
        navbar.classList.remove('Nav')
        
    }else{
        navbar.classList.add('Nav')
        navbar.classList.remove('AfterNav')
    }

    if(window.pageYOffset > 600){
        navbar.classList.add('navbar-light')
        navbar.classList.remove('navbar-dark')
    }else{
        navbar.classList.remove('navbar-light')
        navbar.classList.add('navbar-dark')
    }
})




