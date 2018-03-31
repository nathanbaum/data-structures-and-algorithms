const trees = require( './trees' );

const myTree = new trees.Tree( 0 );

const depth = 3;
const width = 2;

function fillTree ( level, node ) {
  if ( level === depth ) {
    return;
  }
  else {
    const nodes = [];
    for ( let i=0; i<width; i++ ) { // eslint-disable-line no-unused-vars
      //console.log( 'pushing ' + i + ' to nodes...' );
      nodes.push( new trees.Node( level+1 ) );
    }
    //console.log( 'pushing nodes:', nodes );
    node.appendChild( ...nodes );
    for ( const c of node.children ) {
      fillTree ( level+1, c );
    }
  }
}

fillTree( 0, myTree.root );
myTree.root.children[1].children[1].children[1].appendChild( new trees.Node( 4 ), new trees.Node( 4 ) );
myTree.root.children[0].children[1].children[0].appendChild( new trees.Node( 4 ) );

const myTreeStr = myTree.toString();
console.log( 'My Tree:\n' + myTreeStr );

console.log( 'BFS for 9:', myTree.BFS( 9 ) );
console.log( 'DFS for 9:', myTree.DFS( 9 ) );
