export default function initModal() {
const containerModal = document.querySelector('[data-modal="container"]')
const fecharModal = document.querySelector('.fechar')
const containerTenis =document.querySelectorAll('.sneakers')
const modal = document.querySelector('.modal-tenis')
const activeModal = 'active'
 
const ArrayTenis = [...containerTenis] // passando pra Array todos os containers dos sneakers

if(containerModal && containerTenis && modal ) {

     function ativarModal(event) { // adicionar ou remover a class ativo
     containerModal.classList.toggle(activeModal)
     }
     ArrayTenis.forEach((item, index) => {  //dando o loot em todos os container dos sneakers
        item.addEventListener('click', (event)=>{
         ativarModal() // ativando o modal apos clicar no item
         pushModal(item) // passando o item dentro do modal
        })
     })

     function pushModal(event) {
        modal.innerHTML = ' ' //reiniciando o html
        const conteudoModal = document.createElement('div') // criando uma div 
        conteudoModal.classList.add('tenis-modal') //adicionando uma class nessa div
        conteudoModal.innerHTML = event.innerHTML // pegando o html dos sneakers
        modal.appendChild(conteudoModal) // adicionando dentro do modal a div com o conteudo html acima
        return modal
    } 
     
     function clickForaModal (event) { // fehcar quando clicar fora do modal
         if(event.target === this)
         ativarModal(event)
     }
     
     fecharModal.addEventListener('click', ativarModal )
     containerModal.addEventListener('click', clickForaModal)
     }
}
