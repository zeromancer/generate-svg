//var P10 = this.P10 = function () {};
var P10 = this.P10 = P10 || {};

P10.waveFull = function (draw, strokeColor, i) {
    return draw.pattern(10, 10, function (add) {
        add.line(0, 10, 5, 0).stroke({
            color: strokeColor,
            width: i
        })
        add.line(5, 0, 10, 10).stroke({
            color: strokeColor,
            width: i
        })
    })
}
P10.waveFullValues = [1, 2, 3, 4]

P10.waveHalf = function (draw, strokeColor, i) {
    return draw.pattern(10, 10, function (add) {
        add.line(0, 8, 5, 2).stroke({
            color: strokeColor,
            width: i
        })
        add.line(5, 2, 10, 8).stroke({
            color: strokeColor,
            width: i
        })
    })
}
P10.waveHalfValues = [1, 2]

P10.hills = function (draw, strokeColor, i) {
    return draw.pattern(10, 10, function (add) {
        add.line(2, 8, 5, 2).stroke({
            color: strokeColor,
            width: i
        })
        add.line(5, 2, 8, 8).stroke({
            color: strokeColor,
            width: i
        })
    })
}
P10.hillsValues = [1, 2]

P10.crossesFull = function (draw, strokeColor, i) {
    return draw.pattern(10, 10, function (add) {
        add.line(0, 0, 10, 10).stroke({
            color: strokeColor,
            width: i
        })
        add.line(0, 10, 10, 0).stroke({
            color: strokeColor,
            width: i
        })
    })
}
P10.crossesFullValues = [1, 2, 3, 4, 5]

P10.crossesHalf = function (draw, strokeColor, i) {
    return draw.pattern(10, 10, function (add) {
        add.line(2, 2, 8, 8).stroke({
            color: strokeColor,
            width: i
        })
        add.line(2, 8, 8, 2).stroke({
            color: strokeColor,
            width: i
        })
    })
}
P10.crossesHalfValues = [1, 2, 3]

P10.pluses = function (draw, strokeColor, i) {
    return draw.pattern(10, 10, function (add) {
        add.line(2, 5, 8, 5).stroke({
            color: strokeColor,
            width: i
        })
        add.line(5, 2, 5, 8).stroke({
            color: strokeColor,
            width: i
        })
    })
}
P10.plusesValues = [1, 2]

P10.circles = function (draw, strokeColor, i) {
    return draw.pattern(10, 10, function (add) {
        add.circle(i).fill(strokeColor)
    })
}
P10.circlesValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]

P10.squares = function (draw, strokeColor, i) {
    return draw.pattern(10, 10, function (add) {
        add.rect(i, i)
            .move((10 - i) / 2, (10 - i) / 2)
            .fill(strokeColor)
    })
}
P10.squaresValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
