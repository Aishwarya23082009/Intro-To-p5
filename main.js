function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,270);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color = "";
}

function draw(){
    image(video, 0,0,640,480);
    tint(tint_color);
}

function take_snapshot(){
    save("Student_name.jpeg")
}

function filter_tint(){
    tint_color = document.getElementById("text_input1").value;
}