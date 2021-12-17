export default function initModal() {


const container = document.querySelectorAll('.js-sneakers')
const containerModal = document.querySelector('[data-modal="container"]')
const fecharModal = document.querySelector('.fechar')
const containerTenis =document.querySelectorAll('.sneakers')
const modal = document.querySelector('.modal-tenis')
 
const ArrayTenis = [...containerTenis]

ArrayTenis.forEach((item, index) => {
   item.addEventListener('click', (event)=>{
    pushModal(item)
   })
})

function pushModal(event) {
    modal.innerHTML = ' '
    const conteudoModal = document.createElement('div') 
    const conteudo = containerTenis
    conteudoModal.classList.add('tenis-modal')
    conteudoModal.innerHTML = event.innerHTML
    modal.appendChild(conteudoModal)
    return modal
} 


function ativarModal(event,item,index) {
containerModal.classList.toggle('ativo')
}


container.forEach((item, index) => {
     item.addEventListener('click', ()=> {
              ativarModal(index,item)
              console.log(index)
     })
})

fecharModal.addEventListener('click', ativarModal )


}