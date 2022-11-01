function receivesAFunction(anotherFunction){
    anotherFunction();
}

function returnsANamedFunction() {
    return receivesAFunction

}

function returnsAnAnonymousFunction(){
    return (function(){})
}
    

    

