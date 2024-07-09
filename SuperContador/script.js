function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passos = document.getElementById('txtp')
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0|| passos.value.length == 0){
        window.alert('Por favor preencha as informações para prosseguir!')
    }
    else{
        res.innerHTML = 'contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if(i < f){
        for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
             res.innerHTML += ` ${c} \u{1F3C1}`
        }else{
             for(let c = i; c >= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
        }

        
    }
    res.innerHTML += ` ${c} \u{1F3C1}`
}
}
