'use strict';

//Intro a D3

// Ejemplo 1

// d3.select(selection).attr(name [,value]); 
 //d3.selectAll('#example1 p').style('color','orange');


// Ejemplo 2

//Iteracion con d3
// d3.selectAll('#example2 p')
//   .each(function(d){
//     d3.select(this).style('font-size', (Math.random() * 40) + 'px');
//   });


// Ejercicio 1

// d3.selectAll(<-- Todos los div dentro de #ejercicio1 -->).style("background", <-- Color -->);
// Recuerda el selector del hijo en la n-ésima posición div:nth-child(2)


// Ejemplo 3

//var data = ['Parrafo A', 'Párrafo B', 'Párrafo C', 'Párrafo D']; 
//
//d3.select('#example3 .panel-body')
//  .selectAll('p')
//  .data(data)
//  .enter()
//  .append('p')
//  .text(function(d){ return d; });


// Ejemplo 4

//var data = ['Parrafo A', 'Párrafo C', 'Párrafo D', 'Párrafo E', 'Párrafo F']; 
//
//var selection = d3.select('#example4 .panel-body')
//  .selectAll('p')
//  .data(data);
//
//// UPDATE
//selection
//  .text(function(d){return d;}); 
//
//// ENTER
//selection
//  .enter()
//  .append('p')
//  .text(function(d){return d;}); 
//
//// EXIT
//selection
//  .exit()
//  .remove();


// Ejercicio 2

//var datos = [30,40,50,80,100]; 
//d3.selectAll('#ejercicio2 *').remove(); 
//d3.select('#ejercicio2').selectAll('div')
//  .data(datos) // Se hace el enlace con los datos
//  // Usar la subselección .enter() 
//  //Agregar un nuevo div usando .append('div')


