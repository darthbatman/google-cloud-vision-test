'use strict'
const vision = require('node-cloud-vision-api')

// init with auth
vision.init({auth: 'AIzaSyAP_8CCmksJXC2H8hUnxG8xApllsMRtr08'})

// construct parameters
const req = new vision.Request({
  image: new vision.Image('hackrudeviceprivacy.jpg'),
  features: [
    new vision.Feature('FACE_DETECTION', 4),
    new vision.Feature('LABEL_DETECTION', 10),
  ]
})

// send single request
vision.annotate(req).then((res) => {
  // handling response
  console.log(JSON.stringify(res.responses))
}, (e) => {
  console.log('Error: ', e)
})