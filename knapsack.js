// returns the ideal knapsack
const D = {};
function knapsack ( I,W ) {
  if ( !D[JSON.stringify( I )] ) {
    D[JSON.stringify( I )] = [];
    D[JSON.stringify( I )][W] = true;
  }
  else if ( !D[JSON.stringify( I )][W] ) {
    D[JSON.stringify( I )][W] = true;
  }
  else {
    console.log( 'double call!' );
  }
  if ( W <= 0 || I.length === 0 ) {
    return 0;
  }
  else {
    const sack = [];
    let newI;
    for ( let i=0; i<I.length; i++ ) {
      if ( I[i].w <= W ) {
        newI = I.slice( 0,i ).concat( I.slice( i+1,I.length ) );
        sack.push( Math.max(
          knapsack( newI, W-I[i].w )+I[i].v,
          knapsack( newI, W )
          ) );
      }
    }
    return Math.max( ...sack );
  }
}

const myI = [{w:1, v:4}, {w:5, v:9}, {w:7, v:3}, {w:3, v:3}, {w:1, v:4}];
console.log( knapsack( myI,5 ) );
