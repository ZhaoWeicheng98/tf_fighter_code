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
    var scorePanel = (function (_super) {
        __extends(scorePanel, _super);
        function scorePanel() {
            var _this = _super.call(this) || this;
            var g = _this.graphics;
            g.beginFill(0x000000, 0.8);
            g.drawRect(0, 0, 400, 300);
            g.endFill();
            _this.txt = new egret.BitmapText();
            _this.txt.width = 400;
            _this.txt.height = 280;
            _this.txt.textAlign = "center";
            _this.txt.font = RES.getRes("fzzt_fnt");
            _this.txt.y = 60;
            _this.addChild(_this.txt);
            _this.touchEnabled = false;
            _this.touchChildren = false;
            return _this;
        }
        scorePanel.prototype.showScore = function (value) {
            var msg = "腾小飞，你的成绩是\n" + value + "\n转发分享到朋友圈\n召唤更多同伴\n一起对抗碧油鸡叭！";
            this.txt.text = msg;
        };
        return scorePanel;
    }(egret.Sprite));
    fighterGame.scorePanel = scorePanel;
    __reflect(scorePanel.prototype, "fighterGame.scorePanel");
})(fighterGame || (fighterGame = {}));
//# sourceMappingURL=scorePanel.js.map