const limpiar = () => document.getElementById('miFormulario').reset();

const fetch = () => {
    let get = document.getElementById("get").value;
    document.getElementById("put").value = dias;
}

const percentage = (partialValue, totalValue) => (partialValue * totalValue) /100;


const sumar = () => {
    let monto = parseInt(document.getElementById('monto').value);
    let dias = parseInt(document.getElementById('dias').value);
    let intereses =percentage(monto,dias);
    intereses=+ dias;
    console.log(`Estoy dentro de la funcion ${monto}`);

   document.getElementById('el-resultado').innerHTML = intereses;

}
