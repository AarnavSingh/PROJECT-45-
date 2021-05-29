var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;
var wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40;
var wall41,wall42,wall43;
var Ghost1Img,Ghost2Img,Ghost3Img,PacmanImg; 
var Ghost1,Ghost2,Ghost3,Pacman 


function preload(){
  Ghost1Img=loadImage("Images/Ghost1.png")
  Ghost2Img=loadImage("Images/Ghost2.png")
  Ghost3Img=loadImage("Images/Ghost3.png")
  PacmanImg=loadImage("Images/Pacman.png ")
}



function setup() {
  createCanvas(500,600);

  wall1=createSprite(40,90,8,150)
  wall2=createSprite(247,20,420,10)
  wall3=createSprite(453,90,8,150)
  wall4=createSprite(246,60,8,75)
  wall5=createSprite(86,170,100,10)
  wall6=createSprite(131,215,10,80)
  wall7=createSprite(86,260,100,10)
  wall8=createSprite(407,170,100,10)
  wall9=createSprite(357,210,10,90)
  wall10=createSprite(402,260,100,10)
  wall11=createSprite(86,303,100,10)
  wall12=createSprite(134,343,10,90)
  wall13=createSprite(86.5,388,105,10)
  wall14=createSprite(38,468,8,170)
  wall15=createSprite(241.5,555,415,10)
  wall16=createSprite(450,479,8,163)
  wall17=createSprite(401.5,397,105,10)
  wall18=createSprite(350,357,10,90)
  wall19=createSprite(400,314,110,10)
  wall20=createSprite(164,201,8,130)
  wall21=createSprite(190,200,50,10)
  wall22=createSprite(323,201,8,130)
  wall23=createSprite(297,201,50,10)
  wall24=createSprite(244,183,8,45)
  wall25=createSprite(320,355,10,95)
  wall26=createSprite(164,348,10,95)
  wall27=createSprite(128,426,45,8)
  wall28=createSprite(147,445.5,8,45)
  wall29=createSprite(57,472,45,8)
  wall30=createSprite(75.8 ,483,8,25)
  wall31=createSprite(57,495,45,8)
  wall32=createSprite(190,491,8,50)
  wall33=createSprite(160,520,110,10)
  wall34=createSprite(198,425,35,8)
  wall35=createSprite(301,425,35,8)
  wall36=createSprite(387,425,45,8)
  wall37=createSprite(366.5,444,8,45)
  wall38=createSprite(425,480,45,8)
  wall39=createSprite(406 ,489,8,25)
  wall40=createSprite(426,498,45,8)
  wall41=createSprite(330,491,8,50)
  wall42=createSprite(345,520,110,10)
  wall43=createSprite(254,502,8,45)
  Ghost1=createSprite(183,315,20,20)
  Ghost1.addImage(Ghost1Img);
  Ghost2=createSprite(215,315,20,20)
  Ghost2.addImage(Ghost2Img);
  Ghost3=createSprite(247,315,20,20)
  Ghost3.addImage(Ghost3Img);
  Pacman=createSprite(410,58,20,20)
  Pacman.addImage(PacmanImg);
}

function draw() {
  background("black");  
  drawSprites();
   text(mouseX + " " + mouseY,233,347);

}