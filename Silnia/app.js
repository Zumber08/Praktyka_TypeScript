var silnia = 1;
var x1 = [0, 1, 2, 10, 15, 20];
var i = 1;
var j;
for (j = 0; x1.length; j++) {
    while (i <= x1[j]) {
        silnia = silnia * i;
        i++;
    }
    console.log(silnia);
}
//# sourceMappingURL=app.js.map