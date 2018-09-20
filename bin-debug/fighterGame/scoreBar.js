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
    var scoreBar = (function (_super) {
        __extends(scoreBar, _super);
        function scoreBar() {
            var _this = _super.call(this) || this;
            _this.width = 280;
            _this.height = 72;
            _this.textAlign = "cneter";
            _this.font = RES.getRes("hylx_fnt");
            _this.text = "分数0";
            return _this;
        }
        scoreBar.prototype.update = function (score) {
            this.text = "分数" + score;
        };
        return scoreBar;
    }(egret.BitmapText));
    fighterGame.scoreBar = scoreBar;
    __reflect(scoreBar.prototype, "fighterGame.scoreBar");
})(fighterGame || (fighterGame = {}));
//# sourceMappingURL=scoreBar.js.map