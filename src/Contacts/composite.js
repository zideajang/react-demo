function f(param1){
    return function(param2){
        //do some thing
        console.log(`${param1} - ${param2}`)
    }
}

var foo = f('foo')('bar')

