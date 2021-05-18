var silnia: number = 1;
var x1:number;
var i: number = 1;
var j: number;

function f_silnia(x1: number) {
    while (i <= x1) {
        silnia = silnia * i;
        i++;
    }
    console.log(silnia);
}
f_silnia(0);
f_silnia(1);
f_silnia(2);
f_silnia(10);
f_silnia(15);
f_silnia(20);

