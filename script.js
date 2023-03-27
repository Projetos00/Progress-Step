const proximo = document.getElementById('proximo')
const anterior = document.getElementById('anterior')
const circuloAtivo = document.querySelectorAll('.circulo')
const progresso = document.getElementById('progresso')
let atual = 1;

proximo.addEventListener('click', ()=>{
    atual++;
    if(atual > circuloAtivo.length){
        atual = 4;
    }
    console.log(atual)
    up();
})

anterior.addEventListener('click', ()=>{
    atual--
    if(atual < 1){
        atual = 1
    }
    up()
    console.log(atual)
})

function up(){
    circuloAtivo.forEach((ativo,index)=>{
        if(atual > index){
            ativo.classList.add('ativo')
        }else if(atual <= index){
            ativo.classList.remove('ativo')
        }
    })

    //mostrar se o botão próximo e anterior vão está ativos ou não
    if(atual === 1){
        anterior.disabled = true
    }else if(atual == circuloAtivo.length){
        proximo.disabled = true
    }else{
        anterior.disabled = false
        proximo.disabled = false
    }

    //aumentar ou diminuir a barra de progresso
    switch(atual){
        case 1:
            progresso.style.width = '0%'
            break
        case 2:
            progresso.style.width = '31%'
            break
        case 3:
            progresso.style.width = '61%'
            break
        case 4:
            progresso.style.width = '101%'
            break
        default:
            break
    }
}
