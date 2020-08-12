var panel = [];
var starX = 300;
var starY = 300;
var clear = 0;

//clear
function gameClear(){
 for(i=0; i<15; i++) {
 var x = parseInt($('#'+i).css('left'))/100;
 var y = parseInt($('#'+i).css('top'))/100;
 var clearX = i%4;
 var clearY = Math.floor(i/4)
 if((clearX == x)&&(clearY == y)) {
 clear ++;
 }
 }
 if(15 <= clear) {
 alert("cleared !");
 } else {
 clear = 0;
 }
}

$(function(){
  for(i=0; i<15; i++) {
 panel.push(i)
 };
 panel.sort(function() {
 return Math.random() - Math.random();
 })
 panel.push(15);

 for(i=0; i<15; i++) {
 $("#puzzle").append("<li id='"+panel[i]+"'><img src='img/"+panel[i]+".png'></li>");
 var x = i%4*100; //left
 var y = Math.floor(i/4)*100; //top
 $("#"+panel[i]).css({'left':x, 'top':y});
 }
 $("#puzzle").append("<li id='15'><img src='img/15.png'></li>");
 $("#15").css({'left':starX, 'top':starY});

 //click
 $('#puzzle li').on('click', function() {
 var idX = parseInt($(this).css('left'));
 var idY = parseInt($(this).css('top'));
 if( ((idX==starX)&&((idY==starY-100)||(idY==starY+100))) || ((idY==starY)&&((idX==starX-100)||(idX==starX+100))) ) {
 $(this).css({'left':starX, 'top':starY});
 $("#15").css({'left':idX, 'top':idY});
 starX = idX;
 starY = idY;
 }
 gameClear(); 
 });
});
