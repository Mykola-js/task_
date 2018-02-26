let obj = {here: {is: "an"}, object: 2};

function deepEqual ( obj1, obj2 ) {
 
     
    for( let order in obj ) {
        return order
    }
}
// console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2} ));