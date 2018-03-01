let obj = {here: {is: "an"}, object: 2};

function deepEqual ( obj1, obj2 ) {

    
    if(obj2.here && Object.keys(obj2.here).length ){
        deepEqual ( obj1.here, obj2.here )
        
    } else { return 'not' }
    return obj1.is === obj2.is
   
}

console.log(deepEqual(obj, {here:{is: 1} ,object: 2} ));