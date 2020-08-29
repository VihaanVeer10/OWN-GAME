var bg;
var playimg,playsprite;
var runimg,runsprite;
var character1;
var character2;
var character3;
var character4;
var parimg,parsprite;
var raceimg,racesprite;
var jumpimg,jumpsprite;




function preload()
{
bg=loadImage("images/bg.jpg");
playimg=loadImage("images/play.jpg");
runimg=loadImage("images/run.jpg");
parimg=loadImage("images/parkour.PNG");
raceimg=loadImage("images/race.jpg");
jumpimg=loadImage("images/long jump.jpg");
character1=loadImage("images/sonic.jpg");
character2=loadImage("images/yoshi.jpg");
character3=loadImage("images/mario.jpg");
character4=loadImage("images/bowserjr.jpg");	
}

function setup() {
	createCanvas(400, 400);
	
	playsprite = createSprite(195, 350);
	playsprite.addImage( "label1",playimg);
	playsprite.scale=0.3;

    runsprite = createSprite(65, 120);
	runsprite.addImage("label2",runimg);
	runsprite.scale=0.2;
	runsprite.visible=true;

   parsprite = createSprite(330,80);
   parsprite.addImage("label3",parimg);
   parsprite.scale=0.8;
   parsprite.visible=true;
   
   racesprite = createSprite(45,280);
   racesprite.addImage("label4",raceimg);
   racesprite.scale=0.1;
   racesprite.visible=true;

   jumpsprite = createSprite(305,265);
   jumpsprite.addImage("label5",jumpimg);
   jumpsprite.scale=0.1;
   jumpsprite.visible=true;
	
	


	
  
}


function draw() {
  background(bg);

  
  drawSprites();
 
}


