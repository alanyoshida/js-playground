// Where the magic happens
function partialApplication( f, a ) {
    return function( b ) {
        return f( a, b )
    }
}

function greet( title, name ) {
    return "Greetings " + title + " " + name
}

// Here you pass the function to be executed, and the first parameter
var greetSer = partialApplication( greet, "Ser" )

// Here you pass the second parameter
var character1 = greetSer( "Barristan" ) // Greetings Ser Barristan
console.info(character1);

var character2 = greetSer( "Davos" ) // Greetings Ser Davos
console.info(character2);


// Other ways, using fixed parameters as left or right

function leftApply( f, a ) {
    return function( b ) {
        return f( a, b )
    }
}

function rightApply( f, b ) {
    return function( a ) {
        return f( a, b )
    }
}
