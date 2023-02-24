function setup() {
    createCanvas(380,300)
    background(102,102,255)

    x1 = 190
    y1 = 1

    x2 = 190
    y2 = 900

    y = 10
    x = 10
    z = 10
    j = 10
    i = 10
    k = 10

    d1 = 79
    d2 = 60
    d3 = 40
    d4 = 160

    e1 = 98
    e2 = 90
    e3 = 25
    e4 = 43

    f1 = 98
    f2 = 140
    f3 = 25
    f4 = 43

    g1 = 98
    g2 = 190
    g3 = 25
    g4 = 43

}

function draw() {
    
    var y = 150 + 90 * Math.sin(PI/80*j)
    j+=10
    var x = 150 + 90 * Math.sin(PI/500*i)
    i+=40
    var z = 150 + 90 * Math.sin(PI/100*k)
    k+=10
    line(x1,y1,x2,y2)
    strokeWeight(5)
    fill(0,0,0)

    rect(d1,d2,d3,d4)
    fill(y,0,0)
    ellipse(e1,e2,e3,e4)
    fill(x,x,0)
    ellipse(f1,f2,f3,f4)
    fill(0,z,0)
    ellipse(g1,g2,g3,g4)

    // GAMBAR GERAK
    
    c = 180
    line(x1,y1,x2,y2)
    strokeWeight(5)
    fill(0,0,0)

    rect(d1+c,d2,d3,d4)
    fill(250,0,0)
    ellipse(e1+c,e2,e3,e4)
    fill(250,250,0)
    ellipse(f1+c,f2,f3,f4)
    fill(0,250,0)
    ellipse(g1+c,g2,g3,g4)
}