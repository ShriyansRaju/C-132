Status=""

function preload(){
img=loadImage("dog_cat.jpg")
}



function setup(){
    canvas=createCanvas(640,420)
    canvas.center()
    objectDetector=ml5.objectDetector( 'cocossd', modelLoaded)
    document.getElementById("status").innerHTML="Status: Object Detecting"
}

function modelLoaded(){
    console.log("The model is loaded")
    Status=true;
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
    }
}

function draw(){
    image(img,0,0,640,420)
    fill("#ff0000")
    text("dog", 100,72)
    noFill()
    stroke("#ff0000")
    rect(95,60,210,350)

    fill("#ff0000")
    text("cat", 325, 90)
    noFill()
    stroke("#ff0000")
    rect(320,78, 250, 330)


}