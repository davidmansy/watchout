
// d3.
// select('body').
// selectAll('p').
// data(['a', 'b', 'c']).
// enter().append('p').
// text(function(d) {
//   return 'I am ' + d;
// });


// d3.
// select('body').
// selectAll('p').
// data([ 'a', 'b', 'c', 'd', 'e']).
// enter().append('p').
// text(function(d) {
//   return 'And I am ' + d;
// });

d3.select('body').append('div').text('Demo of key');

data1 = [
  {
    name: 'bob'
  },
  {
    name: 'john'
  },
  {
    name: 'jane'
  }
];

data2 = [
  {
    name: 'sam'
  },
  {
    name: 'jane'
  },
  {
    name: 'Davey'
  }
];

d3.
select('body').
selectAll('p').
data(data1).
enter().append('p').
text(function(d) {
  return 'I am ' + d.name;
});

d3.
select('body').
selectAll('p').
data(data2, function(d, i) { console.log('d:', d, 'i:', i); return d.name; }).
enter().
append('p').
text(function(d) {
  return 'And I am ' + d.name;
});
