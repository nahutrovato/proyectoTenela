

const averiguarCredito = () =>{
    let mostradorDeMonto = document.querySelector('#mostradorMonto');
    let mostradorDeDias = document.querySelector('#mostradorDias');
    let monto = parseInt(document.querySelector('#customRange1').value);
    let dias = parseInt(document.querySelector('#customRange2').value);

    let interesesPorcentaje = dias * 1
    let interesFinal = (monto*interesesPorcentaje) / 100;
    
    let montoADevolver = document.querySelector('#montoADevolver');
    let visualizadorPrestamo = document.querySelector("#visualizadorPrestamo");
    let visualizadorDias = document.querySelector('#visualizadorDias');
    let visualizadorInteres = document.querySelector('#visualizadorInteres');
    let visualizadorCostosAdministrativos = document.querySelector('#visualizardorCostosAdministrativos');

    
    let costosAdministrativos = ( interesFinal * 10 ) / 100; 
    let precio = "$ARS " + (monto + interesFinal + costosAdministrativos);
    let precioFinal = '';

    for(let i=0;i<precio.length;i++){
        
        if(precio[i]==='.'){
            break;
        }else{
            precioFinal+=precio[i]
        }
        
    }

    

    mostradorDeDias.innerHTML = "Dias: " + dias;
    mostradorDeMonto.innerHTML = "Monto: " + monto;
    montoADevolver.innerHTML = precioFinal;
    visualizadorPrestamo.innerHTML = precioFinal;
    visualizadorDias.innerHTML = dias + " dias";
    visualizadorInteres.innerHTML = interesFinal;
    visualizadorCostosAdministrativos.innerHTML = costosAdministrativos;
}