cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-ionic-keyboard.keyboard",
    "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
    "pluginId": "cordova-plugin-ionic-keyboard",
    "clobbers": [
      "window.Keyboard"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-promise-polyfill.Promise",
    "file": "plugins/cordova-promise-polyfill/www/Promise.js",
    "pluginId": "cordova-promise-polyfill",
    "runs": true
  },
  {
    "id": "cordova-promise-polyfill.promise.min",
    "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
    "pluginId": "cordova-promise-polyfill"
  },
  {
    "id": "cordova-plugin-admob-free.AdMob",
    "file": "plugins/cordova-plugin-admob-free/www/admob.js",
    "pluginId": "cordova-plugin-admob-free",
    "clobbers": [
      "admob",
      "AdMob",
      "plugins.AdMob"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-ionic-keyboard": "2.0.5",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-promise-polyfill": "0.0.2",
  "cordova-admob-sdk": "0.15.1",
  "cordova-plugin-admob-free": "0.15.0"
};
// BOTTOM OF METADATA
});