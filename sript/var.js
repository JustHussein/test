function getAreaFunctions() {
    var arr = Array.prototype.slice.call(arguments,1);
    console.log(arr);
    
    arr.forEach(element => {
        console.log[element];
    });
}

getAreaFunctions(['square', 'circle', 'rectangle', 'triangle']);
let arr = ['square', 'circle', 'rectangle', 'triangle'];
console.log(arr);