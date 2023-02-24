let dataBar = []

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    
    for(i=0;i<10;i++){
        dataBar[i] = random(1,200);
    }
}
   
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    //Line(x1,y1,x2,y2)
    
    background('black')
    stroke(255,255,255)
    strokeWeight(4);
    line(windowWidth/2, 0, windowWidth/2, windowHeight)
    line(0, windowHeight/2, windowWidth, windowHeight/2)

    stroke('green');
    fill('blue');
    var maxBar = max(dataBar);
    var w = (windowWidth/2) / dataBar.length;
    for (var i=0; i<dataBar.length;i++){
        var dat = map(dataBar[i], 0, maxBar, 0, windowHeight/2 )
        rect(i*w, windowHeight/2 - dat, w, dat)
    }
}