
class Node {
  constructor( value ) {
    this.value = value;
    this.children = [];
  }

  appendChild( ...child ) {
    if ( child.reduce( ( acc, cur ) => ( acc && cur instanceof Node ), true ) ) {
      this.children.push( ...child );
    }
    else {
      throw 'invalid type exception';
    }
  }
}

class Tree {
  constructor( value=null ) {
    this.root = new Node( value );
  }

  BFS ( value ) {
    const queue = [this.root];
    while ( queue.length > 0 ) {
      const cur = queue.shift();
      //console.log( 'touched: ', cur.value ); //logging for validation
      queue.push( ...cur.children );
      if ( cur.value === value ) {
        return cur;
      }
    }
    return null;
  }

  DFS ( value ) {
    function recurse ( root, value ) {
      //console.log( 'touched: ', root.value ); //logging for validation
      if ( root.value === value ) {
        return root;
      }
      else {
        for ( const c of root.children ) {
          const localSearch = recurse ( c, value );
          if ( localSearch ) {
            return localSearch;
          }
        }
      }
      return null;
    }

    return recurse( this.root, value );
  }

  toString () {
    const str = [''];
    function recurse ( root, level, indent ) {
      if ( !str[level] ) { str[level] = ''; } //initialize if not already

      let curIn = 0;
      for ( const char of str[level] ) { //check what the actual indent of the line is
        if ( char === '\t' ) { curIn++; }
      }
      if ( curIn < indent ) { //if the indent of this line is smaller than it should be, the tree is not full
        for ( let i=0; i<indent-curIn; i++ ) { //so add to indent until it matches
          str[level] += '\t';
        }
        curIn = indent;
      }

      str[level] += root.value;
      if( root.children.length === 0 ) { //indent of higher levels corellates to number of leaves underneath it
        str[level] += '\t';
        for ( let i = level-1; i >= 0; i-- ) { //so add to all above levels
          str[i] += '\t';
        }
      }

      for ( const child of root.children ) { //now call for all children
        recurse( child, level+1, curIn );
      }
    }

    recurse( this.root, 0, 0 );

    let ret = '';
    for ( const level of str ) {
      ret += level + '\n';
    }

    return ret;
  }
}

module.exports = {
  Tree: Tree,
  Node: Node
};
