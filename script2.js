const pogresso = document.getElementById('progresso')
const proximo = document.getElementById('proximo')
const anterior = document.getElementById('anterior')
const circulos = document.querySelectorAll('.circulo')
let ativoAtual = 1


proximo.addEventListener('click', ()=>{
    ativoAtual++
    if(ativoAtual > circulos.length){
        ativoAtual = circulos.length
    }
    console.log(ativoAtual)
    update()
})

anterior.addEventListener('click', ()=>{
    ativoAtual--
    if(ativoAtual < 1){
        ativoAtual = 1
    }
    console.log(ativoAtual)
    update()
})

function update(){
    circulos.forEach((ativo, index)=>{
        if(index < ativoAtual){
            ativo.classList.add('ativo')
        }else{
            ativo.classList.remove('ativo')
        }
    })

    const ativo = document.querySelectorAll('.ativo')
    progresso.style.width = (ativo.length - 1) / (circulos.length - 1) * 100 + '%'
    console.log((ativo.length - 1) / (circulos.length - 1) * 100)

    if(ativoAtual === 1){
        anterior.disabled = true
    }else if(ativoAtual === circulos.length){
        proximo.disabled = true
    }else{
        anterior.disabled = false
        proximo.disabled = false
    }
}