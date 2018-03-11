/**
* A class representing a directed Graph
*/
class Graph {
  constructor () {
    this.adjacency = [];
    this.costs = [];
  }

  /**
  * @return {[Graph]} an array of Graph objects from this Graph, each containing only one connected component
  */
  getConnectedComponents () {
    // TODO: implement
  }

  /**
  * calculates the minimum spanning tree using Prom's algorithm
  * @return {Graph} a new graph containing the minimum spanning tree
  */
  getMSTPrim () {
    const seen = new Set();

    let cur = this.adjacency[0];
    seen.add( 0 );
    {
      c:
      v:
    }
    next = [];
    
    while ( seen.size<this.adjacency.length ) {
      let next = ;
      for ( const e of current ) {

      }
    }
  }

  /**
  * @param {Number} v The starting vertex
  * @return {Number[]} dist[1...n] where dist[i] is the length of the shortest path from v to i
  */
  getShortestPathDijkstra ( v ) {
    const dist = [];
    for ( const i in this.adjacency ) { // O(n)
      dist[i] = Infinity; // we say that initially, the length of shortest path to each vertex is Infinity
    }
    dist[v] = 0; // but, the path from v to itself is 0
    const seen = [];
    let seenNum = 0;

    for ( const i in this.adjacency ) { // O(n)
      seen[i] = false; //every vertex starts out unseen
    }

    let cur = v; //now, we start at the origin, v
    while ( seenNum < this.adjacency.length ) { // and we iterate until we have seen every vertex -- this loop will never terminate if the graph has unconnected components
      for ( const i of this.adjacency[cur] ) { // for all the links from this vertex
        dist[i] = Math.min( dist[i], dist[cur] + this.costs[cur][i] ); // set the distance from v to be the min of what it already is, or the distance to cur plus the distance from cur to i
      }
      seen[cur] = true; // now we can say we've seen cur
      seenNum++; // and increment the number of vertices we have seen
      // and now we need to set cur to the shortest link from cur that hasn't already been seen
      const poss = this.adjacency[cur].filter( e => !seen[e] ); //so we get an array of connected vertices that hasn't been seen
      if ( poss.length === 0 ) { //but, if we end up at a dead end ( there are no unseen nodes to link to )
        for ( const i in seen ) { // then we pick the first unseen vertex
          if ( !seen[i] ) {
            cur = i;
            break;
          }
        }
      }
      else { // now, if we do have some vertices to choose from
        let next = poss[0]; //we say next equals the first possible
        for ( let i=1; i<poss.length; i++ ) { // then starting from the second possible
          if ( this.costs[cur][ poss[i] ] < this.costs[cur][next] ) { // if the cost of one of the other possible next vertices is less
            next = poss[i]; //set next to that possible vertex
          }
        }
        cur = next;
      }
    }
    return dist;
  }

  /**
  * adds a non-connected vertex to the graph
  * @return {Number} the vertex that was added
  */
  addVertex () {
    this.adjacency.push( [] );
    return this.adjacency.length-1;
  }

  /**
  * creates an edge from a to b
  * @param {Number} a The starting vertex of the link
  * @param {Number} b The terminating vertex of the link
  * @param {Number} c The cost of the link ( the length )
  * @return {Boolean} true if link was made successfuly or already existed, false if a doesn't exist or b doesn't exist
  */
  link ( a, b, c ) {
    if ( !this.adjacency[a] || !this.adjacency[b] ) {
      return false;
    }
    else if ( !this.adjacency[a].includes( b ) ) {
      this.adjacency[a].push( b );
      if ( !this.costs[a] ) {
        this.costs[a] = [];
      }
      this.costs[a][b] = c;
    }
    return true;
  }
}

/*export {
  Graph
};*/

module.exports = {
  Graph: Graph
};
