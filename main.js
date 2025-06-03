fr = 60
function setup(){
    var cnv = createCanvas(1400, 850)
    frameRate(fr)
    background(0)

}

enemy = new orb(30, 30)
enemy.position(700, 425)
enemy_radius = 200
field_angle = 60

man = new orb(30, 30)
man.position(100, 100)
man.velocity = new vector(0, 0)


t = 0
function draw(){
    clear()
    background(0)
    translate(0, height)
    scale(1, -1)

    //#region randomly move earth

    if(t%(2*(60)) == 0){
        swap1 = 1
        swap2 = 1

        if (Math.random() < .5){
            swap1 = -1
        }
        if (Math.random() > .5){
            swap2 = -1
        }
        enemy.velocity = new vector(swap1*Math.random(), swap2*Math.random())

    }

    enemy.plot()
    enemy.showVelocity(90)
    enemy.move()

    push()
        noFill()
        stroke(255)
        ellipse(enemy.xpos, enemy.ypos, enemy_radius)
    pop()

    //#endregion

    check_vec = createVectorOfAngleAndMagnitude(angleBetweenOrbs(enemy, man), 20)
    check_vec.plot(enemy.xpos, enemy.ypos, [255, 0, 0], 2)

    dp = dotProduct(check_vec, enemy.velocity)
    theta = dacos(dp/(check_vec.getMagnitude()*enemy.velocity.getMagnitude()))
    console.log(theta)

    if(theta<field_angle && distanceBetweenTwoOrbs(man, enemy)<=enemy_radius){
        enemy.color = [0, 255, 0]
    }else{
        enemy.color = [255, 255, 255]
    }

    man.move()
    man.plot()

    t++

}

function keyPressed(){
    if(keyCode == 37){
        man.velocity.addComponents(-1, 0)
    }
    if(keyCode == 38){
        man.velocity.addComponents(0, 1)
    }
    if(keyCode == 39){
        man.velocity.addComponents(1, 0)
    }
    if(keyCode == 40){
        man.velocity.addComponents(0, -1)
    }
}