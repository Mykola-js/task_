function some( array , date ) {
    let someone;
      for( let i = 0,len = array.length; i < len; i++ ){
        if ( date( array[ i ] )  ) { someone = true }
    }

    return someone ? true : false
};

function every( array , date ) {
    for( let i = 0,len = array.length; i < len; i++ ){
        if ( !date( array[ i ] )  ) { return false}
    }
    return true
};
console.log(every.call(null, [ NaN,NaN,NaN ] , isNaN));
console.log(every.call(null, [ NaN,NaN,3 ] , isNaN));
console.log(some.call( null,[ NaN,NaN,3 ] , isNaN ) );
console.log(some.call( null,[ 1,2,3 ] , isNaN ) );