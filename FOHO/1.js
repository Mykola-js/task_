var arrays = [[1, 2, 3], [4, 5], [6]];

let array = arrays.reduce( ( prew ,next ) => {
    return prew.concat( next )
})
console.log( array )