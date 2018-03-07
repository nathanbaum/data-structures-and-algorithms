function quickSort ( a ) {
  let A = [...a];
  if ( A.length < 2 ) {
    return A;
  }

  else if ( A.length === 2 ) {
    if ( A[0] > A[1] ) {
      const temp = A[0];
      A[0] = A[1];
      A[1] = temp;
    }
    return A;
  }

  else {
    const pivot = Math.floor( Math.random()*( A.length-1 ) );
    let left = [], right = [];
    for ( let i=0; i<A.length; i++ ) {
      if ( i !== pivot ) {
        if ( A[i] < A[pivot] ) {
          left.push( A[i] );
        }
        else {
          right.push( A[i] );
        }
      }
    }

    left = quickSort( left );
    right = quickSort( right );

    left.push( A[pivot] );

    A = left.concat( right );
    return A;
  }
}

function mergeSort ( a ) {
  let A = [...a];
  if ( A.length < 2 ) {
    return A;
  }

  else {
    let left = A.slice( 0, Math.floor( A.length/2 ) );
    let right = A.slice( Math.floor( A.length/2 ), A.length );

    left = mergeSort( left );
    right = mergeSort( right );

    A = [];
    while ( left.length>0 && right.length>0 ) {
      if ( left[0] < right[0] ) {
        A.push( left.shift() );
      }
      else {
        A.push( right.shift() );
      }
    }
    return A.concat( left.concat( right ) );
  }
}

const something = [9,293828,328,328328,248,48,824824824,8248,428,48,24842,842,8248,428,758,526474524,3732,574829,537295725295362759326562,56,3256,3295,365,4,532];
//const something = [3,6,3,2,6,7,4,7]


console.log( mergeSort( something ) );
console.log( something.sort( function( a,b ){return a - b;} ) );
