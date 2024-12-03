let fruits = [];

function setup() {

    //Setup
    noCanvas();

    //Initialization
    world = new AFrameP5.World('VRScene');

    world.setFlying(false);
    world.setWASDAcceleration(40);
    world.setBackground(173, 216, 230);

    //Ground
    let ground = new AFrameP5.Plane({
        x: 0, y: -2, z:0,
        scaleX: 1000,scaleY: 1000,
        repeatX: 150, repeatY: 150,
        rotationX: -90,
        red:150, green: 150, blue:150
    });
    world.add(ground);
}