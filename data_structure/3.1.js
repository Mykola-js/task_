
// function range ( arg1, arg2, arg3 ){

//    return  arg1.filter( (value) =>{
//         return value >= arg2 && value <= arg3
//     } )  
// }
// console.log( range( [2,3,4,5,6,7,8,9,10,1], 3 ,8 ) ) 

// obj to array
function before ( data ) {
    let array = [ ];
    piker( data );
    
    return array
        function piker (data){
            if ( !data.rest ) { return  array }
                array.push( data.value );

                piker ( data.rest )
        }
}



console.log(before(arrayToList([2,3,4,5,6,7,8,9,10,1]) ) );

// array to obj 
function arrayToList( array ){
    let result = {};

    step(0, result);
    console.log( result )
    return result
    
    function step(i, currObj){

        currObj.value = array[i];

        if (i >= array.length-1) {
            currObj.rest = null;

            return
        }

        const newObj = {
            value: null,
            rest: null
        };

        currObj.rest = newObj;

        return step(++i, newObj)
    }
}