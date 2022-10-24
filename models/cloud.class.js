class Cloud extends MovableObject {

    y = -60;
    width = 400;
    height = 1200;

    constructor() {

        super().loadImage('img/5_background/layers/4_clouds/2.png');

        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.x -= 0.15;
        }, 1000 / 60);
    }
}