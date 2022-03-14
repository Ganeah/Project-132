fruit_bowl = "";
status = "";

function preload(){
    fruit_bowl = loadImage('Fruit_bowl.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Detecting objects...";   
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(fruit_bowl,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(fruit_bowl,0,0,640,420);
    fill("#FF0000");
    text("Apple",75,170);
    noFill();
    stroke("#FF0000");
    rect(100,100,400,250);
}