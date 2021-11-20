 var typed = new Typed('#typed', {
        stringsElement: '#typed-strings' , 
        typeSpeed: 30, 
        
 });


 const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
 });

ScrollReveal().reveal('.container-info', { delay: 200 });
ScrollReveal().reveal('.destaque', { delay: 400 });
ScrollReveal().reveal('.destaque-frete', { delay: 500 });
ScrollReveal().reveal('.sneakers', { delay: 700});









function optiondown() {

const container = document.querySelectorAll('.js-sneakers')

if(container.length) {

function activeClass (){
       this.children[1].classList.add('ativo')
}

function removeClass() {
 this.children[1].classList.remove('ativo')
}


container.forEach((item) => {
       item.addEventListener('mouseover', activeClass)
      item.addEventListener('mouseout', removeClass)
      
})

}

}

optiondown()