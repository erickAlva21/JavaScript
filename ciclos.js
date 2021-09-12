var i;
for(i=0; i<10; i++){
    document.write(i);
    document.write('<br>');
}

const frutas = ['Manzana', 'Mango', 'Pera', 'Piña', 'Sandia', 'Melon'];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);

for(i=0; i<frutas.length; i++){
    document.write(frutas[i]);
    document.write('<br>')
}

/* Ambas maneras como las puse muestran lo mismo, pero el ciclo for me ahorrar 
mucha linea de código */
