
var total = 16; //number of cards
var speed = 150;
var returnSec = 1000;
var cat = [];
var index;
var first = true;
var card1;
var card2;
var pair = 0;


//cardClose
function cardClose(i,n){
$("#card li:eq("+i+")").stop().animate({ left: "75"}, speed);
$("#card li:eq("+i+") img").stop().animate({ width: "0",height: "80px"}, speed,
function(){
n(i);
});
}
//omoteOpen
function omoteOpen(){
$("#card li:eq("+index+") img").attr("src","img/card"+cat[index]+".png");
$("#card li:eq("+index+") img").stop().animate({ width: "80px",height: "80px"}, speed);
$("#card li:eq("+index+")").stop().animate({ left: "0"}, speed);
}
//uraOpen
function uraOpen(j){
$("#card li:eq("+j+") img").attr("src","img/card.png");
$("#card li:eq("+j+") img").stop().animate({ width: "80px",height: "80px"}, speed);
$("#card li:eq("+j+")").stop().animate({ left: "0"}, speed);
}

//cardlock
function cardlock(){
$("#card li:eq("+index+")").addClass("lock");
}
//alllock
function alllock(){
$("#card li").addClass("lock");
}
//unlock
function unlock(){
$("#card li").removeClass("lock");
}

//comparison
function comparison() {
if(card1==card2){
$("#card li:eq("+index+")").addClass("off");
$("#card li:eq("+index1+")").addClass("off");
pair++;
if(pair==total/2){
setTimeout(function(){
alert("cleared !")
}, returnSec);
}
} else {
setTimeout(function(){
cardClose(index,uraOpen);
cardClose(index1,uraOpen);
}, returnSec);
}
first = true;
card2 = 0;
setTimeout(function(){
unlock(); //unlock
}, returnSec+speed*2);
}


$(function(){
//array
for(i=1; i<=total/2; i++) {
cat.push(i,i);
}
//random
cat.sort(function() {
return Math.random() - Math.random();
});
//li tag
for(i=1; i<=total; i++) {
$("#card").append("<li><img src='img/card.png'></li>");
}

$("#card li").click(function(){
index = $("#card li").index(this);
cardlock();
cardClose(index,omoteOpen);

if(first == true){
index1 = index;
card1= cat[index];
first = false;

} else {
alllock();
card2 = cat[index];
comparison();
}
});

});
