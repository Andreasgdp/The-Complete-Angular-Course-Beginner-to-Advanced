"use strict";
exports.__esModule = true;
var main_1 = require("./main");
var user = new main_1.Facebook();
console.log(user.numClicks);
console.log(user.isClicked);
user.displayLikes();
