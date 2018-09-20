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
    var bgMap = (function (_super) {
        __extends(bgMap, _super);
        function bgMap() {
            var _this = _super.call(this) || this;
            _this.rollSpeed = 2;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        bgMap.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            var texture = RES.getRes("background_png");
            this.textureHeight = texture.textureHeight;
            this.rowCount = Math.ceil(this.stageH / this.textureHeight) + 1;
            this.bmpRef = [];
            for (var i = 0; i < this.rowCount; i++) {
                var bgBmp = fighterGame.createBitmapByName("background_png");
                bgBmp.y = this.textureHeight * i - (this.textureHeight * this.rowCount - this.stageH);
                this.bmpRef.push(bgBmp);
                this.addChild(bgBmp);
            }
        };
        bgMap.prototype.start = function () {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        };
        bgMap.prototype.enterFrameHandler = function (event) {
            for (var i = 0; i < this.rowCount; i++) {
                var bgBmp = this.bmpRef[i];
                bgBmp.y += this.rollSpeed;
                if (bgBmp.y > this.stageH) {
                    bgBmp.y = this.bmpRef[0].y - this.textureHeight;
                    this.bmpRef.pop();
                    this.bmpRef.unshift(bgBmp);
                }
            }
        };
        bgMap.prototype.pause = function () {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        };
        return bgMap;
    }(egret.DisplayObjectContainer));
    fighterGame.bgMap = bgMap;
    __reflect(bgMap.prototype, "fighterGame.bgMap");
})(fighterGame || (fighterGame = {}));
//# sourceMappingURL=bgMap.js.map