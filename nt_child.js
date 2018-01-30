var nthchild = function(expression, elements){
    var collection = expressionIndexCollection(expression, elements.length);
    console.log("Selected Indexes", collection);
    return elements.filter(function(element, index, array){
        return searchIndex(collection, index);
    });
}

var searchIndex = function(collection, index){
    return collection.filter( (el, i) => el === index ).length > 0;
}

var expressionIndexCollection = function(expression, length){
    var collection = new Array();
    for(var i=0;i<length;i++){
        collection.push(expression(i));
    }
    return collection;
}

var elements = [
    "Item 0",
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10"
];

exp1 = function(n){
    return 3*n+1;
}
exp2 = function(n){
    return n+n;
}
exp3 = function(n){
    return n*n;
}
exp4 = function(n){
    return n*n*n/n+1;
}

console.log(nthchild((n) => 3*n+1, elements));
console.log(nthchild((n) => n+n, elements));
console.log(nthchild(exp3, elements));
console.log(nthchild(exp4, elements));
