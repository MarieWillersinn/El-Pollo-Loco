class backgroundObject extends MovableObject {

    width = 730;
    height = 720;

    constructor(imagePath, x, ) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}