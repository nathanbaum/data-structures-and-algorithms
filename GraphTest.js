//import { Graph } from 'graphs';
const graphs = require( './graphs' );

const myG = new graphs.Graph();

for ( let i=0; i<5; i++ ) {
  myG.addVertex();
}

myG.link( 0, 1, 1 );
myG.link( 0, 4, 4 );
myG.link( 0, 3, 8 );
myG.link( 1, 2, 2 );
myG.link( 2, 3, 3 );
myG.link( 4, 1, 1 );

console.log( myG.getShortestPathDijkstra( 0 ) );
