
function setup() {

    noCanvas();

    world = new AFrameP5.World('VRScene');

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
    world.setFlying(false);

    for (let i = 0; i < 4; i++) {
        let xPos; 
        let zPos; 
        let angle;

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

        let wall = new AFrameP5.Plane({
            x:xPos, y: 1, z: zPos,
            scaleX: 100, scaleY: 50,
            asset: 'wall',
            repeatX: 3,
            repeatY: 3,
            side: "double",
            rotationY: angle
        })
    
        world.add(wall);
    }

    let ceiling = new AFrameP5.Plane({
        x:0, y: 25, z: 0,
        scaleX: 100, scaleY: 100,
        asset: 'ceiling',
        repeatX: 10,
        repeatY: 10,
        side: "double",
        rotationX: -90
    })

    world.add(ceiling);

}

function draw() {

}