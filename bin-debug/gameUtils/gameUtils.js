var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var fighterGame;
(function (fighterGame) {
    var GameUtils = (function () {
        function GameUtils() {
        }
        /**基于矩形的碰撞检测*/
        GameUtils.hitTest = function (obj1, obj2) {
            var rect1 = obj1.getBounds();
            var rect2 = obj2.getBounds();
            rect1.x = obj1.x;
            rect1.y = obj1.y;
            rect2.x = obj2.x;
            rect2.y = obj2.y;
            return rect1.intersects(rect2);
        };
        return GameUtils;
    }());
    fighterGame.GameUtils = GameUtils;
    __reflect(GameUtils.prototype, "fighterGame.GameUtils");
    /**
  * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
  * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
  */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    fighterGame.createBitmapByName = createBitmapByName;
})(fighterGame || (fighterGame = {}));
//# sourceMappingURL=gameUtils.js.map