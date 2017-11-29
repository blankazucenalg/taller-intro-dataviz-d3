// // Ejemplo 1
// var paises = [
//   { 'nombre': 'mexico', 'porcentaje': 875, color: 'green' },
//   { 'nombre': 'venezuela', 'porcentaje': 563, color: 'red' },
//   { 'nombre': 'colombia', 'porcentaje': 763, color: 'yellow' }
// ];
// var datos = [30, 40, 50, 80, 100];
// 
// d3.selectAll('#ejemplo1 *').remove();
// 
// d3.select('#ejemplo1').selectAll('div')
//   .data(paises) // Se hace el enlace con los datos
//   .enter() // Usar la subselección .enter() 
//   .append('div') //  //Agregar un nuevo div usando .append('div')
//   .style('width', function (d, i) {
//     return d.porcentaje + 'px';
//   })
//   .style('height', '30px')
//   .style('background', function (d, i) {
//     return d.color;
//   })
//   .style('margin-bottom', '5px')
//   .style('padding', '5px')
//   .text(function (d, i) {
//     return d.nombre + ': ' + d.porcentaje;
//   });
// 
// 
// // Leyendo datos desde un archivo (CSV)
// 
// d3.csv('assets/data/CausasDeMortalidadDF2013.csv', function (data) {
//   d3.select('#chart-bar')
//     .selectAll('div')
//     .data(data)
//     .enter()
//     .append('div')
//     .style('width', function (d) {
//       return d.Defunciones / 20 + 'px';
//     })
//     .style('background-color', 'yellowgreen')
//     .style('margin-bottom', '3px')
//     .style('padding', '1px')
//     .text(function (d) {
//       return d.Defunciones;
//     });
// });
// 
// 
// 
// // ESCALAS
// var escalaLineal = d3.scaleLinear()
//   .range([0, 100])
//   .domain([0, 2000]);
// 
// 
// var escalaOrdinal = d3.scaleOrdinal()
//   .range(['#ff0000', '#0000ff'])
//   .domain(['roses', 'violets']);
// 
// var escalaDeBanda = d3.scaleBand()
//   .rangeRound([0, 100])
  // .domain(['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']);
// 
// 
// 
// 
// // Gráfica con escalas de tamaño y color 
// 
// d3.csv('assets/data/CausasDeMortalidadDF2013.csv', function (d) {
//   return {
//     name: d.Causas,
//     deaths: +d.Defunciones
//   };
// }, function (data) {
// 
//   data.sort(function (a, b) { return a.deaths > b.deaths ? -1 : 1; });
//   var maxValue = d3.max(data, function (d) { return d.deaths });
// 
//   var linear = d3.scaleLinear()
//     .range([0, 1024])
//     .domain([0, maxValue]);
// 
//   var color = d3.scaleLinear()
//     .range(['blue', 'green', 'yellow', 'red'])
//     .domain([0, maxValue / 4, maxValue / 2, maxValue]);
// 
//   d3.select('#scales').selectAll('div')
//     .data(data, function (d) { return d.name; })
//     .enter()
//       .append('div')
//       .style('width', function (d) { return linear(d.deaths) + 'px'; })
      // .style('background-color', function (d) { return color(d.deaths) })
//       .style('margin-bottom', '3px')
//       .style('color', 'white')
//       .style('padding', '1px')
//       .text(function (d) { return d.deaths; });
// });
// 
// 
// // Funciones útiles manipulación de arreglos
// var datos = [23,24,25,28,21,19,24];
// var suma = d3.sum(datos);
// var minimo = d3.min(datos);
// var maximo = d3.max(datos);
// var minimo_y_maximo = d3.extent(datos);
// var promedio = d3.mean(datos);
// var delUnoAlDiez = d3.range(1,11);
// 
// var elemento = d3.select('#manejoArreglos')
// elemento.append('p').text(datos.join());
// elemento.append('p').text('suma = ' + suma);
// elemento.append('p').text('suma = ' + suma);
// elemento.append('p').text('minimo = ' + minimo);
// elemento.append('p').text('maximo = ' + maximo);
// elemento.append('p').text('minimo_y_maximo = ' + minimo_y_maximo);
// elemento.append('p').text('promedio = ' + promedio);
// elemento.append('p').text('delUnoAlDiez = ' + delUnoAlDiez);
// 
// 
// 
// // EVENTOS 
// 
// 
// var svg = d3.select('#events').append('svg').attr('width', '1000px');
// svg.selectAll('circle')
//   .data(['click', 'overnout'], function (d) { return d; })
//   .enter()
//   .append('circle')
//   .attr('cx', function (d, i) {
//     return 200 * (i + 1);
//   })
//   .attr('cy', 70)
//   .attr('r', 70)
//   .style('fill', 'purple')
//   .attr('id', function (d) { return d; });
// 
// svg.select('#click')
//   .on('click', function (d, i) {
//     alert('Clicked!')
//   });
// 
// svg.select('#overnout')
//   .on('mouseover', function (d, i) {
//     d3.select(this)
//       .style('fill', 'yellow')
//   })
//   .on('mouseout', function (d, i) {
//     d3.select(this)
//       .style('fill', 'purple');
//   });
// 
// 
// // USANDO SVG
// 
// 
// d3.selectAll('#ejercicio2 *').remove();
// d3.csv('assets/data/planetas.csv', function (d) {
//   return {
//     planet: d.planeta,
//     distance: +d.kmDistanciaAlSol,
//     diameter: +d.diametroKm
//   };
// }, function (data) {
  // var width = document.getElementById('ejercicio2').offsetWidth - 30; // Obtiene el ancho del contenedor #ejercicio2
// 
  // var maxDistance = d3.max(data, function (d) { return d.distance }); // Obtiene la mayor  distancia de los planetas con respecto al Sol
  // console.log('El tamaño del contenedor y el valor máximo son: ', width, maxDistance);
// 
//   //Crea una escala lineal para las distancias de los planetas
//   var distancia = d3.scaleLinear()
//     .range([100, width - 25])
//   // Establece el dominio de la escala
//   //.domain([ 0, <-- distancia máxima -->]);
// 
  // var height = document.getElementById('ejercicio2').offsetHeight; // Altura del contenedor
  // // Obtén el tamaño más grande de todos los planetas (d3.max(data, function(d) { //Qué propiedad quieres? });
//   var escala = d3.scaleLinear()
//     .range([0, (height - 150)])
//   //.domain([ 0,  maxSize]);
// 
//   var color = d3.scaleOrdinal()
    // .range(['#424E4C', '#7C5531', '#7BBBF0', '#CC522C', '#A67845', '#EBA340', '#75D6F1', '#2C73A9'])
  // // Establece el dominio de la escala ordinal con la lista de los nombres de los planetas
//   // data.map(function(objeto){ return PROPIEDAD QUE QUIERES; })
// 
//   var svg = d3.select('#ejercicio2')
//     .append('svg')
//     .attr('width', width)
//     .attr('height', height);
// 
  // // Dibuja circulos para cada planeta dentro del svg (Ve el ejemplo de los eventos)
// 
// });
// 
// 
// 
// // Gráfica reutilizable como una funcion
// 
// 
// d3.csv('assets/data/AutosVendidosFeb2016.csv', filter, function (data) {
//   //Sort data
  // data.sort(function (a, b) { return a.quantity > b.quantity ? -1 : 1; });
// 
//   //Margins of the chart
//   var margin = { top: 20, right: 20, bottom: 40, left: 45 };
//   var width = 1100;
//   var height = 500;
// 
//   // Draw histogram
//   histogram(data, width, height, margin);
// });
// 
// function histogram(data, chartWidth, chartHeight, margin) {
//   var width = chartWidth - margin.left - margin.right,
//     height = chartHeight - margin.top - margin.bottom;
// 
//   // Escalas
//   var x = d3.scaleBand()
//     .rangeRound([0, width])
//     .paddingInner(0.1)
//     .domain(data.map(function (d) { return d.name; }));
// 
//   var y = d3.scaleLinear()
//     .range([height, 0])
//     .domain([0, d3.max(data, function (d) { return d.quantity; })]);
// 
//   // Definicion de ejes
//   var xAxis = d3.axisBottom(x);
//   var yAxis = d3.axisLeft(y)
//     .ticks(10);
// 
//   // Tooltip 
  // var tip = d3.tip().attr('class', 'd3-tip').html(function (d) { return d.quantity; });
// 
//   // Remover todo antes
//   d3.selectAll('#chart-svg *').remove();
// 
//   // Crear svg y grupo vacios
//   var svg = d3.select('#chart-svg').append('svg')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', height + margin.top + margin.bottom)
//     .append('g')
    // .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
// 
//   svg.call(tip); // Llamar la inicialización del tip
// 
//   svg.append('g')
//     .attr('class', 'x axis')
//     .attr('transform', 'translate(0,' + height + ')')
//     .call(xAxis);
// 
//   svg.append('g')
//     .attr('class', 'y axis')
//     .call(yAxis);
// 
//   svg.selectAll('.bar')
//     .data(data)
//     .enter()
//       .append('rect')
//       .attr('class', 'bar')
//       .attr('x', function (d) { return x(d.name); })
//       .attr('width', x.bandwidth())
//       .attr('y', function (d) { return y(d.quantity); })
//       .attr('height', function (d) { return height - y(d.quantity); })
//       .attr('fill', 'steelblue')
//       .on('mouseover', function(d) {
//         d3.select(this).attr('fill', 'red');
//         tip.show(d);
//       })
//       .on('mouseout', function() {
//         d3.select(this).attr('fill', 'steelblue');
//         tip.hide();
//       })
// 
  // d3.selectAll('.x.axis text').attr('transform', 'translate(0,10)rotate(-20)');
// }
// function filter(d) {
//   return {
//     name: d.GRUPO,
//     quantity: +d.CANTIDAD
//   };
// }