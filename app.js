// MODIFY BELOW LINES ONLY //

let canvas_width = 16; // WIDTH OF CANVAS BEING DRAWN ON
let canvas_height = 20; // HEIGHT OF CANVAS BEING DRAWN ON
let rows = 1; // GRID ROWS
let cols = 1; // GRID COLUMNS
let img = "longinusfixed.jpg";

// ----------------------- //

snap_mode = false;
rotate = 1;

let closest = new orb(10, 10);

canvas_dx = canvas_width/rows;
canvas_dy = canvas_height/cols;

let grid = zeros2D(cols, rows);

function preload(){
    img = loadImage(img);
}

function setup(){
    background(0);
    translate(0, height);
    scale(1, -1);
    
    var cnv = createCanvas(img.width, img.height);
    image(img, 0, 0);

    console.log(`Image Width: ${img.width}\n`);
    console.log(`Image Height: ${img.height}\n`);
    console.log(`dx: ${canvas_dx}\n`);
    console.log(`dy: ${canvas_dy}\n`);

    dx = img.width/rows;
    dy = img.height/cols;
    for(i=0; i<cols; i++){
        for(j=0; j<rows; j++){
            grid_point = new orb(10, 10);
            grid_point.position(dx*j, dy*i);
            grid_point.plot();
            grid[i][j] = grid_point;

        }
    }

    for(i=0; i<cols; i++){
        stroke(0, 255, 0);
        strokeWeight(1);
        line(grid[i][0].xpos, grid[i][0].ypos, grid[i][rows-1].xpos+dx, grid[i][rows-1].ypos);

    }
    for(i=0; i<rows; i++){
        stroke(0, 255, 0);
        strokeWeight(1);
        line(grid[0][i].xpos, grid[0][i].ypos, grid[cols-1][i].xpos, grid[cols-1][i].ypos+dy);  

    }

}

function draw(){
    translate(0, height);
    scale(1, -1);

}

function mouseClicked(){
    push();
    
    stroke(255)

    selected = new orb(10, 10);
    selected.position(mouseX, height-mouseY);

    closest_old = closest
    closest = findClosestTo(selected);
    closest.radius = 20;

    if(closest_old===closest){
        closest.color = color
        selected.color = color

    }else{
        color = [150, 255, 150]
        closest.color = color
        selected.color = color
    }
    
    closest.plot();
    selected.plot();

    x_dist = Math.abs(closest.xpos - selected.xpos);
    y_dist = Math.abs(closest.ypos - selected.ypos);

    console.log(x_dist/dx*canvas_dx)
    console.log(y_dist/dy*canvas_dy)
    console.log("--------------")

    pop();

}

function findClosestTo(oorb){
    closest_dist = 10000000;
    closest_orb = new orb(10, 10);
    for(i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            curr = grid[i][j];
            dist = distanceBetweenTwoOrbs(oorb, curr);
            if(dist<closest_dist){
                closest_dist = dist;
                closest_orb = curr;
            }
        }
    }
    closest_orb.color = [0, 255, 0]
    return closest_orb;

}