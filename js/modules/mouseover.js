export default function initMouseOver() {
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






