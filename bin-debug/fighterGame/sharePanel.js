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
    var sharePanel = (function (_super) {
        __extends(sharePanel, _super);
        function sharePanel() {
            var _this = _super.call(this) || this;
            _this.bg = fighterGame.createBitmapByName("sharebackground_jpg");
            _this.addChild(_this.bg);
            _this.txt = new egret.BitmapText();
            _this.txt.width = 400;
            _this.txt.height = 600;
            _this.txt.textAlign = "center";
            _this.txt.font = RES.getRes("sharefont_fnt");
            _this.txt.y = 200;
            _this.txt.x = (_this.width - _this.txt.width) / 2;
            _this.addChild(_this.txt);
            _this.touchChildren = false;
            _this.touchEnabled = false;
            return _this;
        }
        sharePanel.prototype.show = function (scoreValue) {
            this.txt.text = "我在与碧油鸡的战斗中\n获得了\n" + scoreValue + "分\n快来加入我们！";
        };
        return sharePanel;
    }(egret.Sprite));
    fighterGame.sharePanel = sharePanel;
    __reflect(sharePanel.prototype, "fighterGame.sharePanel");
})(fighterGame || (fighterGame = {}));
//# sourceMappingURL=sharePanel.js.map