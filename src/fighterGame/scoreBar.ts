module fighterGame
{
    export class scoreBar extends egret.BitmapText
    {
        public constructor()
        {
            super();
            this.width = 280;
            this.height = 72;
            this.textAlign = "cneter";
            this.font = RES.getRes("hylx_fnt");
            this.text = "分数0";
        }

        public update(score:number):void
        {
            this.text = "分数"+score; 
        }
    }
}