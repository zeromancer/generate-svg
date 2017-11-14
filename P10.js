
var P10 = this.P10 = function() {};

P10.waveFull = function (draw,i){
  return draw.pattern(10, 10, function (add) {
      add.line(0, 10, 5, 0).stroke({
          width: i
      })
      add.line(5, 0, 10, 10).stroke({
          width: i
      })
  })
}
P10.waveFullValues=[1,2,3,4]

P10.waveHalf = function (draw,i){
  return draw.pattern(10, 10, function (add) {
      add.line(0, 8, 5, 2).stroke({
          width: i
      })
      add.line(5, 2, 10, 8).stroke({
          width: i
      })
  })
}

P10.waveHalfValues=[1,2]
P10.hills = function (draw,i){
  return draw.pattern(10, 10, function (add) {
      add.line(2, 8, 5, 2).stroke({
          width: i
      })
      add.line(5, 2, 8, 8).stroke({
          width: i
      })
  })
}
P10.hillsValues=[1,2]

P10.crossesFull = function (draw,i){
  return draw.pattern(10, 10, function (add) {
      add.line(0, 0, 10, 10).stroke({
          width: i
      })
      add.line(0, 10, 10, 0).stroke({
          width: i
      })
  })
}
P10.crossesFullValues=[1,2,3,4,5]

P10.crossesHalf = function (draw,i){
  return draw.pattern(10, 10, function (add) {
      add.line(2, 2, 8, 8).stroke({
          width: i
      })
      add.line(2, 8, 8, 2).stroke({
          width: i
      })
  })
}
P10.crossesHalfValues=[1,2,3]

P10.pluses = function (draw,i){
  return draw.pattern(10, 10, function (add) {
      add.line(2, 5, 8, 5).stroke({
          width: i
      })
      add.line(5, 2, 5, 8).stroke({
          width: i
      })
  })
}
P10.plusesValues=[1,2]

P10.squares = function (draw,i){
  return draw.pattern(10, 10, function (add) {
        add.rect(i, i)
            .move((10 - i) / 2, (10 - i) / 2)
  })
}
P10.squaresValues=[1,2]

P10.circles = function (draw,i){
  return draw.pattern(10, 10, function (add) {
        add.circle(i)
  })
}
P10.squaresValues=[1,2,3,4,5,6,7,8,9]
