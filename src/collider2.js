var w = window.innerWidth;
var h = window.innerHeight;
var r = 10;

var svg = d3.select('body')
            .append('svg')
            .attr('width', w)
            .attr('height', h);

var dragMove = function() {
  console.log('It drags x:' + d3.event.x + ' y:' + d3.event.y);
  d3.select(this)
    .attr('cx', d3.event.x)
    .attr('cy', d3.event.y);
};

var drag = d3.behavior.drag()
            .on("drag", dragMove);

var enemies = svg.selectAll('circle.enemy') //Create a selection of 1 empty object without node and data
                .data(d3.range(0,8)) //Expand the selection to 9 objects, each object has a data value but no node because the dom has no circle element
                .enter() //Filter the selection, taking only the objects with empty nodes, so in this case all of them
                .append('circle') //Add a circle node in each object of the selection; adds the circle in the svg
                .attr('cx', function() {return Math.random() * w})
                .attr('cy', function() {return Math.random() * h})
                .attr('class', 'enemy') //Assign attributes to each circle elment
                .attr('r', r);

var player = svg
              .append('circle')
              .attr('class', 'player')
              .attr('cx', w/2)
              .attr('cy', h/2)
              .attr('r', r)
              .call(drag);

setInterval(function() {
  enemies.transition()
          .duration(function() {
            return Math.random() * 3000;
          })
          .attr('cx', function() {return Math.random() * w})
          .attr('cy', function() {return Math.random() * h});

}, 1000);  

d3.timer(function() {
  enemies.each(function(enemy) {


  });
});


