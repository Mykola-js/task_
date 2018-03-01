function prepend ( value, obj ){
   let result = {};
        result.value = value;
        result.rest = obj
        return result
}
console.log(prepend( 10, prepend( 10, null)))