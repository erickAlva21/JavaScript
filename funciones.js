function suma(num1, num2) {
    resultado = num1 + num2;
    console.log(resultado)
}

function cantidades() {
    var client = []
    client[0] = prompt('Ingrese una cantidad');
    client[1] = prompt('Ingresa una cantidad');
    client[2] = prompt('Ingresa una cantidad');
    client.sort()
// Sort ordena los datos de la array de menor a mayor
// Reverse invierte el orden de los datos
    client.reverse()
    console.log(client[0])
}
cantidades()