module fighterGame
{
    export class introPanel extends egret.Sprite
    {
        private txt:egret.TextField;

        public constructor()
        {
            super();
            var g:egret.Graphics = this.graphics;
            g.beginFill(0x000000,0.8);
            g.drawRect(0,0,400,300);
            g.endFill();
            this.txt = new egret.TextField();
            this.txt.width = 400;
            this.txt.height = 300;
            this.txt.textAlign = "center";
            this.txt.textColor = 0xFFFFFF;
            this.txt.size = 28;
            this.txt.y = 60;

            this.txt.text = "快来帮助腾小飞\n用月饼对抗碧油鸡的攻击吧！\n场景中会有实验室随便捣鼓\n的药水、接错线的电路板、纳米\n材料月饼和天外飞星掉落，\n注意收集哦！"

            this.addChild(this.txt);
            this.touchChildren = false;
            this.touchEnabled = false;
        }
    }
}