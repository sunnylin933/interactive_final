
function setup() {

    noCanvas();

    world = new AFrameP5.World('VRScene');

    let ground = new AFrameP5.Plane({
        x: 0, y: -2, z:0,
        scaleX: 1000,
        scaleY: 1000,
        asset: 'floorMat',
        repeatX: 100,
        repeatY: 100,
        rotationX: -90
    });

    world.add(ground);
    world.setFlying(false);

}

function draw() {

}