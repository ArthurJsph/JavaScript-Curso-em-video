function tabuada() {
    let num = parseInt(document.getElementById('txtn').value);
    let tab = document.getElementById('seltab');
    
    // Limpa as opções existentes no select
    tab.innerHTML = '';

    if (isNaN(num)) {
        window.alert('Por favor, digite um número válido!');
    } else {
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${num} x ${c} = ${num * c}`;
            tab.appendChild(item);
        }
    }
}
