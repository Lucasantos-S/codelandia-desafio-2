 export default function animeScroll() {

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
 }
 










