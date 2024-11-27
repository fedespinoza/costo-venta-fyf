  
  // Añadir un evento para escuchar cuando se selecciona una opción
    producto.addEventListener('change', () => {
      // Asignar el valor 10 al input
      let valorSelect = producto.value;
      switch (valorSelect) {
        case "Acelga":
          peso.value = 12;  // Opción 1: asignar 10 al input
          break;
        case "Ajo":
          peso.value = 50;  // Opción 2: asignar 20 al input
          break;
        case "Banana":
          peso.value = 18;  // Opción 3: asignar 30 al input
          break;
          case "Berenjena":
          peso.value = 13;  // Opción 2: asignar 20 al input
          break;
          case "Brocoli":
          peso.value = 8;  // Opción 2: asignar 20 al input
          break;
          case "Cebolla":
          peso.value = 16;  // Opción 2: asignar 20 al input
          break;
          case "Choclo":
          peso.value = 10;  // Opción 2: asignar 20 al input
          break;
          case "Durazno":
          peso.value = 10;  // Opción 2: asignar 20 al input
          break;
          case "Esparrago":
          peso.value = 1;  // Opción 2: asignar 20 al input
          break;
          case "Espinaca":
          peso.value = 5;  // Opción 2: asignar 20 al input
          break;
          case "Frutilla":
          peso.value = 4;  // Opción 2: asignar 20 al input
          break;
          case "Kiwi":
          peso.value = 9;  // Opción 2: asignar 20 al input
          break;
          case "Lechuga":
          peso.value = 8;  // Opción 2: asignar 20 al input
          break;
          case "Lechuga Morada":
          peso.value = 4;  // Opción 2: asignar 20 al input
          break;
          case "Limon":
          peso.value = 15;  // Opción 2: asignar 20 al input
          break;
          case "Mandarina":
          peso.value = 16;  // Opción 2: asignar 20 al input
          break;
          case "Manzana":
          peso.value = 13;  // Opción 2: asignar 20 al input
          break;
          case "Manzana Verde":
          peso.value = 16;  // Opción 2: asignar 20 al input
          break;
          case "Melon":
          peso.value = 6;  // Opción 2: asignar 20 al input
          break;
          case "Morron Rojo":
          peso.value = 10;  // Opción 2: asignar 20 al input
          break;
          case "Morron Verde":
          peso.value = 8;  // Opción 2: asignar 20 al input
          break;
          case "Morron Amarillo":
          peso.value = 8;  // Opción 2: asignar 20 al input
          break;
          case "Palta":
          peso.value = 50;  // Opción 2: asignar 20 al input
          break;
          case "Papa":
          peso.value = 14;  // Opción 2: asignar 20 al input
          break;
          case "Pepino":
          peso.value = 14;  // Opción 2: asignar 20 al input
          break;
          case "Pera":
          peso.value = 15;  // Opción 2: asignar 20 al input
          break;
          case "Perejil":
          peso.value = 1;  // Opción 2: asignar 20 al input
          break;
          case "Puerro":
          peso.value = 1;  // Opción 2: asignar 20 al input
          break;
          case "Remolacha":
          peso.value = 10;  // Opción 2: asignar 20 al input
          break;
          case "Tomate":
          peso.value = 14;  // Opción 2: asignar 20 al input
          break;
          case "Tomate cherry":
          peso.value = 3;  // Opción 2: asignar 20 al input
          break;
          case "Verdeo":
          peso.value = 1;  // Opción 2: asignar 20 al input
          break;
          case "Zanahoria":
          peso.value = 9;  // Opción 2: asignar 20 al input
          break;
          case "Zapallito":
          peso.value = 18;  // Opción 2: asignar 20 al input
          break;
          case "Zapallo Anco":
          peso.value = 15;  // Opción 2: asignar 20 al input
          break;
          case "Zuccini":
          peso.value = 13;  // Opción 2: asignar 20 al input
          break;
        default:
          peso.value = '';  // Si no se selecciona una opción válida, dejar el input vacío
          break;
      }

      document.getElementById("costo").value = "";
    });


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
        document.getElementById("resultadoCosto").innerText = "Ingresa el peso correctamente.";
        return;
    }

    // Verificar que el valor ingresado sea un número
    const numeroCosto = parseFloat(costo);
    if (isNaN(numeroCosto)) {
        document.getElementById("resultadoCosto").innerText = "Ingresa la venta correctamente.";
        return;
    }

    // Multiplicar el número por 50
    const resultado = ((numeroCosto + 160)/numeroPeso + 15 + 105).toFixed(2);
    const porcentajeSumado = porcentaje + 100;

    const venta = ((porcentajeSumado * resultado) / 100).toFixed(2); 
    const promo = ((resultado * 1.4)*2).toFixed(2); 
    const gananciaCajon = ((venta * peso) - (resultado * peso)).toFixed(2);
    const gananciaDosCajon = ((promo * (peso / 2)) - (resultado * peso)).toFixed(2);
    

    // Mostrar el resultado en el <h3>
    document.getElementById("resultadoCosto").innerText = `Costo ${producto}: $${resultado}`;
    document.getElementById("resultadoVenta").innerText = `Venta 1Kg ${producto}: $${venta}`;
    document.getElementById("resultadoPromo").innerText = `Promo 2Kg ${producto}: $${promo}`;
    document.getElementById("gananciaXCajon").innerText = `Ganancia x Kg x Cajon $${gananciaCajon} \n Ganancia x 2Kg x Cajon $${gananciaDosCajon}`;
    resultadoCosto.style.color = "#f20a6b";
    resultadoVenta.style.color = "#f20a6b";
    resultadoPromo.style.color = "#f20a6b";
    gananciaXCajon.style.color = "#f20a6b";
}



// Función para limpiar el campo de entrada y el resultado
function limpiarResultado() {
    document.getElementById("peso").value = "";
    document.getElementById("costo").value = "";
    document.getElementById("producto").value = "Seleccionar producto";
    document.getElementById("porcentaje").value = "60";
    document.getElementById("resultadoCosto").innerText = "";
    document.getElementById("resultadoVenta").innerText = "";
    document.getElementById("resultadoPromo").innerText = "";
    document.getElementById("gananciaXCajon").innerText = "";
}