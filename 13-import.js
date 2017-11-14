
var h1 = document.createElement("h1")
h1.appendChild(document.createTextNode("Hello World"))
document.body.prepend(h1)


//var ABC = ABC || {};
var ABC = this.ABC = function() {};
//var ABC = function() {};

ABC.hello = function (){
  console.log("hello world")
}
ABC.randomBool = function () {
    return Math.random() >= 0.5;
}
