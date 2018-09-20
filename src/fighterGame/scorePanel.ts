module fighterGame
{
    export class scorePanel extends egret.Sprite
    {
        private txt:egret.BitmapText;

        public constructor()
        {
            super();
            var g:egret.Graphics = this.graphics;
            g.beginFill(0x000000,0.8);
            g.drawRect(0,0,400,300);
            g.endFill();
            this.txt = new egret.BitmapText()
            this.txt.width = 400;
            this.txt.height = 280;
            this.txt.textAlign = "center";
            this.txt.font = RES.getRes("fzzt_fnt");
            this.txt.y = 60;
            this.addChild(this.txt);
            this.touchEnabled = false;
            this.touchChildren = false;
        }

        public showScore(value:number):void
        {
            var msg:string = "腾小飞，你的成绩是\n"+value+"\n转发分享到朋友圈\n召唤更多同伴\n一起对抗碧油鸡叭！";
            this.txt.text = msg;
        }
    }
}