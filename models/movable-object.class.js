class MovableObject {
    x = 120;
    y = 180;
    img;
    height = 160;
    width = 230;
    imageCache = [];


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {

        arr.forEach(path => {

            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log('Movin right')
    }

    moveLeft() {

    }
}