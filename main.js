noseX=0;
noseY=0;

function preload(){
    mus=loadImage('https://i.postimg.cc/8PSyXPHb/mus.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded() {
    console.log('PoseNet is Initialized');
  }
  
  function gotPoses(results){
      if(results.length > 0)
      {
          console.log(results);
          noseX=results[0].pose.nose.x-38;
          noseY=results[0].pose.nose.y-3;
          console.log("nose x =" + noseX);
          console.log("nose y =" + noseY);
      }
  }
  
    

function draw(){
    image(video, 0, 0, 300, 300);
    image(mus, noseX, noseY,80, 70);
}

function take_snapshot(){
    save('mustache.png');
}
