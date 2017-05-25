// Scatter
/***************************
 *        SCATTER
 ***************************/
var config = {
  'bindTo': '#scatter',
  'size': {
    'width': 960,
    'height': 500,
    'margin': {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    },
  }
}

var chart = dbox.chart(config)
  .data({
    'tsv': 'assets/data/data.tsv'
  })
  .layer(dbox.scatter)
  .x('sepalWidth')
  .y('sepalLength')
  .color('species')
  .tip(function(d){
    return d.color + ' (' + d.x + ',' + d.y + ')';
  })
  .end()
  .draw();




/***************************
 *        TREEMAP
 ***************************/
var colors = ['#562B4F', '#742C6A', '#B23733', '#DC8933'];

var config = {
  'size': {
    'width': 600,
    'height': 600,
    'margin': {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
  },
  'xAxis': {
    'enabled': false
  },
  'yAxis': {
    'enabled': false
  }
};

dbox.chart(config)
  .bindTo('#treemap')
  .data({
    'tsv': 'assets/data/test.tsv'
  })
  .layer(dbox.treemap)
  .nestBy(['variable', 'category', 'subcategory'])
  .size('number')
  .format(',.0f')
  .end()
  .draw();




/***************************
 * MAPA DE ESTADOS DE MÉXICO
 ***************************/
var config = {
  'bindTo': '#map',
  'size': {
    'width': 900,
    'height': 590,
    'margin': {
      top: 0,
      right: 0,
      bottom: 0,
      left: 50
    },
    'translateX': 45,
    'scale': 1.3
  },
  'xAxis': {
    enabled: false
  },
  'yAxis': {
    enabled: false
  },
  'plotOptions': {
    'map': {
      'geo': 'mexico',
      'geoDivision': 'states',
      'quantiles': {
        'buckets': 5,
        'colors': ['#e3f0cd', '#cae2a1', '#b1d375', '#98c449', '#7fb61d'] 
      }
    }
  },
  'events': {
    'load': function(chart) {}
  }
}

var mapa = dbox.chart(config)
  .data({
    'csv': 'assets/data/datos_estados.csv'
  })
  .layer(dbox.map)
  .z('value')
  .tip(function(d) {
    console.log(d, d3.select(d));
    var name = d.properties.state_name + '<br>' + (d3.select('#state-' + d.id).attr('data-total'));
    return name;
  })
  .end()
  .draw();
  
  
  
/***************************
 *        BARRAS
 ***************************/  
var config = {
  size: {
    width: 600,
    height: 400,
    margin: {top: 5, right: 5, bottom: 40, left: 20}
  },
  xAxis: {
    enabled: true,
    scale: 'ordinal'
  },
  yAxis: {
    enabled: true,
    scale: 'linear'
  }
};
var data = [{name: 'female', x: 20, y: 35},{name: 'male', x: 30, y: 24},{name: 'NA', x: 54, y: 4}];

var chart = dbox.chart(config)
    .bindTo('#bars')
    .data({'raw': data})
    .layer(dbox.bars)
      .x('name')
      .y('y')
    .end()
    .draw();
    
    
    
    
/***************************
 *        BARRAS 2D
 ***************************/
    
var config = {
  size: {
    width: 600,
    height: 400,
    margin: {top: 5, right: 5, bottom: 40, left: 20}
  },
  xAxis: {
    enabled: true,
    scale: 'linear'
  },
  yAxis: {
    enabled: true,
    scale: 'linear'
  }
};

var chart = dbox.chart(config)
    .bindTo('#bars2d')
    .data({'raw': data})
    .layer(dbox.bars)
      .x('x')
      .y('y')
    .end()
    .draw();
    

/***************************
 *        TIMELINE
 ***************************/ 
var config = {
    'bindTo': '#timeline',
    'size':{
      'width':960,
      'height':500,
      'margin':{top: 20, right: 20, bottom: 30, left: 40},
    },
    'xAxis':{
      'scale':'time'
    }
  }
var chart = dbox.chart(config)
      .data({'tsv':'assets/data/airbus_data.tsv'})
    .layer(dbox.timeline)
      .x('date')
      .series(['Airbus', 'Boeing'])
      .color('species')
    .end()
      .draw();
      


/***************************
 *        HEATMAP
 ***************************/ 
var config = {
  'bindTo': '#heatmap',
  'size':{
    'width':960,
    'height':500,
    'margin':{top: 20, right: 20, bottom: 30, left: 40},
  },
  'xAxis':{
    'enabled':false
  },
  'yAxis':{
    'enabled':false
  }
}

var chart = dbox.chart(config)
    .data({'csv':'assets/data/heatmap.csv'})
  .layer(dbox.heatmap)
    .x(["12", "13", "14", "15", "16", "17", "18","19","20","21","22","23","24","25","26+"])
    .y(["12", "13", "14", "15", "16", "17"].reverse())
    .colors(['#e2b136','#d79435', '#b03735','#7f2e60','#622b59'])
    .tip(function(d){
      return 'Hombre ' + d.x + '<br> Mujer ' + d.y + '<br>' + d.value;
    })
  .end()
    .draw();