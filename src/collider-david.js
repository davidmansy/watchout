var gameOptions = {
  height: 500,
  width: 1000
};

var enemyOptions = {
  num: 10,
  radius: 4
};

var axes = {
  x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
  y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
};


var gameBoard = d3.select('body').append('svg:svg')
                .attr('width', gameOptions.width)
                .attr('height', gameOptions.height);


//Create an array of ennemy data, each time it is called, it produces object with the same id and other x and y coordinates
var createEnemies = function() {
  return _.map(_.range(0, enemyOptions.num), function(i) {
    return { id: i,
              x: Math.random()*100,
              y: Math.random()*100
    };
  });
};

var limitXPosition = function(x, r) {
  return Math.max(r, Math.min( gameOptions.width - r, x));
};

var limitYPosition = function(y, r) {
  return Math.max(r, Math.min( gameOptions.height - r, y));
};


var render = function(enemy_data) {
  var enemies = gameBoard.selectAll('circle.enemy')
            .data(enemy_data, function(d) {return d.id;});
  console.log('These are the enemies');
  console.log(enemies);

  //Called once during the first render
  enemies.enter()
    .append('svg:circle')
      .attr('class', 'enemy')
      .attr('cx', function(enemy) { return limitXPosition( axes.x(enemy.x), enemyOptions.radius ); })
      .attr('cy', function(enemy) { return limitYPosition( axes.y(enemy.y), enemyOptions.radius ); })
      .attr('r', enemyOptions.radius);

  //Called each time to update the enemy data
  enemies.transition()
    .duration(2000)
      .attr('cx', function(enemy) { return limitXPosition( axes.x(enemy.x+10), enemyOptions.radius ); })
      .attr('cy', function(enemy) { return limitYPosition( axes.y(enemy.y+10), enemyOptions.radius ); })
};

var Player = function(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
}

var player;

var transform = function(player, dx, dy) {
  player.
}


var renderPlayer = function(playerObj) {

  player = gameBoard
    .append('svg:circle')
    .attr('class', 'player')
    .attr('cx', playerObj.x)
    .attr('cy', playerObj.y)
    .attr('r', playerObj.r)

  }

  var drag = d3.behavior.drag()
              .on('drag', transform(d3.event.x, d3.event.y));
}


var play = function() {
  var gameTurn = function() {
    var newEnemyPositions = createEnemies();
    render(newEnemyPositions);
  }

  //Render the player
  var player1 = new Player(axes.x(50), axes.y(50), 4);
  console.log(player1);
  renderPlayer(player1);

  //Render the ennemies
  gameTurn();
  setInterval(function() {
    gameTurn();
  }, 2000);


}

play();





