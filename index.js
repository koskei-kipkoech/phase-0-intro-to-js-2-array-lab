// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function appendCat(name){
    cats.shift();
}
function appendCat(name){
    let newCatArray = [...cats, name];
    return newCatArray;
}
function prependCat(name){
    let newCatArrayPrep = [name, ...cats];
    return newCatArrayPrep;
}
function removeFirstCat(){
    let newRemovedArray = cats.slice(1);
    return newRemovedArray;
}
function removeLastCat(){
    let newRemCatArray = cats.slice(0, cats.length -1);
    return newRemCatArray;
}