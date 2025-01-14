const circle = document.getElementById("circle");
const line = document.getElementById("line");
line.style.top = "630px";
line.style.left = "668px";
window.addEventListener("keydown", (event) => {
    if(event.key=="ArrowLeft"){
        if(Number(line.style.left.slice(0, -2)) >= 30){
            line.style.left = String(Number(line.style.left.slice(0, -2)) - 30) + "px";
        }
        else{
            line.style.left = "0px";
        }
    }
    else if(event.key=="ArrowRight"){
        if(Number(line.style.left.slice(0, -2)) <= 1306){
            line.style.left = String(Number(line.style.left.slice(0, -2)) + 30) + "px";
        }
        else{
            line.style.left = "1336px";
        }
    }
});
// //695 and 1536 - dimensions of screen
let x = 3;
let y = 2;
circle.style.left = "753px";
circle.style.top = "50px";
let j;
let k = 0;
setTimeout(move, 10);
function move(){
    j = 0;
    while(j==0){
        j = 1;
        if(Number(circle.style.top.slice(0, -2))>=665){
            k = 1;
        }
        else if((Number(circle.style.left.slice(0, -2))>1503)&&(x==3)){
            circle.style.left = String(1506 - (3 - (1506 - Number(circle.style.left.slice(0, -2))))) + "px";
            circle.style.top = String(Number(circle.style.top.slice(0, -2)) + y) + "px";
            x = -3;
            j = 0;
        }
        else if((Number(circle.style.left.slice(0, -2))<3)&&(x==-3)){
            circle.style.left = String(3 - Number(circle.style.left.slice(0, -2))) + "px";
            circle.style.top = String(Number(circle.style.top.slice(0, -2)) + y) + "px";
            x = 3;
            j = 0;
        }
        else if((Number(circle.style.top.slice(0, -2))<2)&&(y==-2)){
            circle.style.top = String(2 - Number(circle.style.top.slice(0, -2))) + "px";
            circle.style.left = String(Number(circle.style.left.slice(0, -2)) + x) + "px";
            y = 2;
            j = 0;
        }
        else if((Number(circle.style.top.slice(0, -2))>628)&&(Number(circle.style.top.slice(0, -2))<=630)&&(Number(circle.style.left.slice(0, -2))>Number(line.style.left.slice(0, -2))-15)&&(Number(circle.style.left.slice(0, -2))<Number(line.style.left.slice(0, -2))+185)){
            circle.style.top = String(628 - (2 - (628 - Number(circle.style.top.slice(0, -2))))) + "px";
            circle.style.left = String(Number(circle.style.left.slice(0, -2)) + x) + "px";
            y = -2;
            j = 0;
        }
    }
    if(k==0){
        circle.style.left = String(Number(circle.style.left.slice(0, -2)) + x) + "px";
        circle.style.top = String(Number(circle.style.top.slice(0, -2)) + y) + "px";
        setTimeout(move, 10);
    }
}