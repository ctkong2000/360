var APP_DATA = {
  "scenes": [
    {
      "id": "0-v1",
      "name": "V1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9730428133475773,
          "pitch": 0.3581633233125423,
          "rotation": 0,
          "target": "1-consultation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-consultation",
      "name": "Consultation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.762399700109686,
          "pitch": 0.3966371392869341,
          "rotation": 4.71238898038469,
          "target": "0-v1"
        },
        {
          "yaw": 0.8967427594484967,
          "pitch": 0.3843888660302781,
          "rotation": 1.5707963267948966,
          "target": "2-screen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-screen",
      "name": "SCREEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9995991986354547,
          "pitch": 0.3986612969286103,
          "rotation": 4.71238898038469,
          "target": "1-consultation"
        },
        {
          "yaw": 2.698027613421136,
          "pitch": 0.3957328346681557,
          "rotation": 1.5707963267948966,
          "target": "0-v1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
