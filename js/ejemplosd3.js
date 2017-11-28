'use strict';

//Intro a D3

// Ejemplo 1

// d3.select(selection).attr(name [,value]); 
// d3.selectAll('#example1 p')
//   .attr('id', 'parrafo_especial')
//   .style('color','orange');


// Ejemplo 2

//Iteracion con d3
// d3.selectAll('#example2 p')
//   .style('font-size', function(d,i) {
//     return (Math.random() * 40) + 'px';
//   });
  /*
  .each(function(d){
      d3.select(this).style('font-size', (Math.random() * 40) + 'px');
  });
  */


// Ejercicio 1

// d3.selectAll(<-- Todos los div dentro de #ejercicio1 -->)
//.style("background", <-- Color -->);
// Recuerda el selector del hijo en la n-ésima posición div:nth-child(2)
// d3.selectAll('#ejercicio1 div')
//   .style('background', 'steelblue');
// d3.select('#ejercicio1 div')
//   .style('color', 'white');
// d3.select('#ejercicio1 div:nth-child(2)').attr('class', 'circle')
//   .style('color', 'pink');


// Ejemplo 3

// var data = ['Parrafo A', 'Párrafo B', 'Párrafo C', 'Párrafo D']; 
// 
// var parrafos = d3.select('#example3 .panel-body')
//   .selectAll('p')
//   .data(data)
// 
//   parrafos
//     .text(function(d) {return d; })
// 
//   
//   parrafos.enter()
//       .append('p')
//       .text(function(d){ return d; });


// Ejemplo 4

// var data = ['Parrafo A', 'Párrafo C', 'Párrafo D', 'Párrafo E', 'Párrafo F']; 
// 
// var selection = d3.select('#example4 .panel-body')
//   .selectAll('p')
//   .data(data);
// 
// // UPDATE
// selection
//   .text(function(d){return d;}); 
// // ENTER
// selection
//   .enter()
//     .append('p')
//     .text(function(d){return d;}); 
// 
// // EXIT
// selection
//   .exit()
//     .remove();


// Ejercicio 2
/**
 * pais       pib
 * mexico     100000
 * colombia   87000
 */

/**
 * Objetos
 */
//mexico.pais // 'mexico'
//mexico.pib // 100000

//mexico['Nombre del pais _'] // 'mexico
//mexico['pib'] // 100000
/**
 * var cincuenta = datos[2];
 * var mexico = paises[0];
 */

var paises = [
  { 'nombre' : 'mexico', 'porcentaje' : 875, color: 'green'},
  { 'nombre' : 'colombia', 'porcentaje' : 763, color: 'yellow'}
];
var datos = [30,40,50,80,100]; 

d3.selectAll('#ejercicio2 *').remove(); 

d3.select('#ejercicio2').selectAll('div')
  .data(paises) // Se hace el enlace con los datos
  .enter() // Usar la subselección .enter() 
  .append('div') //  //Agregar un nuevo div usando .append('div')
    .style('width', function(d, i) {
      return d.porcentaje + 'px';
    })
    .style('height', '30px')
    .style('background', function(d,i) {
      return d.color;
    })
    .style('margin-bottom', '5px')
    .style('padding', '5px')
    .text(function(d, i) {
      return d.nombre + ': ' + d.porcentaje;
    });



