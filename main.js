noseX="";
noseY="";
function preload() {
	world_start = loadSound("world_start.wav");
	marios_gameover=loadSound("gameover.wav");
	rest_in_peace_mario_RIP=loadSound("mariodie.wav");
	collect_A_coin=loadSound("coin.wav");
	mario_do_100_tut_jumps=loadSound("jump.wav");
	hayahhh_flying_kick_to_your_face=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(900,500);
	video.parent("gaming_consol");
	
	pose=ml5.poseNet(video,modelloaded);
	pose.on('pose',gotresults);
}
function modelloaded(){
	console.log("model is loaded");
}
function gotresults(results){
	if(results.length>0){
      console.log(results);
	  noseX=results[0].pose.nose.x;
	  noseY=results[0].pose.nose.y;
	}
}
function draw() {
	game()
}






