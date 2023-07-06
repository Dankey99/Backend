const colors = require("colors");
const { count } = require("console");
console.log("Hello".yellow);
console.log("Hello".bgMagenta);
console.log("Hello".green.bgWhite);

let i=0;
while(i<=100){
    console.log(colors.random (i.toString()))
    i++
}


for (let c=0;c<101;c++) {
    if (c % 3 == 0) console.log(colors.red("fizz"));
    if (c % 5 == 0) console.log(colors.green("buzz"));
    if (c % 7 == 0) console.log(colors.blue("zing"));
else console.log(colors.yellow(c));

}
let rps=["rock","paper","scissors"]
let rps2=["Rock","Paper","Scissors"]
console.log(rps)

if (rps[0]=rps2[0]){
    return "draw";}
if (rps[0]=rps2[1]){
    return "loss";}
if (rps[0]=rps2[2]){
    return "win";}
if (rps[1]=rps2[0]){
    return "win";}
if (rps[1]=rps2[1]){
    return "draw";}
if (rps[1]=rps2[2]){
    return "loss";}
if (rps[2]=rps2[0]){
    return "loss";}
if (rps[2]=rps2[1]){
    return "win";}
if (rps[2]=rps2[2]){
    return "draw";}
    console.log(math.random()*3);