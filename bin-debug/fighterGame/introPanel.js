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
    var introPanel = (function (_super) {
        __extends(introPanel, _super);
        function introPanel() {
            var _this = _super.call(this) || this;
            var g = _this.graphics;
            g.beginFill(0x000000, 0.8);
            g.drawRect(0, 0, 400, 300);
            g.endFill();
            _this.txt = new egret.TextField();
            _this.txt.width = 400;
            _this.txt.height = 300;
            _this.txt.textAlign = "center";
            _this.txt.textColor = 0xFFFFFF;
            _this.txt.size = 28;
            _this.txt.y = 60;
            _this.txt.text = "快来帮助腾小飞\n用月饼对抗碧油鸡的攻击吧！\n场景中会有实验室随便捣鼓\n的药水、接错线的电路板、纳米\n材料月饼和天外飞星掉落，\n注意收集哦！";
            _this.addChild(_this.txt);
            _this.touchChildren = false;
            _this.touchEnabled = false;
            return _this;
        }
        return introPanel;
    }(egret.Sprite));
    fighterGame.introPanel = introPanel;
    __reflect(introPanel.prototype, "fighterGame.introPanel");
})(fighterGame || (fighterGame = {}));
//# sourceMappingURL=introPanel.js.map