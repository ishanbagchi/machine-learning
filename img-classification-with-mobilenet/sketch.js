let mobilenet;

let puffin;

function modelReady() {
    console.log('Model is ready!');
    mobilenet.predict(puffin, gotResults);
}

function gotResults(err, result) {
    if(err) {
        console.log(err);
    } else {
        console.log(result);
    }
}

function imageReady() {
    image(puffin, 0, 0, width, height);
}

function setup() {
    createCanvas(640, 480);
    puffin = createImg('images/puffin.jpg', imageReady);
    puffin.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

