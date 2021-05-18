var delta: number;
const abc: Array<number> = [1,2,3,2,4,6]

delta = (abc[1] * abc[1]) - 4 * abc[0] * abc[2];
console.log("\nDelta[1,2,3]:" + delta + "\n");
delta = (abc[4] * abc[4]) - 4 * abc[3] * abc[5];
console.log("\nDelta[2,4,6]:" + delta + "\n");
setTimeout(() => { console.log(); }, 10000);