

// nessa const temos os valores de cada peca
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// essa const armazena o que o document.querySelectorAll('[data-controle]') vai realizar
const controle = document.querySelectorAll ('[data-controle]')




// essa const armazena o que o document.querySelectorAll('[data-estatistica]') vai realizar
const estatistica = document.querySelectorAll('[data-estatistica]')



// const controle vai realizar: para cada elemento que é uma função anonima, ele ira realizar um click e um evento que tbm é função anonima. nisso ele vai buscar o elemento que é o "controle" e vai adicionar algo quando for clicado. o manipulaDados vai buscar dentro da variavel controle o data-set escolhido para ser clicado e buscar o PAI desse elemento.

controle.forEach((elemento) =>{
    elemento.addEventListener('click' , (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})


//  nessa função o manipuaDados vai buscar o IF operação dentro da function, verificando se é true ou false e realizando o comando em seguida. 
function manipulaDados (operacao, controle){
        const peca = controle.querySelector('[data-contador]')

    if (operacao === '-' ){  
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica (peca){


    estatistica.forEach(  (elemento) =>  {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}