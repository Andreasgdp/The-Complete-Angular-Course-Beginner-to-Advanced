"use strict";
exports.__esModule = true;
var Facebook = /** @class */ (function () {
    function Facebook(_numClicks, _isClicked) {
        this._numClicks = _numClicks;
        this._isClicked = _isClicked;
        this._numClicks = 0;
        this._isClicked = false;
    }
    Object.defineProperty(Facebook.prototype, "numClicks", {
        get: function () {
            return this._numClicks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Facebook.prototype, "isClicked", {
        get: function () {
            return this._isClicked;
        },
        set: function (state) {
            this._isClicked = state;
        },
        enumerable: true,
        configurable: true
    });
    Facebook.prototype.displayLikes = function () {
        var clickedMessage = "Like is clicked";
        if (!this._isClicked) {
            clickedMessage = "Like is not clicked";
        }
        console.log("Likes: " + this._numClicks + " \n" + clickedMessage);
    };
    return Facebook;
}());
exports.Facebook = Facebook;
