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
    var bloodBar = (function (_super) {
        __extends(bloodBar, _super);
        function bloodBar(textureEmptyBar, textureFullBar, typeName, initValue) {
            var _this = _super.call(this) || this;
            _this.emptyBar = new egret.Bitmap(textureEmptyBar);
            _this.addChild(_this.emptyBar);
            _this.fullBar = new egret.Bitmap(textureFullBar);
            var textureW = _this.fullBar.width;
            var textureH = _this.fullBar.height;
            _this.theMask = new egret.Shape();
            _this.theMask.graphics.beginFill(0xFFFFFF);
            _this.theMask.graphics.drawRect(initValue * textureW, 0, (1 - initValue) * textureW, textureH);
            _this.theMask.graphics.endFill();
            _this.fullBar.mask = _this.theMask;
            _this.addChild(_this.fullBar);
            _this.addChild(_this.theMask);
            _this.typeName = typeName;
            return _this;
        }
        bloodBar.prototype.update = function (value) {
            var textureW = this.fullBar.width;
            var textureH = this.fullBar.height;
            this.theMask.graphics.clear();
            this.theMask.graphics.beginFill(0xFFFFFF);
            this.theMask.graphics.drawRect(value * textureW, 0, (1 - value) * textureW, textureH);
            this.theMask.graphics.endFill();
        };
        return bloodBar;
    }(egret.DisplayObjectContainer));
    fighterGame.bloodBar = bloodBar;
    __reflect(bloodBar.prototype, "fighterGame.bloodBar");
})(fighterGame || (fighterGame = {}));
//# sourceMappingURL=bloodBar.js.map