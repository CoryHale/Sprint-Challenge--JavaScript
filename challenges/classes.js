// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(dimensions) {
        this.length = dimensions.length;
        this.width = dimensions.width;
        this.height = dimensions.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5,
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(props) {
        super(props);
    }

    // Formula: V = s^3                 V = Volume, s = side
    cubeVolume() {
        return Math.pow(this.length, 3);
    }

    // Formula: A = 6s^2               A = Area, s = side
    cubeSurfaceArea() {
        return 6 * (Math.pow(this.length, 2));
    }
}

const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4,
})

// Test Cube Volume and Cube Surface Area:
console.log(cube.cubeVolume()); // 64
console.log(cube.cubeSurfaceArea()); // 96