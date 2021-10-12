var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg
var fairy, fairyImg;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	fairyImg = loadImage("images/fairy.png")
}

function setup() {
	createCanvas(800, 750);

	

	//crea el sprite del hada, y agrega la animación para el hada


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(120,450,50,50)
	fairy.addImage(fairyImg)
	fairy.scale = 0.3

	


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(keyCode === RIGHT_ARROW){
	fairy.x = fairy.x + 3;
 }
 
 if(keyCode === LEFT_ARROW){
	fairy.x = fairy.x - 3;
	fairy.voice = loadSound("sound/JoyMusic.mp3")
 }

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
if (star.y > 370 && starBody.position.y > 370){
	Matter.Body.setStatic(starBody,true); 
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	
}
