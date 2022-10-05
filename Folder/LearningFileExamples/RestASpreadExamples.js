//Spread example
let topManga = [
    "Bleach",
    "OnePiece",
    "Dragonball",

];
function showBestManga(top1, top2, top3)
{
    console.log(top1);
    console.log(top2);
    console.log(top3);
}

showBestManga(topManga[0],topManga[1],topManga[2]);//normal way to display array without spread
showBestManga(...topManga)//how to do so with spread or the ... should otput the same thing.

//Rest Example
//creating subset from array
const topManga2 = [
    "Bleach",
    "OnePiece",
    "Dragonball",
    "One",
    "Dragon",
    "Piece",
    "ball",

];

const [] = topManga2;//first 3 items from topmanga2 will be cut out

const[first,second,third, ...secondtop] = topManga2 //splits up array in two

//first split array
for(prop of topManga2){
    console.log(prop);
}

//second split array
for(prop of secondtop){
    console.log(prop);
}









