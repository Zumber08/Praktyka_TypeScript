var fibo: number;
var x1: number = 1;
var x2: number = 1;
var i: number;
var j: number;

function C_fibo(j: number) {
    if (j == 1) {
        console.log(x1)
    }
    if (j == 2) {
        console.log(x2)
    }
    for (i = 3; i <= j; i++) {
        fibo = x1 + x2;
        x1 = x2;
        x2 = fibo;
    }
    console.log(fibo);
}
C_fibo(1);
C_fibo(2);
C_fibo(10);
C_fibo(15);
C_fibo(20);

