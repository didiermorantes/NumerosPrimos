const asignaEventos = ()=>{
    let elBoton = document.getElementById('btnEvaluar');
    elBoton.addEventListener('click', funcionCalculaPrimos);
}

const evaluarPrimo=(num)=>{
    let esPrimo = false;
    let contador = 0;
    for(let i=2; i<=num ; i++){
        if(num % i == 0){
            contador = contador + 1;
        }
    }

    if(contador < 2){
        esPrimo = true;
    }

    return esPrimo;
}

const funcionCalculaPrimos = ()=>{
    let elNumeroTxt = document.getElementById('txtNum');
    let elNumero = Number(elNumeroTxt.value);
    console.log('El numero: '+elNumero);
    let listaPrimos = [];
    let resultadoEvaluacion = false;
    for(let i=2; i <= elNumero; i++){
        resultadoEvaluacion = evaluarPrimo(i);
        if(resultadoEvaluacion == true){
            listaPrimos.push(i);
        }
    }

    let laListaTxt = document.getElementById('resultadoLista');
    laListaTxt.innerText = listaPrimos;
}

