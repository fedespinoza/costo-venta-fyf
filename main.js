// Función para multiplicar el valor ingresado por 50
function calcularMultiplicacion() {
    // Obtener el valor del input
    const peso = document.getElementById("peso").value;
    const costo = document.getElementById("costo").value;
    const producto = document.getElementById("producto").value;

    // Obtener el porcentaje seleccionado
    const porcentaje = parseInt(document.getElementById("porcentaje").value);


    // Verificar que el valor ingresado sea un número
    const numeroPeso = parseFloat(peso);
    if (isNaN(numeroPeso)) {
        document.getElementById("resultadoCosto").innerText = "Por favor, ingresa en el campo del peso un número válido.";
        return;
    }

    // Verificar que el valor ingresado sea un número
    const numeroCosto = parseFloat(costo);
    if (isNaN(numeroCosto)) {
        document.getElementById("resultadoCosto").innerText = "Por favor, ingresa en el campo del costo un número válido.";
        return;
    }

    // Multiplicar el número por 50
    const resultado = ((numeroCosto + 160)/numeroPeso + 15 + 105).toFixed(2);
    const porcentajeSumado = porcentaje + 100;

    const venta = ((porcentajeSumado * resultado) / 100).toFixed(2); 
    const promo = ((resultado * 1.4)*2).toFixed(2); 
    

    // Mostrar el resultado en el <h3>
    document.getElementById("resultadoCosto").innerText = `Costo ${producto}: $${resultado}`;
    document.getElementById("resultadoVenta").innerText = `Venta ${producto}: $${venta}`;
    document.getElementById("resultadoPromo").innerText = `Promo 2Kg ${producto}: $${promo}`;
    resultadoCosto.style.color = "blue";
    resultadoVenta.style.color = "blue";
    resultadoPromo.style.color = "blue";
}

// Función para limpiar el campo de entrada y el resultado
function limpiarResultado() {
    document.getElementById("peso").value = "";
    document.getElementById("costo").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("resultadoCosto").innerText = "";
    document.getElementById("resultadoVenta").innerText = "";
    document.getElementById("resultadoPromo").innerText = "";
}