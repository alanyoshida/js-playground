// original function
function filterBy( key, val, arr ) {
    return arr.filter( el => el[ key ] === val )
}

// original usage
filterBy( "category", "food", products )
filterBy( "weight", "1kg", products )

// left-most parameter is applied
const filterByCategory = leftApply( filterBy, "category" )
const filterByWeight = leftApply( filterBy, "weight" )

filterByCategory( "food", products )
filterByCategory( "electronics", products )
filterByWeight( "1kg", products )

// two parameters are applied
const filterFood = leftApply( filterBy, "category", "food" )

filterFood( products )

// applying the function against the same collection always
const filterProducts = rightApply( filterBy, products )

filterProducts( "category", "food" )
filterProducts( "weight", "1kg" )

// composing left and right apply
const filterProductsByCategory = leftApply( rightApply( filterBy, products ), "category" )

filterProductsByCategory( "food" )
filterProductsByCategory( "electronics" )
