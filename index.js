const vision = require('node-cloud-vision-api');

vision.init({auth: require('./config.js').key });

const req = new vision.Request({
  image: new vision.Image('hackrudeviceprivacy.jpg'),
  features: [
    new vision.Feature('FACE_DETECTION', 4),
    new vision.Feature('LABEL_DETECTION', 10),
  ]
});

vision.annotate(req).then((res) => {
  console.log(JSON.stringify(res.responses))
}, (e) => {
  console.log('Error: ', e)
});