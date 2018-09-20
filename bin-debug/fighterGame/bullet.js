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
    var bullet = (function (_super) {
        __extends(bullet, _super);
        function bullet(texture, textureName) {
            var _this = _super.call(this, texture) || this;
            _this.textureName = textureName;
            return _this;
        }
        bullet.produce = function (textureName) {
            if (fighterGame.bullet.cacheDict[textureName] == null)
                fighterGame.bullet.cacheDict[textureName] = [];
            var dict = fighterGame.bullet.cacheDict[textureName];
            var theBullet;
            if (dict.length > 0) {
                theBullet = dict.pop();
            }
            else {
                theBullet = new fighterGame.bullet(RES.getRes(textureName), textureName);
            }
            return theBullet;
        };
        bullet.reclaim = function (theBullet) {
            var textureName = theBullet.textureName;
            if (fighterGame.bullet.cacheDict[textureName] == null)
                fighterGame.bullet.cacheDict[textureName] = [];
            var dict = fighterGame.bullet.cacheDict[textureName];
            if (dict.indexOf(theBullet) == -1)
                dict.push(theBullet);
        };
        bullet.cacheDict = {};
        return bullet;
    }(egret.Bitmap));
    fighterGame.bullet = bullet;
    __reflect(bullet.prototype, "fighterGame.bullet");
})(fighterGame || (fighterGame = {}));
//# sourceMappingURL=bullet.js.map