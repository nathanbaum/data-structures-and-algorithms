function getWordsBrute ( board, isWord ) {
  const result = [];
  for ( const i in board ) {
    for ( const j in board[i] ) {
      let word = board[i][j];
      for( let k=j+1; k<board[i].length; k++ ) {
        word += board[i][k];
        if ( isWord( word ) ) {
          result.push( word );
        }
      }

    }
  }
}
