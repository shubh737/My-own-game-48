var valtriake,valtriakeImg;
var akenies,akeniesImg;
var aiger,aigerImg,aigerLaunching,aigerOverPowered;
var vault,vaultImg,valtLaunchingImg,valtLaunching,valt;
var stadium,stadiumImg;
var launcher1;
var launcher2;
var refree,refreeImg;
var Play;
var Start;
var rand;
let angle = 0;

function preload(){
stadiumImg = loadImage("images/Stadium.png");
aigerImg = loadImage("images/Aiger.png");
refreeImg = loadImage("images/Refree.jfif");
vaultImg = loadImage("Vault.png");
aigerLaunching = loadImage("images/Aiger launching.jfif");
valtLaunchingImg = loadImage("images/Valt Launching.png");
akeniesImg = loadImage("images/Akenies.png");
babImg = loadImage("images/bab.png");
}

function setup(){
createCanvas(displayWidth-2,displayHeight-102);

var stadium = createSprite(displayWidth/2,displayHeight/2.6,1300,750);
stadium.addImage(stadiumImg);
stadium.scale = 0.9;

var aiger = createSprite(windowWidth-60,250,30,80);
aiger.addImage(aigerImg);
aiger.scale = 0.8;


var vault = createSprite(windowWidth/25,250,20,40)
vault.addImage(vaultImg);
vault.scale =1;

}

function draw(){
background("lightblue");

console.log(frameCount);

textSize(27);
fill(224, 35, 35);
text("YOUR",windowWidth-100,30);

textSize(27);
fill(224, 35, 35);
text("Computer",windowWidth-1532,30);

textSize(27);
fill(224, 35, 35);
text("Score-",windowWidth-100,60);

textSize(27);
fill(224, 35, 35);
text("Score-",windowWidth-1532,60);
var sp = Math.random(1,50)

if (frameCount>300 && frameCount<302){
var valtriake = createSprite(windowWidth/8,250,25,25)

imageMode(CENTER);
valtriake.addImage(babImg);
valtriake.scale = 0.2;
valtriake.rotationSpeed = 6000000000000000000000000;
valtriake.setSpeed = (random(12),random(360));
valtriake.rotation += valtriake.rotationSpeed ; 
valtriake.velocityX = 6;

var Akenies = createSprite(windowWidth-165,250,25,25)
Akenies.addImage(akeniesImg);
Akenies.scale = 0.2;
Akenies.rotationSpeed = 6000000000000000000000000;
Akenies.setSpeed = (random(12),random(360));

Akenies.rotation += Akenies.rotationSpeed ; 
Akenies.velocityX = -6;
//valtriake.bounceOff(akenies)

var Wall1 = createSprite(windowWidth-155,250,10,1000);
Wall1.visible = false;
var Wall2 = createSprite(windowWidth/2,windowHeight-14,1250,25);
Wall2.visible = false;
var Wall3 = createSprite(windowWidth/10,250,10,1000);
Wall3.visible = false;
var Wall4 = createSprite(windowWidth/2,windowHeight/55,1250,25);
Wall4.visible = false;


}

console.log(mouseX);
console.log(mouseX);



drawSprites();


if (frameCount>50 && frameCount<100){
    text("Ready",displayWidth/2,100,60);
    }        

    if (frameCount>100 && frameCount<150){
    text("Set",displayWidth/2,100,60);  
    }

    if (frameCount>150 && frameCount<200){
        text("3",displayWidth/2,100,60);  
        }

     if (frameCount>200 && frameCount<250){
     text("2",displayWidth/2,100,60);  
        }

       if (frameCount>250 && frameCount<300){
     text("1",displayWidth/2,100,60);  
     }
 
      if (frameCount>300 && frameCount<350){
     text("Shoot",displayWidth/2,100,60);  
     }
     //createEdgeSprite();
    }
