module fighterGame
{
    export class sharePanel extends egret.Sprite
    {
        private bg:egret.Bitmap;

        private txt:egret.BitmapText;

        public constructor()
        {
            super();
            this.bg = createBitmapByName("sharebackground_jpg");
            this.addChild(this.bg);

            this.txt = new egret.BitmapText();
            this.txt.width = 400;
            this.txt.height = 600;
            this.txt.textAlign = "center";
            this.txt.font = RES.getRes("sharefont_fnt")
            this.txt.y = 200;
            this.txt.x = (this.width - this.txt.width) / 2;

            this.addChild(this.txt);
            this.touchChildren = false;
            this.touchEnabled = false;
        }

        public show(scoreValue:number)
        {
            this.txt.text = "我在与碧油鸡的战斗中\n获得了\n"+scoreValue+"分\n快来加入我们！"
        }
    }
}