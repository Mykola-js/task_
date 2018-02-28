

function arrayToList( array ){
    let result = {};
   
    step(0, result);
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

function nth( list, pocition ) {
    let counter = 0,
        num = pocition,
        result;
             searchPocition(list, num );

    return result
        function searchPocition(array, num ){

            if (  array.rest === null || num <= counter ) {
                result = array.rest === null ? 'The end' :  array.value;
                return 
            } else {
                ++counter
                searchPocition(array.rest, num ) 
             }
        }
}

console.log( nth(arrayToList([10, 20, 30,3,44,55,66,77,2]), 20) );