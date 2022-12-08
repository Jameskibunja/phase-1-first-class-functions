function receivesAFunction (callBackFunction){
  return callBackFunction();
}
function returnsANamedFunction () {
   return function receivesAFunction(namedFunction){
    console.log(namedFunction);
   }
}
 function returnsAnAnonymousFunction () {
    return function(namedFunction){
        console.log(namedFunction);
    }
 }