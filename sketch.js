
let Fruits = [];

function setup() {

    //creating the dojo environment
    noCanvas();

    //getting ref to VR scene
    world = new AFrameP5.World('VRScene');

    //making the ground
    let ground = new AFrameP5.Plane({
        x: 0, y: -2, z:0,
        scaleX: 1000,
        scaleY: 1000,
        asset: 'floorMat',
        repeatX: 150,
        repeatY: 150,
        rotationX: -90
    });
    world.add(ground);

    //no flying
    world.setFlying(false);

    //making the dojo walls
    for (let i = 0; i < 4; i++) {
        let xPos; 
        let zPos; 
        let angle;

        //assign world vals depending on i
        switch(i) {
            case 0:
                xPos = 0;
                zPos = 50;
                angle = 0;
            break;

            case 1:
                xPos = 0;
                zPos = -50;
                angle = 0;
            break;

            case 2:
                xPos = 50;
                zPos = 0;
                angle = 90;
            break;

            case 3:
                xPos = -50;
                zPos = 0;
                angle = -90;
            break;
        }

        //create wall instances
        let wall = new AFrameP5.Plane({
            x:xPos, y: 1, z: zPos - 30,
            scaleX: 100, scaleY: 50,
            asset: 'wall',
            repeatX: 3,
            repeatY: 3,
            side: "double",
            rotationY: angle
        })
    
        world.add(wall);
    }

    //making dojo ceiling
    let ceiling = new AFrameP5.Plane({
        x:0, y: 25, z: -30,
        scaleX: 100, scaleY: 100,
        asset: 'ceiling',
        repeatX: 10,
        repeatY: 10,
        side: "double",
        rotationX: -90
    })
    world.add(ceiling);

    //making tutorial table
    let table = new AFrameP5.Box({
        x: 0, y:-1.5, z: -3,
        scaleX: 10,
        scaleY: 1,
        scaleZ: 2,
        red: 150,
        green: 75,
        blue: 0
    });
    world.add(table);

    //placeholder fruits
    for (let i = 0; i < 5; i++) {
        let fruit = new Item("fruit", -4 + i*2, -0.5, -3);
        Fruits.push(fruit);
    }

    //placeholder gong
    let gong = new AFrameP5.Box({
        x: 0, y: -0.5, z: -15,
        scaleX: 3,
        scaleY: 3,
        scaleZ: 1
    })
    world.add(gong);

}

function draw() {
    //iterate over each instance of fruit
    for(let f of Fruits) {
        

    }

}

//class for all fruit/bomb items
class Item {
    constructor(type, x, y, z) {
        //construct a sphere for collision detection
        this.obj = new AFrameP5.Sphere({
            x: x, y: y, z: z,
            scaleX: random(0.3, 0.8), scaleY: random(0.3, 0.8), scaleZ: random(0.3, 0.8),
            red: random(0, 150),
            green: random(0, 256),
            blue: random(0, 100)
        });

        //determine if its fruit or bomb
        this.type = type;

        if (this.type === "fruit") {
            //random assign one of the fruit assets
        } else {
            //assign bomb asset
        }

        world.add(this.obj);
    }

    move() {
        //fruit moving behavior

    }

    collision() {
        //detecting if instance is interacting with player

    }

    slice() {
        //slicing logic + effects
        //different effect depending on this.type

    }

    destroy() {
        //garbage collection

    }
}