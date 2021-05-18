var fibo = 1;
var x1 = 1;
var x2 = 1;
var suma;
var i;
var j = 7;
for (i = 3; i <= j; i++) {
    suma = x1 + x2;
    x1 = x2;
    x2 = suma;
    console.log(suma);
    setTimeout(() => {
        console.log("Hello print");
    }, 10000);
}
//# sourceMappingURL=app.js.map