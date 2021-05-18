var fibo: number = 1;
var x1: number = 1;
var x2: number = 1;
var suma: number;
var i: number;
var j: number = 7;
for (i = 3; i <= j; i++)
{
    suma = x1 + x2;
    x1 = x2;
    x2 = suma
    console.log(suma);
    setTimeout(() => {
        console.log("Hello print");
    }, 10000);
}

