// Scatter
var config = {
  'bindTo': '#scatter',
  'size':{
    'width':960,
    'height':500,
    'margin':{top: 20, right: 20, bottom: 30, left: 40},
  }
}

var chart = dbox.chart(config)
        .data({'tsv':'assets/data/data.tsv'})
      .layer(dbox.scatter)
        .x('sepalWidth')
        .y('sepalLength')
        .color('species')
      .end()
        .draw();