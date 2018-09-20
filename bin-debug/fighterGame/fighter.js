var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var fighterGame;
(function (fighterGame) {
    var fighter = (function (_super) {
        __extends(fighter, _super);
        function fighter(texture, fireDelay, textureName, bulletNumber) {
            var _this = _super.call(this) || this;
            _this.blood = 10;
            _this.shield = 0;
            _this.bulletNumber = 1;
            _this.boostedState = 1;
            _this.fireDelay = fireDelay;
            _this.bmp = new egret.Bitmap(texture);
            _this.textureName = textureName;
            _this.addChild(_this.bmp);
            _this.fireTimer = new egret.Timer(fireDelay);
            _this.fireTimer.addEventListener(egret.TimerEvent.TIMER, _this.createBullet, _this);
            _this.bulletNumber = bulletNumber;
            return _this;
        }
        fighter.produce = function (textureName, fireDelay, bulletNumber) {
            if (fighterGame.fighter.cacheDict[textureName] == null)
                fighterGame.fighter.cacheDict[textureName] = [];
            var dict = fighterGame.fighter.cacheDict[textureName];
            var theFighter;
            if (dict.length > 0) {
                theFighter = dict.pop();
            }
            else {
                theFighter = new fighterGame.fighter(RES.getRes(textureName), fireDelay, textureName, bulletNumber);
            }
            theFighter.blood = 10;
            theFighter.shield = 0;
            theFighter.bulletNumber = bulletNumber;
            return theFighter;
        };
        fighter.reclaim = function (theFighter) {
            var textureName = theFighter.textureName;
            if (fighterGame.fighter.cacheDict[textureName] == null)
                fighterGame.fighter.cacheDict[textureName] = [];
            var dict = fighterGame.fighter.cacheDict[textureName];
            if (dict.indexOf(theFighter) == -1)
                dict.push(theFighter);
        };
        fighter.prototype.startFire = function () {
            this.fireTimer.start();
        };
        fighter.prototype.stopFire = function () {
            this.fireTimer.stop();
        };
        fighter.prototype.createBullet = function (evt) {
            this.dispatchEventWith("createBullet");
        };
        fighter.cacheDict = {};
        return fighter;
    }(egret.DisplayObjectContainer));
    fighterGame.fighter = fighter;
    __reflect(fighter.prototype, "fighterGame.fighter");
})(fighterGame || (fighterGame = {}));
//# sourceMappingURL=fighter.js.map