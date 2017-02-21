function print(message){
  console.log(message);
  var p = d3.select('#console-output').append('p');
  p.append('span').attr('class','bash').text('> ');
  p.append('span').text(message);
}

print('hello')
d3.select('.container').append('p').text('Element with D3.js')
var svg = d3.select('.container').append('svg').attr('width',600).attr('height',400).style('background','navy');
svg.append('circle').attr('cx',300).attr('cy',200).attr('r',50).style('fill','white');

