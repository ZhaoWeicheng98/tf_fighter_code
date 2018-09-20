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
    var specialItem = (function (_super) {
        __extends(specialItem, _super);
        function specialItem(texture, textureName) {
            var _this = _super.call(this, texture) || this;
            _this.textureName = textureName;
            return _this;
        }
        specialItem.produce = function (textureName) {
            if (fighterGame.specialItem.cacheDict[textureName] == null)
                fighterGame.specialItem.cacheDict[textureName] = [];
            var dict = fighterGame.specialItem.cacheDict[textureName];
            var theSpecialItem;
            if (dict.length > 0) {
                theSpecialItem = dict.pop();
            }
            else {
                theSpecialItem = new fighterGame.specialItem(RES.getRes(textureName), textureName);
            }
            return theSpecialItem;
        };
        specialItem.reclaim = function (theSpecialItem) {
            var textureName = theSpecialItem.textureName;
            if (fighterGame.specialItem.cacheDict[textureName] == null)
                fighterGame.specialItem.cacheDict[textureName] = [];
            var dict = fighterGame.specialItem.cacheDict[textureName];
            if (dict.indexOf(theSpecialItem) == -1)
                dict.push(theSpecialItem);
        };
        specialItem.cacheDict = {};
        return specialItem;
    }(egret.Bitmap));
    fighterGame.specialItem = specialItem;
    __reflect(specialItem.prototype, "fighterGame.specialItem");
})(fighterGame || (fighterGame = {}));
//# sourceMappingURL=specialItem.js.map